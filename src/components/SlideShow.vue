<template>
   <div class="slideshow-container">
    
        
    
    <div class="slide"><img src="@/assets/img1.jpg"></div>
    <div class="slide"><img src="@/assets/img2.jpg"></div>
    <div class="slide"><img src="@/assets/img3.jpg"></div>
    <div class="slide"><img src="@/assets/img4.jpg"></div>
    <br>

    <!-- <img :src='require(`../assets/${img2}`)' >  -->
    
   </div>
  
  
  
</template>

<script>

export default {
  name: 'SlideShow',
  components:{
      
  },
  // data: function() {
  //     return{
  //     img1:"@/assets/plumping1.jpg",
  //     img2: 'plumbing.jpg'
  //     }
  // },
   
  
  props: {
    msg: String
  }
}
</script>



<style lang="scss" scoped>

.slideshow-container{
  display: flex;
  overflow-x: auto;
  
}
.slide {
  width: 100%;
  flex-shrink: 0;
  height: auto;
}


</style>
