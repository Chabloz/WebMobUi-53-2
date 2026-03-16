<script setup>
  import { ref, watch } from 'vue';
  import TheHeader from './components/TheHeader.vue';
  import BaseButton from './components/BaseButton.vue';

  const email = defineModel('email');

  watch(email, (newEmail) => {
    if (newEmail == "admin@example.com") {
      email.value = "";
    }

  });

  const temperature = ref(25)
  console.log(temperature.value);

  setInterval(() => {
    temperature.value += 1
  }, 1000)
</script>

<template>
  <TheHeader />
  <h1>test</h1>
  <BaseButton label="warning" type="warning"/>
  <!-- <input  @input="email=this.value()" :value="email" type="email" placeholder="email..."/> -->
  <input v-model="email" type="email" placeholder="email..."/>
  {{  email }}
  <p>Temperature: {{  temperature }}</p>
</template>

<style>
 a {
  color: tomato;
 }
</style>
