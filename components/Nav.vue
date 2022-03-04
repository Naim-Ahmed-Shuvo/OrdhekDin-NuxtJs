<template>
  <nav class="sticky">
    <div class="container">
      <div class="row">
        <div class="col-2 d-flex align-items-center">
          <div class="logo-container">
            <img src="@/assets/images/ordhekdeen-logo.svg" alt="logo" />
          </div>
          <div class="mobile-menu" @click="openSideNav">
              <span></span>
          </div>
        </div>
        <div class="col-8">
          <div class="nav-links">
            <ul>
              <li><a href="#">হোম</a></li>
              <li><a href="#">আমাদের সম্পর্কে</a></li>
              <li><a href="#">প্রশ্ন ও উত্তর</a></li>
              <li><a href="#">টিউটোরিয়াল</a></li>
              <li><a href="#"> যোগাযোগ</a></li>
            </ul>
          </div>
        </div>
        <div class="col-2">
          <div class="icons-container">
            <a href="#">
              <i class="bi bi-person-fill"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "name",
  methods:{
    openSideNav(){
      this.$store.commit('openSideNav');
    }
  }
};
</script>

<style>
</style>