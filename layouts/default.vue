<template>
  <main>
    <nav-bar />
    <nuxt />
    <footer-bar />
    <transition name="slide-fade">
      <side-nav v-if="$store.state.openSideNav" />
    </transition>
  </main>
</template>

<script>
import NavBar from "@/components/Nav";
import FooterBar from "@/components/Footer";
export default {
  components: { NavBar, FooterBar },
};
</script>

<style scoped>
.slide-fade-enter-active {
  transition: all .3s ease;
}
.slide-fade-leave-active {
  transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateX(-100px);
  opacity: 0;
}
</style>
