
<template>
  <Headerr/>
  <RecipeCard :meal="store.randomMeal" />
</template>

<script setup>
  import { theMealDB } from '../stores/theMealDB.js';
  import Headerr from '../components/Home/Header.vue';
  import RecipeCard from '../components/Cards/RecipeCard.vue';
  const store = theMealDB();
  store.randomMeal = {
    id: '',
    name: '',
    category: '',
    origin: '',
    instruction: '',
    ingredients: [],
    measures: [],
    img: '',
    yt: ''
  }
  store.fetchRandomMeal();
</script>
