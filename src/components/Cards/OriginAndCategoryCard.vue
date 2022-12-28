
<template>
  <section :class="{ dark : store.darkMode, light : !store.darkMode }" >
    <div class="container">
      <div class="header">
        <h1>All {{ route.params.origin }} {{ route.params.category }} Recipes </h1>
        <button @click="router.back()"> <font-awesome-icon icon="fa-solid fa-chevron-left"/> back</button>
      </div>
      <div class="origin-recipes">
        <div v-for="meal in props.meals" :key="meal.idMeal" class="cards">
          <div @click="recipe(meal.idMeal)"  class="img-container">
            <img :src="meal.strMealThumb" :alt="meal.strMeal">
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
  import { useRoute, useRouter } from 'vue-router';
  import { theMealDB } from '../../stores/theMealDB.js';
  
  const route = useRoute(); const router = useRouter();
  const store = theMealDB();

  const props = defineProps({
    meals: Array,
  });

  const recipe = (id) => {
    store.singleRecipe = {
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
    store.fetchSingleRecipe(id);
    router.push({ name: 'recipe', params: { id: id } });
  }

</script>

<style lang="scss" scoped>
  section {
    padding: 5rem 0;
  }
  .header {
    width: 100%; margin: 2rem 0; display: flex;
    align-items: center; justify-content: space-between;
    button {
      outline: none; border: none;
      background-color: transparent;
      font-size: 1.2rem; color: var(--color-2);
      cursor: pointer;
    }
  }
  .origin-recipes {
    width: 100%; height: 100%;
    display: flex; flex-wrap: wrap;
  }
  .cards {
    margin: 1rem; padding: .5rem;
    background-color: var(--color-2);
    text-align: center; cursor: pointer;
    h2 {
      margin: .5rem 0;
      color: var(--color-0);
    }
  }
  .img-container {
    width: 300px; height: 300px;
    img {
      width: 100%; height: 100%;
      object-fit: cover;
    }
  }
</style>
