<template>
  <div class="estimates-container">
    <div class="free1">
      <img src="@/assets/free.jpg" width="250" height="400" />
    </div>
    <div class="free">
      <img src="@/assets/free1.png" alt="" />
      <div><h3>Clear Chokes</h3></div>
      <div class="p">
        <h5>
          We specialise in this kind of service so you wouldn’t have to deal
          with it yourself. We can help you determine the cause of the choke and
          how to avoid it.
        </h5>
      </div>
      <router-link :to="{ name: 'ReadMoreClearChokes', params: { readmoreclearId: 123 }}">Read More</router-link>
      <!-- <a href="`/readmoreclear/${}`">Read More</a> -->
      <!-- <a :href="'/readmoreclear/' + goto_readmoreclear()"></a> -->
      
      <!-- <router-link :to="{ name: 'g-map' }> Read More </router-link> -->
      
    </div>
    <div class="free">
      <img src="@/assets/free2.png" alt="" />
      <div><h3>New Installation & Repair</h3></div>
      <div class="p">
        <h5>
          Installation and repair of Taps, Sinks, Toilet Bowls, Urinals, Water
          Heaters, Pipes, New re-piping services for the whole house.
        </h5>
      </div>
      <router-link :to="{ name: 'NewInstallation', params: { newinsatllationId: 123 }}">Read More</router-link>
    </div>
    <div class="free">
      <img src="@/assets/free3.png" alt="" />
      <div><h3>Leakage Detection and Repair</h3></div>
      <div class="p">
        <h5>
          Solve leakage issue by repairing underground or concealed pipes, sink
          pipe, copper/stainless steel pipes, toilet bowls, flush systems.
        </h5>
      </div>
       <router-link :to="{ name: 'LeakingPipe', params: { leakingpipeId: 123 }}">Read More</router-link>
    </div>
  </div>
</template>

<script>
import ReadMoreClearChokes from '@/components/ReadMoreClearChokes'
import NewInstallation from '@/components/NewInstallation'
import LeakingPipe from '@/components/LeakingPipe'
export default {
  name: "Estimates",

  components:{
    ReadMoreClearChokes,
    NewInstallation,
    LeakingPipe
  },
  methods:{
    goto_readmoreclear(){
      this.$router.push({name:'ReadMoreClearChokes', params:{readmoreclearId:123}})
    },
    goto_newinstallation(){
      this.$router.push({name:'NewInstallation', params:{newinsatllationId:123}})
    },
     goto_leakingpipe(){
      this.$router.push({name:'LeakingPipe', params:{leakingpipeId:123}})
    }
  },
  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.estimates-container {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  padding: 30%;
  padding-top: 5%;
  padding-bottom: 5%;
}
// .free{
//     width: 20%;
//     height: 40%;
// }
.free h3 {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  text-align: start;
//   background-color: red;
  padding-right: 20%;
  margin-left: 50px;
}
.p{
    display: flex;
    justify-content: flex-start;
    text-align: start;
    margin-left: 50px;
}
.free a{
    margin-left: 10px;
     text-decoration: none;
     color: blue;
}
.free img{
    margin-left: 50px;
}
</style>
