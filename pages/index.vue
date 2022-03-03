<template>
   <section>
       <banner/>
       <more-info/>
       <islam-order/>
   </section>
</template>

<script>
import Banner from "@/components/Banner";
import IslamOrder from '../components/IslamOrder.vue';
export default {
  name: 'IndexPage',
  components:{Banner,IslamOrder}
}
</script>
