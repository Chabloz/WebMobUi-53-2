<script setup>
  import { onMounted, onUnmounted } from 'vue';

  onMounted(() => console.log("mount home"));
  onUnmounted(() => console.log("Home unmouted"));
</script>

<template>
  <h2>Home</h2>
</template>

<style scoped>

</style>