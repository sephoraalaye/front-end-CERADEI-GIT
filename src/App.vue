<script setup>
  import { RouterView } from 'vue-router'
  import FooterVue from './components/footer.vue'
  import NavVue from './components/nav.vue'
</script>

<template>
  <!-- <header>
    <div class="wrapper">
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
    </div>
  </header> -->
  <NavVue />
  <RouterView />
  <FooterVue />
</template>

<style scoped>

</style>
