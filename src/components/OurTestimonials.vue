<template>
  <div class="testimonials-container">
    <div class="title">
      <h2>
        Denver, Loveland, and Northern Colorado, we strive to ensure that your
        home's HVAC and Plumbing are up to par.
      </h2>
    </div>
    <div class="contents">
      <p>
        Our technicians are committed to maximizing the life of your assets and
        ensuring that your home rests free of plumbing, heating, and or cooling
        issues. If you are intending to fix any problems relating to your
        plumbing, air ventilation, refrigeration, and or air-conditioning
        systems, it is important that you rely on us, Bears Family Plumbing,
        Heating, and Cooling to get you taken care of. <br> <br> Our knowledgeable and
        trained technicians will troubleshoot a number of your Plumbing and HVAC
        systems using the best diognostic tools. The breadth of experience of
        our technicians allows them to look past the immediate problems and
        determine the extent of repair required. Their training and expertise
        enables them to detect hidden faults with great precision and accuracy.
        In this way, immense burden is lifted off your shoulders by trusting and
        using our Plumbing and HVAC repair services. New or Up Coming issues and
        problems can be brought to your attention so that you do not have to
        worry about making repairs on a frequent basis.
      </p>
      <img src="@/assets/bear-family.png" width="400" height="300" />
    </div>
    <div class="comment">
      <h3>But, don't just take our word for it.</h3>
      <h2>Please take a look below for just some of our past clients testimonials:</h2>
    </div>
  </div>
</template>

<script>
export default {
  name: "OurTestimonials",
  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.testimonials-container{
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 10%;
}
.title h2{
    color:  rgb(0, 162, 255);
}
.contents{
    display: flex;
    flex-direction: row;
    justify-content: center;
}
.contents p{
    text-align: start;
    padding-top: 5%;
}
.comment{
    text-align: start;
}
.comment h3{
    color: rgb(0, 162, 255);
}
.comment h2{
    color: red;
}

</style>
