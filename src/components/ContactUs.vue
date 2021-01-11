<template>
  <div class="contact-container">
   
       <!-- <img src="@/assets/clickhere.jpg" height="100%"> -->
        <div class="icon">
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
      />

      <!-- Add font awesome icons -->
      <a href="https://www.google.com/intl/vi/gmail/about/"><img src="@/assets/ggg.png" width="100" height="100" alt=""></a>
      <a href="https://www.facebook.com/bearsfamilyplumbingheatingcooling"><img src="@/assets/fb.png" width="100" height="100" alt=""></a>
      <a href="https://web.archive.org/web/20160322122040/http://www.bbb.org/wyoming-and-northern-colorado/"><img src="@/assets/iconbss.png" alt=""></a>
      <a href="#"><img src="@/assets/yelp.png" width="70" height="70" alt=""></a>
    </div>
   
   <!-- <div>
       <button>Contact Us</button>
   </div> -->
  </div>
</template>

<script>
export default {
  name: 'ContactUs',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.contact-container{
    display: flex;
    flex-direction: column;
    padding-top:3%;
    padding-bottom: 3%;
}
button{
    position: relative;
    
    top: -130%;
    width: 160px;
    height: 50px;
    background-color: rgb(0, 162, 255);
    color: white;
    font-size: 20px;
}
.icon {
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
}

</style>
