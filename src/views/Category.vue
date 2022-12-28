
<template>
  <OriginAndCard :meals="store.categoryMealRecipe" />
</template>

<script setup>
  import { theMealDB } from '../stores/theMealDB.js';
  import OriginAndCard from '../components/Cards/OriginAndCategoryCard.vue';
  const store = theMealDB();
</script>
