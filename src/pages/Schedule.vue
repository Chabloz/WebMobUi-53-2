<script setup>
  import { computed } from 'vue';
  import { useFetchJson } from '../composables/useFetchJson';

  const {data: schedule, error, loading} = useFetchJson('https://chabloz.eu/files/horaires/all') ; // URL Hard codée ?

  const filter = defineModel();
  filter.value = '';

  const scheduleFiltered = computed(() => {
    return schedule.value.filter((c) => c.label.search(filter.value) != -1);
  });

  const scheduleSorted = computed(() => {
    const sorted = scheduleFiltered.value.toSorted((c1, c2) => c1.start.localeCompare(c2.start));
    return  sorted;
  })
</script>

<template>
  Horaire IM
  <div v-if="loading">Chargement en cours ...</div>
  <div v-if="schedule">
    Horaires des cours 2026
    <label>Filter:</label>
    <input type="text" v-model="filter"> {{  filter }}
    <div v-for="cours of scheduleSorted">
      {{  cours.label }} {{ cours.start }}
    </div>
  </div>
</template>

<style scoped>

</style>