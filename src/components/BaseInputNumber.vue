<script setup>
  import { computed } from 'vue';
  import { roundToDecimal } from '../utils/math.js';

  const model = defineModel();

  defineProps({
    label: String,
  });

  const formatted = computed({
    get: () => roundToDecimal(model.value),
    set: (val) => model.value = parseFloat(val),
  });
</script>

<template>
  <div>
    <label>{{ label }}</label>
    <input type="number" v-model.number="formatted">
  </div>
</template>

<style scoped>
  div {
    margin-bottom: 1em;
  }
  label {
    display: block;
    margin-bottom: 0.5em;
  }
</style>