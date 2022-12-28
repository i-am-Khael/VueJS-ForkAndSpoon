
<template>
  <section :class="{ dark: store.darkMode, light: !store.darkMode }" >
    <div class="container">
      <div class="header-nav">
        <h1>Recipe Categories.</h1>
        <button @click="router.back()" ><font-awesome-icon icon="fa-solid fa-chevron-left"/>back</button>
      </div>
      <div class="categories-card">
        <div v-for="category in store.categoriesRecipe" :key="category.idCategory" @click="categoryRoute(category.strCategory)" class="card">
          <div class="img-container">
            <img :src="category.strCategoryThumb" :alt="category.strCategory">
          </div>
          <h3>{{ category.strCategory }}</h3>
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
  store.categoriesRecipe = [];
  store.fetchCategories();
  const categoryRoute = (categoryParam) => {
    store.categoryMealRecipe = [];
    store.fetchCategory(categoryParam);
    router.push({ name: 'category', params: { category : categoryParam } })
  }
</script>

<style lang="scss" scoped>
  .container {
    padding: 6rem 0;
  }
  .header-nav {
    margin: 2rem; display: flex;
    align-items: center; justify-content: space-between;
    button {
      outline: none; border: none;
      background-color: transparent;
      color: var(--color-2);  font-size: 1.2em;
      cursor: pointer;
    }
  }
  .categories-card {
    width: 100%; height: 100%; display: flex;
    align-items: center; justify-content: center;
    flex-wrap: wrap; margin: 3rem 0; gap: 2rem;
  }
  .card {
    padding: 1rem; color: var(--color-1);
    background-color: var(--color-2);
    border-radius: .5rem; cursor: pointer;
    h3 {
      margin: 1rem 0; text-align: center;
    }
  }
</style>
