<script setup>
  import BaseInputNumber from '../components/BaseInputNumber.vue';

  const temperatureSi = ref(0.1 + 0.2); // Kelvin


  const tempKelvin = defineModel('kelvin', {
    get: () => {
      return temperatureSi.value;
    },
    set: (val) => {
      temperatureSi.value = Number(val);
    }
  });

  const tempCelcius = defineModel('celcius', {
    get: () => {
      return temperatureSi.value - 273.15;
    },
    set: (val) => {
      temperatureSi.value = Number(val) + 273.15;
    }
  });
</script>

<template>
  <h2>Temperatures converter</h2>
</template>

<style scoped>

</style>