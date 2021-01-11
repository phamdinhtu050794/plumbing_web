<template>
  <div class="companybio-container">
    <div class="title">
      <h1>
        Here’s a little something about our Plumbing, Heating, and Cooling
        Services Clan
      </h1>
    </div>
    <div class="contents">
      <div>
        <img src="@/assets/bear.png" alt="" />
      </div>
      <div>
        <p>
          At Bears Family Plumbing, Heating, and Cooling, we are a family-owned
          and operated company with extensive experience in the plumbing and
          hvac industry. Over the years we have progressed in our success with
          professionalism, integrity, honesty, and taking pride in our
          workmanship. With dedication and confidence, we guarantee our
          workmanship and materials. <br> <br> Bears Family Plumbing, Heating and Cooling,
          LLC., is a family owned business. We specialize in all areas of
          plumbing, heating and cooling and have over 35 years of experience in
          the industry. <br> Michael Bears started his career as a Plumbing
          Technician he then became a Master Plumber, which takes many hours of
          on the job training and testing to accomplish. Michael is an
          entrepreneur at heart and is very passionate about his work. Which
          naturally led him to opening his own company. He has ample experience
          in sales and marketing as well. <br> Chris Scadden also started his career
          as a Plumbing Technician, he moved up quickly in the field to become a
          Sales Manager then an Operations Manager to CFO of his own company.
          Chris has over 15 years’ experience in the industry and an extensive
          background in Budgeting and Sales. <br> Cameron Andersen started his career
          as an HVAC Installer he worked hard and became an HVAC Technician. He
          has worked hard to become extremely knowledgeable in his field and it
          shows in his work. <br> These three gentlemen pride themselves in keeping
          up with the industry standards, but more importantly in growing a
          thriving business they can be proud of. The foundation of Bears Family
          Plumbing, Heating and Cooling is built on treating every customer with
          honesty and integrity.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CompanyBio",
  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.companybio-container{
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 10%;
}
.title h1{
    color:rgb(0, 162, 255) ;
}
.contents{
    display: flex;
    flex-direction: row;
    justify-content: center;
}
.contents p{
    text-align: start;
    padding-left: 5%;
}
</style>
