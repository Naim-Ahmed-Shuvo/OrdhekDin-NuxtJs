<template>
  <transition name="slide">
    <div class="sidnav">
      <div class="sidnav__inner">
        <a href="javascript:void(0)" class="closebtn" @click="closeNav"
          >&times;</a
        >
        <a href="#">হোম</a>
        <a href="#">আমাদের সম্পর্কে</a>
        <a href="#">প্রশ্ন ও উত্তর</a>
        <a href="#">টিউটোরিয়াল</a>
        <a href="#">যোগাযোগ</a>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: "side-nav",
  methods: {
    closeNav() {
      this.$store.commit("hideSideNav");
    },
  },
};
</script>

