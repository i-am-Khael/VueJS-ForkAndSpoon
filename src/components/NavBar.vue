
<template>
  <nav :class="{ dark : !store.darkMode, light : store.darkMode }" >
    <div class="container">
      <RouterLink :to="{ name: 'home' }" > <img src="../assets/imgs/fork-and-spoon.png" alt="Fork and Spoon Logo"> <h1>Fork & Spoon</h1> </RouterLink>
      <div class="theme">
        <font-awesome-icon @click="store.toggleTheme" v-if="store.darkMode" icon="fa-solid fa-sun" />
        <font-awesome-icon @click="store.toggleTheme" v-else icon="fa-solid fa-moon" />
      </div>
    </div>
  </nav>
</template>

<script setup>
  import { theMealDB } from '../stores/theMealDB.js';
  const store = theMealDB();
</script>

<style lang="scss" scoped>
  nav {
    width: 100%; padding: .6rem 0;
    box-shadow: 0 0 10px 1px #444;
    position: fixed; z-index: 10;
    transition: all .8s ease-in-out;
  }
  .container {
    display: flex; align-items: center;
    justify-content: space-between;
  }
  a {
    display: flex; align-items: center;
    justify-content: center; gap: .5rem;
    img {
      width: 55px;
    }
    h1 {
      font-family: var(--kaushan-script); color: var(--color-2);
    }
  }
  .fa-sun, .fa-moon {
    font-size: 2em; color: var(--color-2);
    cursor: pointer;
  }
</style>
