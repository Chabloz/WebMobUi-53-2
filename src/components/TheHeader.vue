<script setup>
  import { ref } from 'vue';
  import BaseButton from './BaseButton.vue';

  const theme = ref('light');

  function switchTheme() {
    theme.value = theme.value === 'light' ? 'dark' : 'light';
  }
</script>

<template>
  <header>
    <h1>Title</h1>
    <BaseButton @click="switchTheme" :label="theme" type="info"/>
  </header>
</template>

<style scoped>
  h1 {
    color: #333;
  }
  header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1rem;
    background-color: #f5f5f5;
  }
</style>