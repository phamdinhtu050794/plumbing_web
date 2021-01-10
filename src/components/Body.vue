<template>
  <div class="body-container">
   <SlideShow></SlideShow>  
   <Estimates></Estimates> 
   <Services></Services>
   <AboutUs></AboutUs>
   <Testimonials></Testimonials>
   <ContactUs></ContactUs>
   
  </div>
</template>

<script>

import SlideShow from "@/components/SlideShow.vue"
import Estimates from "@/components/Estimates.vue"
import Services from "@/components/Services.vue"
import AboutUs from "@/components/AboutUs.vue"
import Testimonials from "@/components/Testimonials.vue"
import ContactUs from "@/components/ContactUs.vue"
export default {
  name: 'Body',
  components:{
      SlideShow,
      Estimates,
      Services,
      AboutUs,
      Testimonials,
      ContactUs
  },
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
