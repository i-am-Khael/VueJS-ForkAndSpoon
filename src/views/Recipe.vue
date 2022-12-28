
<template>
  <section :class="{ dark : store.darkMode, light: !store.darkMode }" >
    <RecipeCard :meal="store.singleRecipe" :recipe="true" />
  </section>
</template>

<script setup>
  import { useRouter } from 'vue-router';
  import { theMealDB } from '../stores/theMealDB.js';
  import RecipeCard from '../components/Cards/RecipeCard.vue';
  const router = useRouter();
  const store = theMealDB();
</script>

<style lang="scss" scoped>
  section {
    padding: 2rem 0;
  }
</style>
