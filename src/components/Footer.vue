<template>
  <div class="footer-container">
      <div class="ui-footer">
           
      
        <h4><a href="#">Home | </a></h4> 
        <h4><a href="#">General Plumbing | </a></h4> 
        <h4><a href="#"> Residential Plumbing  | </a></h4> 
        <h4><a href="#">HVAC | </a></h4> 
        <h4><a href="#">About Us | </a></h4> 
        <h4><a href="#">Our News | </a></h4> 
        <h4><a href="#"> Our Testimonials | </a></h4> 
        <h4><a href="#">Contact Us </a></h4> 
      
      
    
      </div>
      <div>
          <h5>Copyright Bears Family P.H.C. © 2016. All Rights Reserved.</h5>
      </div>
      <div>
          <h5>Designed by <a href="#">Jsay Designs, LLC.</a></h5>
      </div>
  </div>
</template>

<script>
export default {
  name: 'Footer',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.footer-container{
    display: flex;
    flex-direction: column;
    justify-content: center;
    background-color: grey;
}
.ui-footer{
    display: flex;
    flex-direction: row;
    justify-content: center;
}
.ui-footer a{
   color: blue;
  //    color: #FFFFFF;
  text-decoration: none;
}

</style>
