<script setup>
  import BaseButton from './BaseButton.vue';
  import { useJsonStorage } from '../composables/useJsonStorage';

  const { val : theme} = useJsonStorage('prefix:theme', 'light');

  function switchTheme() {
    theme.value = theme.value === 'light' ? 'dark' : 'light';
  }

  defineProps({
    title: String
  })
</script>

<template>
  <header>
    <h1><slot></slot></h1>
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