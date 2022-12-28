
<template>
  <section :class="{ dark: store.darkMode, light: !store.darkMode }" >
    <div class="container">
      <div v-show="store.loading" class="loading">
        <h1>LOADING . . .</h1>
      </div>
      <div v-show="props.recipe" @click="router.back()" class="header-nav">
        <button><font-awesome-icon icon="fa-solid fa-chevron-left"/> back</button>
      </div>
      <div v-show="!store.loading" class="recipe-container">
        <div class="img-container">
          <img :src="props.meal.img" :alt="props.meal.name">
        </div>
        <div class="recipe-info">
          <h1>{{ props.meal.name }}</h1>
          <menu class="tags">
            <button @click="origin" >{{ props.meal.origin }}</button>
            <button @click="category" >{{ props.meal.category }}</button>
            <a :href="props.meal.yt" target="_blank" rel="noopener noreferrer">Youtube</a>
          </menu>
          <div class="measures-and-ingredients">
            <ul class="measures">
              <li v-for="msr in props.meal.measures" >{{ msr }}</li>
            </ul>
            <ul class="ingredients">
              <li v-for="ing in props.meal.ingredients" >{{ ing }}</li>
            </ul>
          </div>
          <p>{{ props.meal.instruction }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
  import { useRouter } from 'vue-router';
  import { theMealDB } from '../../stores/theMealDB.js';
  const router = useRouter();
  const store = theMealDB();
  const props = defineProps({
    meal: Object,
    recipe: Boolean
  });
  const origin = () => {
    store.originMealRecipe = []; store.originCategory = true;
    router.push({ name: 'origin', params: { origin: props.meal.origin } });
    store.fetchOrigin(props.meal.origin);
  }
  const category = () => {
    store.categoryMealRecipe = []; store.originCategory = false;
    router.push({ name: 'category', params: { category: props.meal.category } });
    store.fetchCategory(props.meal.category);
  }
</script>

<style lang="scss" scoped>
  section {
    padding: 5rem 0;
  }
  .loading {
    display: flex; align-items: center;
    justify-content: center; margin-top: 3rem;
  }
  .recipe-container {
    display: grid; grid-template-columns: 1fr 1fr;
    border: 3px solid var(--color-2);
    border-radius: .6rem; overflow: hidden;
  }
  .img-container {
    width: 100%; height: 100%;
    img {
      width: 100%; height: 100%;
      object-fit: cover;
    }
  }
  .recipe-info {
    padding: 2rem; color: var(--color-1);
    background-color: var(--color-2);
    .tags {
      display: flex; gap: 1rem;
      margin: .5rem 0;
      button, a {
        padding: .3rem .5rem; color: var(--color-1);
        font-weight: 700; text-transform: uppercase;
        border-radius: 3rem; font-size: .7em;
        background-color: #4169e1;
        outline: none; box-shadow: none;
        border: none; cursor: pointer;
      }
    }
    .measures-and-ingredients {
      display: flex; gap: 2rem;
      margin: 1rem 0;
    }
  }
  .header-nav {
    width: 100%; max-width: 1440px;
    margin: 1.5rem 0; display: flex;
    align-items: center; justify-content: end;
    button {
      outline: none; border: none;
      background-color: transparent;
      color: var(--color-2); font-size: 1.2rem;
      cursor: pointer;
    }
  }
  @media (max-width: 720px) {
    .recipe-container {
      grid-template-columns: 1fr;
    }
    .recipe-info {
      padding: 1rem;
      h1 {
        font-size: 1.3em;
      }
    }
  }
</style>