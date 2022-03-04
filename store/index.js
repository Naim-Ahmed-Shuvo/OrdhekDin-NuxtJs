export const state = () => ({
    counter: 10,
    moreInfoCards:[
        {
            image: require("@/assets/images/Couple-v2.svg"),
            amount: " 5974 +",
            text:"মোট দ্বীনদার পাত্র-পাত্রীর বায়োডাটা" 
        },
        {
            image: require("@/assets/images/Male-v2.svg"),
            amount: " 5974 +",
            text:"মোট পাত্রের বায়োডাটা"
        },
        {
            image: require("@/assets/images/Female-v2.svg"),
            amount: " 5974 +",
            text:"মোট পাত্রীর বায়োডাটা"
        },
        {
            image: require("@/assets/images/Ring.svg"),
            amount: "  384 + ",
            text:"সর্বমোট সফল বিবাহ " 
        }
    ],
    openSideNav: false
  })
  
  export const mutations = {
    increment(state) {
      state.counter++
    },
    openSideNav(state){
       state.openSideNav = true;
       console.log(state.openSideNav);
    },
    hideSideNav(state){
        state.openSideNav = false;
    }
  }
  