
<template>
  <header :class="{ dark : store.darkMode, light: !store.darkMode }" >
    <div class="container">
      <div class="header-intro">
        <span>Welcome to</span>
        <h1>Fork and Spoon</h1>
        <span>Your next meal, recipe provider.</span>
        <RouterLink :to="{ name: 'categories' }">Recipe Categories</RouterLink>
      </div>
      <div class="img-container">
        <img src="../../assets/imgs/slider-food.png" alt="Awesome Cuisine Image">
      </div>
    </div>
  </header>
</template>

<script setup>
  import { theMealDB } from '../../stores/theMealDB.js';
  const store = theMealDB();
</script>

<style lang="scss" scoped>
  header {
    padding: 5rem 0;
  }
  .container {
    display: grid; grid-template-columns: 1fr 1fr;
  }
  .header-intro {
    width: 100%; height: 100%;
    display: flex; flex-direction: column;
    align-items: center; justify-content: center;
    h1 {
      color: var(--color-2); font-size: 3em;
      font-family: var(--kaushan-script);
    }
    span {
      font-size: 1.2em;
    }
    a {
      margin-top: 1rem; padding: .5rem;
      transition: all .8s ease-in-out;
      &:hover {
        color: var(--color-2);
        border-color: var(--color-2);
      }
    }
  }
  .img-container {
    width: 100%; height: 100%; padding: 2rem 0;
    img {
      width: 100%; height: 100%;
      object-fit: cover;
    }
  }
  @media (max-width: 720px) {
    .container {
      padding-top: 3rem;
      grid-template-columns: 1fr;
    }
    .header-intro {
      h1 {
        font-size: 2em;
      }
      span {
        font-size: 1em;
      }
    }
  }
</style>