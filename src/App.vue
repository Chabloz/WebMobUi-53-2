<script setup>
  import { ref } from 'vue';
  import TheHeader from './components/TheHeader.vue';
  import BaseInputNumber from './components/BaseInputNumber.vue';
  const temperatureSi = ref(0.1 + 0.2); // Kelvin

  const tempKelvin = defineModel('kelvin', {
    get: () => {
      return (temperatureSi.value).toFixed(2);
    },
    set: (val) => {
      temperatureSi.value = Number(val);
    }
  });

  const tempCelcius = defineModel('celcius', {
    get: () => {
      return (temperatureSi.value - 273.15).toFixed(2);
    },
    set: (val) => {
      temperatureSi.value = Number(val) + 273.15;
    }
  });
</script>

<template>
  <TheHeader />
  <div>Kelvin: {{ tempKelvin }}</div>
  <BaseInputNumber label="°C" v-model="tempCelcius" />
  <BaseInputNumber label="K" v-model="tempKelvin" />
</template>

<style>
 a {
  color: tomato;
 }
</style>
