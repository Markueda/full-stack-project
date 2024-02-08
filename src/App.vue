<script setup>
import { RouterLink, RouterView } from 'vue-router'
import CalculatorView from "@/views/CalculatorView.vue";
</script>

<template>
  <header>
    <div class="wrapper">
      <nav>
        <RouterLink :to="{ name: 'calculator' }">Calculator</RouterLink> |
        <RouterLink :to="{ name: 'contact' }">Contact</RouterLink>
      </nav>
    </div>
  </header>
  <RouterView/>
</template>

<style scoped>
.wrapper {
  text-align: center;
  color: #2c3e50;
}
nav {
  padding: 30px;
}
nav a {
  font-weight: bold;
  color: #2c3e50;
}
nav a.router-link-exact-active {
  color: #42b983;
}
</style>
