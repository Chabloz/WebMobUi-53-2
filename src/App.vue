<script setup>
  import { ref } from 'vue';
  import TheHeader from './components/TheHeader.vue';

  import Home from './pages/Home.vue';
  import Temperature from './pages/Temperature.vue';
  import Schedule from './pages/Schedule.vue';

  import { useHashRoute } from './composables/useHashRoute';

  const routes = [
    {hash: '#schedule', component: Schedule},
    {hash: '#home', component: Home},
    {hash: '#temperature', component: Temperature},
  ]

  const { currentComponent, currentRoute, navigateTo } = useHashRoute(routes);



</script>

<template>
  <TheHeader title="Hello World" id="main-title">
    WebMobUI
  </TheHeader>
  <main>
    <component :is="currentComponent"/>
  </main>
</template>

<style>
 * {
  padding: 0;
  margin: 0;
 }
 main {
  padding: 1em;
 }
</style>
