<template>
  <div class="more-info">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <div class="button-1">
            <a href="#">আপনার বায়োডাটা সম্পূর্ণ করুন</a>
          </div>
        </div>
        <div class="col-12 mt-5">
          <div class="button-2">
            <a href="#">যেভাবে বায়োডাটা তৈরি করবেন (ভিডিও)</a>
          </div>
        </div>
      </div>
      <div class="row more-info__cards">
        <div class="col-3" v-for="(data,idx) in cardData" :key="idx">
          <div class="card-container">
            <div class="card-container__img">
              <img :src="data.image" alt="img" />
            </div>
            <div class="card-container__info mt-4">
              <span> {{data.amount}} </span>
              <p>{{data.text}}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "more-info",
  computed: {
      cardData(){
          return this.$store.state.moreInfoCards;
      }
  }
};
</script>