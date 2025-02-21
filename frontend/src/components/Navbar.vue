<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <nav class="navbar">
    <RouterLink to="/" class="nav-brand">
      Pokédex
    </RouterLink>
    <div class="nav-links">
      <RouterLink to="/">Accueil</RouterLink>
      <RouterLink to="/pokedex">Pokédex</RouterLink>
    </div>
  </nav>
</template>


<style scoped>
.navbar {
  background-color: white;
  padding: 15px 30px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.nav-brand {
  font-size: 1.5em;
  font-weight: bold;
  color: #2c3e50;
  text-decoration: none;
}

.nav-links {
  display: flex;
  gap: 20px;
}

.nav-links a {
  color: #2c3e50;
  text-decoration: none;
  font-weight: 500;
}

.nav-links a.router-link-active {
  color: #42b983;
}
</style>