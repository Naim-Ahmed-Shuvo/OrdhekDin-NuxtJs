<template>
  <section>
    <banner />
    <more-info />
    <islam-order />
    <transition name="slide-fade">
      <side-nav v-if="$store.state.openSideNav" />
    </transition>
  </section>
</template>

<script>
import Banner from "@/components/Banner";
import IslamOrder from "../components/IslamOrder.vue";
import SideNav from "../components/SideNav.vue";
export default {
  name: "IndexPage",
  components: { Banner, IslamOrder, SideNav },
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
