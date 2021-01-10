<template>
  <div class="readmore-container">
    <div class="title">
      <h1>Toilet Bowl Choke Bears Family</h1>
    </div>
    <div class="content1">
      <div>

        <h1>Toilet Bowl Choke Bears Family</h1>
        <hr />
        <p>
          We know you experience it too. <br> <br> Among the most common plumbing problems
          we encounter is a toilet bowl choke that seemed to come out of
          nowhere. Thousands of Americas dread it. The first reaction would
          be confusion because you certainly have no idea what caused it. You’ll
          probably try to fix it to no avail. Soon, you’ll realise, just like so
          many others, that it’s not a walk in the park. What do you do? <br> <br> You
          call for toilet bowl choke services. <br><br> Yes, we specialise in this kind
          of service so you wouldn’t have to deal with it yourself. We can help
          you determine the cause of the choke and how to avoid it. There are
          some temporary solutions that you can try out next time it happens and
          you can learn all about them from us.
        </p>
      </div>
      <div>
        <img src="@/assets/toilet.jpg" alt="" />
      </div>
    </div>
    <div class="content2">
      <h1>Toilet bowl choke causes</h1>
      <hr />
      <h2>Foreign objects</h2>
      <p>
        Until you’ve experienced it, you wouldn’t think twice about throwing
        toilet paper into the bowl. We get it. Some of us used to do that too.
        Until we were enlightened about its repercussions. <br><br> When you use too much
        toilet paper, it can possibly clog the toilet bowl’s drainage. Toilet
        paper and other wastes can also accumulate over time, turning something
        avoidable into a problem that can cost you a lot of time and money.
      </p>
      <h2>Pipe obstruction</h2>
      <p>
        This is among the more complicated cases because the toilet bowl choke
        is caused by obstruction in one or more of the pipes. It could be plants
        or other objects surrounding them. Land homeowners have a higher chance
        of experiencing this given that their pipes are situated underground.
      </p>
      <h2>Flush</h2>
      <p>
        It could be that it’s not your pipe nor foreign objects clogging your
        toilet bowl. It’s possible that it’s due to weak flush that you can’t
        flush the waste away. We have several plumbing solutions to solve this.
        We can either replace it or repair it if it’s not that damaged.
      </p>
    </div>
    <div class="content3">
      <h1>How to prevent a toilet bowl choke</h1>
      <hr />
      <p>
        There are a number of things you can do to avoid having this kind of
        problem. One, you can stop throwing foreign objects into the bowl. This
        means that the toilet should go to the trash bin. This has been
        reiterated to us by people we know or by the establishments we visit.
        And it is for good reason. <br> You also have to tell other people to do the
        same.
      </p>
      <br />
      <p>
        Another thing you can do is take care of a problem immediately. It’s a
        habit of many homeowners to address a problem only when worse comes to
        worst. The benefit in addressing the problem right away lies in the fact
        that the earlier we detect the problem, the easier it is to solve. If
        you keep putting off the plan to call a professional, it can get more
        complicated or more problems can arise. So what should you do? Call us. <br>
        Another benefit of having a false ceiling is you can save a lot on your
        energy consumption. When you have it installed in your room, it can
        lower the temperature a great deal, minimising your air-conditioning
        usage.
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "ReadMoreClearChokes",
  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.readmore-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.title{
    color: white;
    background-color: rgb(0, 162, 255);
}
.content1{
    display: flex;
    flex-direction: row;
    justify-content: center;
    padding: 10%;
    padding-right: 15%;
    padding-left: 15%;
    text-align: start;
    align-items: flex-end;
}
.content1 h2,p{
    text-align: start;
}
.content1 hr{
//    position: absolute;
   margin-left: 0%;
    // color:rgb(0, 162, 255) ;
    width: 150px;
    // border: none;
    height: 0px;
    border: none;
    border-top: 3px solid rgb(0, 162, 255);
}
.content1 img{
    padding-left: 5%;
}
.content2{
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-left: 15%;
    padding-right: 15%;
    padding-top: 5%;
    padding-bottom: 5%;
    // align-items: flex-start;
    background-color: rgb(243, 243, 243);
}
.content2 h2, p{
    text-align: start;
}
.content2 hr{
    //   margin-left: 0%;
    // color:rgb(0, 162, 255) ;
    width: 150px;
    // border: none;
    height: 0px;
    border: none;
    border-top: 3px solid rgb(0, 162, 255);
}
.content3{
    display: flex;
    flex-direction: column ;
    justify-content: center;
    padding-left: 15%;
    padding-right: 15%;
    padding-top: 5%;
    padding-bottom: 5%;
    
}
.content3 hr{
      width: 150px;
    // border: none;
    height: 0px;
    border: none;
    border-top: 3px solid rgb(0, 162, 255);

}
.content3 p{
    text-align: center;
}

// .content3 h2, p{
//     text-align: center;
// }



</style>
