<template>
  <div class="testimonials-container">
    <div class="testimonials-header">
      <h1>Client </h1><h1 id="blue">Testimonials</h1>
    </div>
    <div class="testimonials-content">
      <div class="content">
        <p>
          We got an ad for a free second opinion from Bears Family. So happy we
          did. The first company to visit before Bears Family told us we were
          looking at $600-$800 dollars in parts for our Central A/C and that the
          parts were likely to burn out quickly. So the other company wanted us
          to drop $5500 on a new unit. Bears Arrived on time and quickly
          diagnosed the same problem as the other company, however they only
          charged $140 for the same repair and were not at all pushy with high
          price sales. In fact, they recommended we keep our unit as it appeared
          healthy. Additionally they said that the other company’s quote for a
          house our size (1700 sq. ft) was extremely high. Cameron was pleasant,
          professional, and got things done quickly so I could continue with my
          day. I will be calling Bears Family for all my HVAC needs from now on.
          <br />
          – Kevin D.
        </p>
      </div>
      <div class="content">
        <p>
          This is your next go to company. I needed a tank-less water heater and
          they gave me a great price, so I hired them and have no bad things to
          say. They came to the house looking professional and not like they
          were from some back alley. They got the job done quick, looks / works
          awesome, and it’s like they were never here except for the new
          equipment. Very Happy Customer! <br />
          – Jt S
        </p>
      </div>
      <div class="content">
        <p>
          I had a low pressure water issue with the toilet bowl and consulted
          with S & E guy. The staff who dropped by was super efficient, helpful
          and prompt. Pleased with the service and will highly recommend to
          others. <br />
          Ernest Tan
        </p>
      </div>
      <div class="content">
        <p>
          We had a leakage problem in our wash basin. An licensed HDB plumber
          from S & E came and fixed it, it was super efficient, helpful and
          prompt. Very pleased with the service.Totally recommended. <br>
           Helen Lim
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Testimonials",
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
    justify-content: space-around;
    height: 60vh;
    background-color: rgb(218, 224, 222);
}
.testimonials-header{
    display: flex;
    flex-direction: row;
    justify-content: center;
    padding-top: 2%;
    
    
}
#blue{
    color:  rgb(0, 162, 255);
    margin-left: 1%;
}
.testimonials-content{
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    padding: 15%;
    padding-bottom: 0%;
    padding-top: 5%;
    overflow: scroll;
    


}
.content{
    width: 20%;
    height: 70%;
    text-align: start;
    border: 0.5px solid white;
    background-color: white;
    // padding-bottom: 5%;
    border-radius: 17px;
    
    overflow:scroll;
    padding: 2%;
    
}
.content p{
    overflow: scroll;
    // padding: 5%;
}
</style>
