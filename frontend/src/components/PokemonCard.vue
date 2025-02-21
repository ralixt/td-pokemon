<script setup>
import { useRouter } from 'vue-router'
import {computed} from "vue";

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


const typeColors = {
  acier: '#B7B7CE',
  combat: '#C22E28',
  dragon: '#7038F8',
  eau: '#6390F0',
  feu: '#FD7D24',
  fee: '#EE99AC',
  // fée: '#EE99AC',
  glace: '#96D9D6',
  insecte: '#A6B91A',
  normal: '#A8A77A',
  plante: '#7AC74C',
  poison: '#A33EA1',
  psy: '#F95587',
  roche: '#B6A136',
  sol: '#E2BF65',
  spectre: '#735797',
  tenebres: '#705746',
  // ténèbres: '#705746',
  vol: '#A98FF3',
  electrik: '#F7D02C',
  // électrik: '#F7D02C'
}

const borderColor = computed(() => {
  const firstType = pokemon.types[0]?.name.toLowerCase()
  return typeColors[firstType] || '#ddd'
})

</script>

<template>
  <div class="pokemon-card" @click="goToPokemon(pokemon.pokedex_id)" :style="{ borderColor: borderColor }">
    <img class="pokemon-picture" :src="pokemon.sprites.regular" :alt="pokemon.name.fr">
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
  width: 250px;
  height: 400px;
  margin: 10px;
  border: 5px solid;

}

.pokemon-card:hover {
  transform: translateY(-5px);
}

.pokemon-picture {
  width: 100%;
  max-width: 200px;
  margin: 0 auto;
  display: block;
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

.acier {
  background-color: #B7B7CE;
}

.combat {
  background-color: #C22E28;
}

.dragon {
  background-color: #7038F8;
}

.eau {
  background-color: #6390F0;
}

.feu {
  background-color: #FD7D24;
}

.fee {
  background-color: #EE99AC;
}

.fée {
  background-color: #EE99AC;
}

.glace {
  background-color: #96D9D6;
}

.insecte {
  background-color: #A6B91A;
}

.normal {
  background-color: #A8A77A;
}


.plante {
  background-color: #7AC74C;
}
.poison {
  background-color: #A33EA1;
}

.psy{
  background-color: #F95587;
}

.roche {
  background-color: #B6A136;
}

.sol {
  background-color: #E2BF65;
}

.spectre {
  background-color: #735797;
}

.tenebres {
  background-color: #705746;
}

.ténèbres {
  background-color: #705746;
}


.vol {
  background-color: #A98FF3;
}

.electrik {
  background-color: #F7D02C;
}

.électrik {
  background-color: #F7D02C;
}

</style>