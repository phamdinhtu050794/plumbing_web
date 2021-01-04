<template>
  <div class="about-container">
    <div class="header-about">
      <h1>
        Here’s a little something about our Plumbing, Heating, and Cooling
        Services Clan
      </h1>
    </div>
    <div class="body-about">
      <div class="body-left">
        <img src="@/assets/bear.png" alt="" />
      </div>
      <div class="body-right">
        <div>
          <p>
            At Bears Family Plumbing, Heating, and Cooling, we are a
            family-owned and operated company with extensive experience in the
            plumbing and hvac industry. Over the years we have progressed in our
            success with professionalism, integrity, honesty, and taking pride
            in our workmanship. With dedication and confidence, we guarantee our
            workmanship and materials. Bears Family Plumbing, Heating and
            Cooling, LLC., is a family owned business. We specialize in all
            areas of plumbing, heating and cooling and have over 35 years of
            experience in the industry. Michael Bears started his career as a
            Plumbing Technician he then became a Master Plumber, which takes
            many hours of on the job training and testing to accomplish. Michael
            is an entrepreneur at heart and is very passionate about his work.
            Which naturally led him to opening his own company. He has ample
            experience in sales and marketing as well. Chris Scadden also
            started his career as a Plumbing Technician, he moved up quickly in
            the field to become a Sales Manager then an Operations Manager to
            CFO of his own company. Chris has over 15 years’ experience in the
            industry and an extensive background in Budgeting and Sales. Cameron
            Andersen started his career as an HVAC Installer he worked hard and
            became an HVAC Technician. He has worked hard to become extremely
            knowledgeable in his field and it shows in his work. These three
            gentlemen pride themselves in keeping up with the industry
            standards, but more importantly in growing a thriving business they
            can be proud of. The foundation of Bears Family Plumbing, Heating
            and Cooling is built on treating every customer with honesty and
            integrity.
          </p>
        </div>
        <button>About Us</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AboutUs",
  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.about-container{
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    
    // background-color: rgb(29, 29, 29);
}
.header-about{
    color:rgb(0, 162, 255);;
}
.body-about{
    display: flex;
    flex-direction: row;

}
.body-left{
    width: 50vw;
    background-color: black;
}
.body-left img{
    text-align: center;
    margin: 25%;
}
.body-right{
    width: 50%;
    background-color: rgb(29, 29, 29);
    padding: 5%;
    

}
.body-right p{
    font-size: 20px;
    color: white;
    text-align: start;
}
button{
    width: 150px;
    height: 50px;
    background-color: rgb(0, 162, 255);
    color: white;
    font-size: 20px;
}
</style>
