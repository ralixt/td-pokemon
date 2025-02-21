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

const getBorderClass = (type) => {
  return `border-${type.toLowerCase()}`
}

</script>

<template>
  <div class="pokemon-card" @click="goToPokemon(pokemon.pokedex_id)" :class="'border-' + pokemon.types[0]?.name.toLowerCase()">
    <div class="pokemon-header">
      <span class="pokemon-id">#{{ String(pokemon.pokedex_id).padStart(3, '0') }}</span>
      <h3>{{ pokemon.name.fr }}</h3>
    </div>
    <img class="pokemon-picture" :src="pokemon.sprites.regular" :alt="pokemon.name.fr">
    <div class="pokemon-info">
      <div class="types" v-if="pokemon.types">
        <span
            v-for="type in pokemon.types"
            :key="type.name"
            class="type"
            :class="type.name.toLowerCase()">
          {{ type.name }}
        </span>
      </div>
      <div class="stats">
        <div>
          <div class="stat"><strong>HP:</strong> {{ pokemon.stats.hp }}</div>
          <div class="stat"><strong>ATK:</strong> {{ pokemon.stats.atk }}</div>
          <div class="stat"><strong>DEF:</strong> {{ pokemon.stats.def }}</div>
        </div>
        <div>
          <div class="stat"><strong>SPE ATK:</strong> {{ pokemon.stats.spe_atk }}</div>
          <div class="stat"><strong>SPE DEF:</strong> {{ pokemon.stats.spe_def }}</div>
          <div class="stat"><strong>VIT:</strong> {{ pokemon.stats.vit }}</div>
        </div>
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
  height: 450px;
  margin: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.pokemon-card:hover {
  transform: translateY(-5px);
}

.pokemon-header {
  text-align: center;
  margin-bottom: 10px;
}

.pokemon-picture {
  width: 100%;
  max-width: 200px;
  margin: 0 auto;
  display: block;
}

.pokemon-info {
  text-align: center;
  width: 100%;
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

.stats {
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
  text-align: left;
  background-color: #f0f0f0;
  color: #333;
  width: 100%;
  padding: 10px;
  border-radius: 5px;
}

.stat {
  margin: 5px 0;
  padding: 5px;
  border-radius: 5px;
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

.border-acier {
  border: 5px solid #B7B7CE;
}

.border-combat {
  border: 5px solid #C22E28;
}

.border-dragon {
  border: 5px solid #7038F8;
}

.border-eau {
  border: 5px solid #6390F0;
}

.border-feu {
  border: 5px solid #FD7D24;
}

.border-fee {
  border: 5px solid #EE99AC;
}

.border-fée {
  border: 5px solid #EE99AC;
}

.border-glace {
  border: 5px solid #96D9D6;
}

.border-insecte {
  border: 5px solid #A6B91A;
}

.border-normal {
  border: 5px solid #A8A77A;
}

.border-plante {
  border: 5px solid #7AC74C;
}

.border-poison {
  border: 5px solid #A33EA1;
}

.border-psy {
  border: 5px solid #F95587;
}

.border-roche {
  border: 5px solid #B6A136;
}

.border-sol {
  border: 5px solid #E2BF65;
}

.border-spectre {
  border: 5px solid #735797;
}

.border-tenebres {
  border: 5px solid #705746;
}

.border-ténèbres {
  border: 5px solid #705746;
}

.border-vol {
  border: 5px solid #A98FF3;
}

.border-electrik {
  border: 5px solid #F7D02C;
}

.border-électrik {
  border: 5px solid #F7D02C;
}


</style>