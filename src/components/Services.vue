<template>
  <div class="service-container">
   <div><h1>Some of Our Plumbing Services</h1></div>
   <div class="service-content">
       <div class="item">
          <div> <h2>Plumbing Services</h2>
           <h5>Repairing, installation and replacement of sanitary  & plumbing fixtures for residential, commercial and industrial buildings</h5></div>
       </div>
       <div class="item">
           <h2>Plugging of pipe leakage</h2>
           <h5>This is an example of a short passage of text used to give your customer a brief overview of a particular service.</h5>
       </div>
        <div class="item">
           <h2>Pipe installation</h2>
           <h5>This is an example of a short passage of text used to give your customer a brief overview of a particular service.</h5>
       </div>
   </div>
   
   <div class="service-content1">
        <div class="item">
           <h2>Choked</h2>
           <h5>Clearing of Choked pipes, basin, toilet bowls, floor traps, manholes etc, by manual labour or machine assisted</h5>
       </div>
        <div class="item">
           <h2>Repair & Replacement</h2>
           <h5>Repair and replacement of water taps, mixer taps, piping, bottle traps, flexible hoses, basins, sink bowls, urinal bowls, flush cisterns and toilet accessories</h5>
       </div>
        <div class="item">
           <h2>Water Heaters</h2>
           <h5>Supply and installation of water heaters (instant or storage) and dustbin</h5>
       </div>

   </div>
  </div>
</template>

<script>
export default {
  name: 'Services',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.service-container{
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    background-color:rgb(231, 231, 231);
}

.service-content{
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    flex-wrap: wrap;
    padding: 20%;
    padding-bottom: 0%;
    padding-top: 5%;
    
}
.service-content1{
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    flex-wrap: wrap;
      padding: 20%;
    padding-bottom: 5%;
     
    padding-top: 5%;
}
.item{
    padding: 2%;
    border: 0.5px solid black;
    width: 15vw;
    height: auto;
    background-color: white;

}
.service-content:hover .item:hover{
  background-color: rgb(0, 162, 255);;
}

.service-content1:hover .item:hover{
  background-color: rgb(0, 162, 255);;
}

</style>
