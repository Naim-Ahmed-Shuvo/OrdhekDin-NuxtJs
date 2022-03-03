<template>
  <div class="banner">
    <div class="container">
      <div class="row">
        <div class="col-sm-12 col-md-12 col-lg-4">
          <div class="search-card">
            <form action="#" class="search-card__form">
              <div class="input-group">
                <div class="input-group__label">
                  <label for="#">আমি খুঁজছি </label>
                </div>
                <div class="custom-select">
                  <select>
                    <option selected disabled>সকল বায়োডাটা</option>
                  </select>
                  <div class="arrow-down"></div>
                </div>
              </div>
              <div class="input-group">
                <div class="input-group__label">
                  <label for="#">বৈবাহিক অবস্থা</label>
                </div>
                <div class="custom-select">
                  <select>
                    <option selected disabled>সকল</option>
                  </select>
                  <div class="arrow-down"></div>
                </div>
              </div>
              <div class="input-group">
                <div class="input-group__label">
                  <label for="#">জেলা</label>
                </div>
                <div class="custom-select">
                  <select>
                    <option selected disabled>সকল জেলা</option>
                  </select>
                  <div class="arrow-down"></div>
                </div>
              </div>
              <div class="input-group">
                <div class="input-group__label">
                  <label for="#">বায়োডাটা নং</label>
                </div>
                <div class="custom-input">
                  <input type="text" />
                </div>
              </div>
              <div class="input-group">
                <div class="input-group__label"></div>
                <div class="custom-input">
                  <button type="submit">
                    <i class="bi bi-search"></i>
                    বায়োডাটা খুঁজুন
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
        <div class="col-sm-12 col-md-12 col-lg-8">
          <div class="welcome text-center">
            <p class="welcome-text">
              যে ব্যক্তি বিয়ে করলো সে তার অর্ধেক দ্বীন পূর্ণ করে ফেললো। বাকি
              অর্ধেকের জন্য সে আল্লাহকে ভয় করুক।
            </p>
            <span class="welcome-txt-bottom">
              বায়হাকী, শু’আবুল ঈমান – ৫৪৮৬
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "banner",
};
</script>

<style>
</style>