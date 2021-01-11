<template>
  <div class="residentials-container">
    <div class="title">
      <h1>
        Residential Plumbing Repair and Maintenance can be frightening, that’s
        why you need our Services. Live in Denver, Loveland, and or Northern
        Colorado area, come by or give us a call
      </h1>
    </div>

    <div class="contents">
      <div>
        <img src="@/assets/PI-R-Plumbing.png" alt="" />
      </div>
      <div class="contents-para">
        <p>
          The plumbing system you have in your home is used throughout your day
          and goes almost unnoticed until you have a problem. Your home plumbing
          system is used to accomplish a large percentage of your day to day
          needs including showering, washing your hands, doing dishes, watering
          and of course going to the bathroom. Issues in the plumbing system can
          arise as your system gets older and can lead you to a variety of
          plumbing issues. Whatever your situation, you can rely on the
          assistance of Bears Family Plumbing, Heating, and Cooling / HVAC to
          get you back up and running. <br> <br> Denver, Loveland, and Northern
          Coloradan’s experience different types of plumbing needs, but you
          don’t need to deal with any of these plumbing related issues on your
          own. With the help of Bears Family Plumbing, Heating, and Cooling, we
          will use our expertise to help fix your plumbing quickly. Installing a
          new toilet or a sink might sound simple, but it can be a frustrating
          job for an untrained person. If you have a leak inside your home, you
          will need to find the exact place of the leak and make necessary
          arrangements to fix it. If you try to find the leak on your own, you
          may end up spending a large amount of your precious time while Bears
          Family Plumbing, Heating, and Cooling is equipped with the necessary
          tools to identify the leak within minutes. Then we will analyze the
          type of leak and provide the best possible solution for you.
        </p>
        <ul>
          <h3>Here’s Some Of The Plumbing Services We Provide:</h3>
          
          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
          />

          <li>
            <i class="fa fa-share" style="font-size: 15px; color: red"></i
            >DRAIN CLEANING AND REPAIR
          </li>
          <li>
            <i class="fa fa-share" style="font-size: 15px; color: red"></i> LEAKY PIPES
          </li>
          <li>
            <i class="fa fa-share" style="font-size: 15px; color: red"></i>
           LEAKY FAUCETS
          </li>
          <li>
            <i class="fa fa-share" style="font-size: 15px; color: red"></i>
           WATER HEATERS
          </li>
          <li>
            <i class="fa fa-share" style="font-size: 15px; color: red"></i>
           GARBAGE DISPOSALS
          </li>
          <li>
            <i class="fa fa-share" style="font-size: 15px; color: red"></i> FIX
           KITCHEN SINKS
          </li>
          <li>
            <i class="fa fa-share" style="font-size: 15px; color: red"></i> FIX
           TOILET REPAIRS & INSTALLATION
          </li>
          <li>
            <i class="fa fa-share" style="font-size: 15px; color: red"></i>
           BATHTUB AND SHOWERS
          </li>
          <li>
            <i class="fa fa-share" style="font-size: 15px; color: red"></i>
          LAUNDRY ROOM FIXTURES
          </li>
          <li>
            <i class="fa fa-share" style="font-size: 15px; color: red"></i> NEW FIXTURES
          </li>
        </ul>

      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Residentials",
  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.residentials-container{
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 10%;
}
.contents{
    display: flex;
    flex-direction: row;
    justify-content: center;
}
.contents-para{
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    text-align: start;
}
.contents-para ul li{
    list-style: none;
}
</style>
