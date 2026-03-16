<script setup>
  defineProps({
    label: String,
    type: {
      type: String,
      default: 'info'
    }
  })
</script>

<template>
  <button :class="type">{{ label }}</button>
</template>

<style scoped>
  button {
    border-radius: 4px;
    margin: .2rem;
    padding: .3rem 1rem;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    color: black;
    min-width: 6rem;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
  }
  .info {
    background-color: lightblue;
    border: none;
    cursor: pointer;
  }
  .warning {
    background-color: lightcoral;
    border: none;
    cursor: pointer;
  }
  button:active {
    transform: scale(0.95);
    transition: transform 0.1s ease;
  }

</style>