
<template>
  <footer :class="{ dark : !store.darkMode, light : store.darkMode }" >
    <div class="container">
      <div class="logo">
        <div class="logo-brand">
          <h1>Fork & Spoon</h1>
          <span>&copy; 2022</span>
        </div>
        <div class="logo-container">
          <img src="../assets/imgs/fork-and-spoon.png" alt="Fork and Spoon Logo">
        </div>
      </div>
      <div class="info">
        <p>This is a personal project of <a href="http://" target="_blank" rel="noopener noreferrer">Khael</a>, showcasing his VueJS Skill while integrating <a href="http://themealdb.com/api.php/" target="_blank" rel="noopener noreferrer">theMealDB API.</a></p>
        <ul>
          <li> <a href="http://github.com/i-am-Khael/ForkAndSpoon/" target="_blank" rel="noopener noreferrer"><font-awesome-icon icon="fa-brands fa-github"/></a></li>
          <li> <a href="http://michaelcasals.ml/" target="_blank" rel="noopener noreferrer"><font-awesome-icon icon="fa-solid fa-globe"/></a></li>
        </ul>
      </div>
    </div>
  </footer>
</template>

<script setup>
  import { theMealDB } from '../stores/theMealDB.js';
  const store = theMealDB();
</script>

<style lang="scss" scoped>
  footer {
    width: 100%; height: 100%; padding: 2rem 0;
    transition: all .8s ease-in-out;
  }
  .container {
    display: grid; gap: 1rem;
  }
  .info {
    display: flex; align-items: center;
    justify-content: space-between;
    flex-wrap: wrap; gap: 1rem;
  }
  p {
    a {
      color: var(--color-2);
    }
  }
  ul {
    display: flex; align-items: center;
    justify-content: center; gap: 1rem;
    li {
      font-size: 1.5em; 
      a {
        color: var(--color-2);
      }
    }
  }
  .logo {
    display: flex; align-items: center;
    justify-content: space-between;
    color: var(--color-2);
    h1 {
      font-size: 1.5em; font-family: var(--kaushan-script);
    }
    img {
      width: 55px;
    }
  }
</style>
