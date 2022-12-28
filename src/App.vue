
<template>
  <NavBar/>
  <RouterView/>
  <FooterBar/>
</template>

<script setup>
  import NavBar from './components/NavBar.vue';
  import FooterBar from './components/FooterBar.vue';
</script>

<style lang="scss">
  @import url('https://fonts.googleapis.com/css2?family=Kaushan+Script&family=Roboto+Slab:wght@400;500;600;700;900&family=Roboto:wght@400;500;700&display=swap');
  :root {
    --color-0: #000000;
    --color-1: #f5f5f5;
    --color-2: #546a79;
    --roboto: 'Roboto', sans-serif;
    --roboto-slab: 'Roboto Slab', serif;
    --kaushan-script: 'Kaushan Script', cursive;
  }
  *, *::before, *::after {
    margin: 0; padding: 0; box-sizing: border-box;
  }
  body {
    width: 100%; height: 100%;
    font-size: 1rem; font-family: var(--roboto);
  }
  main, section, header {
    width: 100%; min-height: 100vh;
    transition: all .8s ease-in-out;
  }
  h1, h2, h3, h4, h5, h6 {
    font-family: var(--roboto-slab);
  }
  a, li {
    text-decoration: none; list-style: none;
  }
  .container {
    width: 80%; max-width: 90rem;
    margin: 0 auto;
  }
  .light {
    color: var(--color-0); background-color: var(--color-1);
    .header-intro {
      a {
        color: var(--color-0); border: 1px solid var(--color-0);
      }
    }
  }
  .dark {
    color: var(--color-1); background-color: var(--color-0);
    .header-intro {
      a {
        color: var(--color-1); border: 1px solid var(--color-1);
      }
    }
  }

  @media (max-width: 720px) {
    .container {
      width: 90%;
    }
  }
</style>
