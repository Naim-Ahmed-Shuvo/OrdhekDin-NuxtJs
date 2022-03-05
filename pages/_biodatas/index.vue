<template>
  <div class="bio-datas">
    <div class="bio-data-header">
      <div class="container">
        <div class="row biodata-form">
          <div class="col-12 col-sm-12 col-md-12 col-lg-8">
            <div class="biodata-form-wrapper">
              <form action="#">
                <div class="input-container">
                  <div class="input-label">
                    <label for="biodata">আমি খুঁজছি</label>
                  </div>
                  <div class="input-input">
                    <select type="text" id="biodata">
                      <option value="#">সকল বায়োডাটা</option>
                    </select>
                  </div>
                </div>
                <div class="input-container">
                  <div class="input-label">
                    <label for="biodata">আমি খুঁজছি</label>
                  </div>
                  <div class="input-input">
                    <select type="text" id="biodata">
                      <option value="#">সকল বায়োডাটা</option>
                    </select>
                  </div>
                </div>
                <div class="input-container">
                  <div class="input-label">
                    <label for="biodata">আমি খুঁজছি</label>
                  </div>
                  <div class="input-input">
                    <select type="text" id="biodata">
                      <option value="#">সকল বায়োডাটা</option>
                    </select>
                  </div>
                </div>
                <div class="input-container">
                  <div class="input-label">
                    <label for="biodata">আমি খুঁজছি</label>
                  </div>
                  <div class="input-input">
                    <input type="text" id="biodata" />
                  </div>
                </div>
                <div class="input-container">
                  <div class="input-label"></div>
                  <div class="input-button">
                    <button type="submit">
                      <i class="bi bi-search"></i>
                      বায়োডাটা খুঁজুন
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="biodata-content mt-5">
      <div class="container">
        <div class="row">
          <div class="title">
            <h4>বায়োডাটা সমূহ</h4>
          </div>
        </div>
        <div class="row biodatas mt-5">
          <div class="container">
            <div class="row biodatas__cards">
              <div class="col-12 col-sm-12 col-md-6 col-lg-3" v-for="(data,idx) in bioDatas" :key="idx">
                <div class="biodatas__card">
                  <div class="card__header">
                    <div class="card__header__img">
                      <img :src="data.img" alt="img" />
                    </div>
                    <div class="card__header__number">
                      <h4>
                        {{data.bioText}} <br />
                        {{data.bioNUmber}}
                      </h4>
                    </div>
                  </div>
                  <div class="card__body mt-4">
                    <table class="table text-center">
                      <tbody>
                        <tr v-for="(info,idx) in data.bioInfo" :key="idx">
                          <th scope="row">{{info.title}}</th>
                          <td>{{info.value}}</td>
                        </tr>
                      </tbody>
                    </table>
                    <div class="card__button">
                        <nuxt-link to="/slug/single-biodata">
                            সম্পূর্ণ বায়োডাটা
                        </nuxt-link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    computed:{
        bioDatas(){
            return this.$store.state.bioDatas;
        }
    }
};
</script>

<style>
</style>