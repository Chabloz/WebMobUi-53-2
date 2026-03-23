<script setup>
  import { ref, watch, computed } from 'vue';
  import TheHeader from './components/TheHeader.vue';
  import BaseInputNumber from './components/BaseInputNumber.vue';

  // const email = defineModel('email');

  // watch(email, (newEmail) => {
  //   if (newEmail == "admin@example.com") {
  //     email.value = "";
  //   }

  // });

  const temperatureSi = ref(0.1 + 0.2); // Kelvin

  const tempKelvin = defineModel({
    get: () => {
      return (temperatureSi.value).toFixed(2);
    },
    set: (val) => {
      temperatureSi.value = Number(val);
    }
  });

  setTimeout(() => {
    tempKelvin.value = 200;
  }, 3000)

  const tempCelcius = computed(() => {
    return (temperatureSi.value - 273.15).toFixed(2);
  })



  // console.log(temperature.value);

  // setInterval(() => {
  //   temperature.value += 1
  // }, 1000)
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
