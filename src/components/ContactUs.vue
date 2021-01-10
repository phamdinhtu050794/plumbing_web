<template>
  <div class="contact-container">
   <div>
       <img src="@/assets/clickhere.jpg" height="100%">
   </div>
   <div>
       <button>Contact Us</button>
   </div>
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

</style>
