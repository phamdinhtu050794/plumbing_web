<template>
  <div class="header-container">
    <div class="uiup">
      <div class="logo">
        <h1>Bears Family</h1>
        <h2>Plumbing, Heating, and Cooling</h2>
      </div>
      <div class="callme">
          <div class="callnow">
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
        />
        <i class="fa fa-phone" style="font-size: 32px; color:  rgb(0, 162, 255)"></i>
        <h2>Call Now :</h2>
        </div>
        <div class="phone">
          <h2>Northern Colorado: 970-901-5987</h2>
          <h2 id="space">-----</h2>
          <h2>Greater Denver Area: 303-515-1526</h2>
        </div>
      </div>
    </div>
    <div class="ui">
      <div class="dropdown">
        <h3><a href="#">Home | </a></h3>
      </div>
      <div class="dropdown">
        <h3><a href="#">Plumping Service & Repair |</a></h3>
        <ul class="dropdown-content">
          <li><a href="#">Residentials</a></li>
        </ul>
      </div>
      <div class="dropdown">
        <h3><a href="#">HVAC Service & Repair | </a></h3>
      </div>
      <div class="dropdown">
        <h3><a href="#"> About Us |</a></h3>
        <ul class="dropdown-content">
          <li><a href="#">Our Company Bio</a></li>
          <li><a href="#">Our Testimonials</a></li>
          <li><a href="#">Our News</a></li>
        </ul>
      </div>
      <div class="dropdown">
        <h3><a href="#">Contact Us</a></h3>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Header",
  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.header-container {
  display: flex;
  flex-direction: column;
  // scroll-behavior:;
}
.uiup {
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
}
.uiup h1 {
  color: red;
}
.logo{
    display: flex;
    flex-direction: column;
    line-height: 0px;
    padding: 2%;

}
.callme{
    line-height: 0px;
    padding: 2%;
}
.ui {
  display: flex;
  flex-direction: row;
  justify-content: center;
  height: 75px;
  
  background: rgb(0, 162, 255);
}
.ui h3 {
  border: 2px;
  border-radius: 0px;

  // padding: 10px;
  margin: 10px;
}

.dropdown {
  position: relative;
  display: inline-block;
  padding-top: 1%;
}

.dropdown-content {
  display: none;
  position: absolute;
  background-color: rgb(0, 162, 255);
  //   min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  padding: 12px 16px;
  z-index: 1;
  width: 150px;
  height: auto;
  top: 50%;
  border-radius: 0px;
}

.dropdown:hover .dropdown-content {
  display: block;
}
a {
  font-size: 16px;
  color: white;
  //    color: #FFFFFF;
  text-decoration: none;
}
.more {
  display: flex;
  justify-content: center;
  align-items: center;
  border: 2px;
  border-radius: 25px;
  padding: 10px;
  background-color: red;
  width: 100px;
  height: 30px;
  margin-bottom: 10px;
}
.dropdown-content li {
  text-align: left;
}
.callme{
    display: flex;
    flex-direction: column;

}
.callnow{
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
}
.callnow i{
    position: relative;
    margin-top: 10px;
    margin-right: 20px;
}

.phone{
    display: flex;
    flex-direction: row;
    justify-content: start;
}
#space{
    color: white;
}
ul li{
    list-style: none;
}
.callnow h2{
    color: rgb(0, 162, 255);
}
</style>
