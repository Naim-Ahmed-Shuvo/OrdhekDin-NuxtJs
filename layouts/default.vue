<template>
  <main>
    <nav-bar />
    <nuxt />
    <footer-bar />
  </main>
</template>

<script>
import NavBar from "@/components/Nav";
import FooterBar from "@/components/Footer";
export default {
  components: { NavBar, FooterBar },
};
</script>
