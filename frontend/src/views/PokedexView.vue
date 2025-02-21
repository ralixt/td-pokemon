<script setup>
import { ref, onMounted } from 'vue'
import PokemonCard from '../components/PokemonCard.vue'
import pokemonService from '../services/pokemonService.js'

const pokemons = ref([])
const searchTerm = ref('')
const filteredPokemons = ref([])

const loadPokemons = async () => {
  try {
    pokemons.value = await pokemonService.getAllPokemons()
    filteredPokemons.value = pokemons.value
  } catch (error) {
    console.error('Erreur lors du chargement des pokémons:', error)
  }
}

const filterPokemons = () => {
  const search = searchTerm.value.toLowerCase()
  filteredPokemons.value = pokemons.value.filter(pokemon =>
      pokemon.name.fr.toLowerCase().includes(search) ||
      pokemon.name.en.toLowerCase().includes(search) ||
      pokemon.pokedex_id.toString().includes(search)
  )
}

onMounted(() => {
  loadPokemons()
})
</script>

<template>
  <div class="pokedex">
    <h1>Pokédex</h1>

    <div class="search-bar">
      <input
          type="text"
          v-model="searchTerm"
          placeholder="Rechercher un Pokémon..."
          @input="filterPokemons"
      >
    </div>

    <div class="pokemon-grid">
      <PokemonCard
          v-for="pokemon in filteredPokemons"
          :key="pokemon.pokedex_id"
          :pokemon="pokemon"
      />
    </div>
  </div>
</template>

<style scoped>
.pokedex {
  padding: 20px;
  max-width: 1200px;
  margin: 0 auto;
}

.search-bar {
  margin: 20px 0;
  text-align: center;
}

.search-bar input {
  width: 100%;
  max-width: 400px;
  padding: 10px 15px;
  border: 2px solid #ddd;
  border-radius: 25px;
  font-size: 1.1em;
}

.pokemon-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 20px;
  padding: 20px 0;
}

h1 {
  text-align: center;
  color: #2c3e50;
}
</style>