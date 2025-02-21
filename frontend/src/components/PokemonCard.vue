<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()

defineProps({
  pokemon: {
    type: Object,
    required: true
  }
})

const goToPokemon = (id) => {
  router.push(`/pokemon/${id}`)
}
</script>

<template>
  <div class="pokemon-card" @click="goToPokemon(pokemon.pokedex_id)">
    <img :src="pokemon.sprites.regular" :alt="pokemon.name.fr">
    <div class="pokemon-info">
      <span class="pokemon-id">#{{ String(pokemon.pokedex_id).padStart(3, '0') }}</span>
      <h3>{{ pokemon.name.fr }}</h3>
      <div class="types" v-if="pokemon.types">
        <span
            v-for="type in pokemon.types"
            :key="type.name"
            class="type"
            :class="type.name.toLowerCase()">
          {{ type.name }}
        </span>
      </div>
    </div>
  </div>
</template>

<style scoped>
.pokemon-card {
  border-radius: 10px;
  padding: 15px;
  background: white;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
  transition: transform 0.2s;
  cursor: pointer;
}

.pokemon-card:hover {
  transform: translateY(-5px);
}

.pokemon-info {
  text-align: center;
}

.pokemon-id {
  color: #666;
  font-size: 0.9em;
}

.types {
  display: flex;
  gap: 8px;
  justify-content: center;
  margin-top: 8px;
}

.type {
  padding: 4px 12px;
  border-radius: 20px;
  color: white;
  font-size: 0.85em;
  text-transform: capitalize;
}

.plante {
  background-color: #7AC74C;
}
.poison {
  background-color: #A33EA1;
}

</style>