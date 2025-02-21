<script setup>
// import TheWelcome from '../components/TheWelcome.vue'
</script>

<template>
  <div class="home">
    <h1>Bienvenue sur le Pokédex</h1>
    <p>Découvrez l'univers fascinant des Pokémon !</p>
    <RouterLink to="/pokedex" class="cta-button">
      Voir tous les Pokémon
    </RouterLink>
  </div>
</template>

<style scoped>
.home {
  text-align: center;
  padding: 50px 20px;
  max-width: 800px;
  margin: 0 auto;
}

h1 {
  font-size: 2.5em;
  color: #2c3e50;
  margin-bottom: 20px;
}

p {
  font-size: 1.2em;
  color: #666;
  margin-bottom: 30px;
}

.cta-button {
  display: inline-block;
  padding: 15px 30px;
  background-color: #42b983;
  color: white;
  text-decoration: none;
  border-radius: 25px;
  font-weight: bold;
  transition: background-color 0.3s;
}

.cta-button:hover {
  background-color: #3aa876;
}
</style>