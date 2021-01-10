<template>
   <div class="slideshow-container">
    
    
    
    <div class="slide"><img v-if="img == 0" src="@/assets/img1.jpg"></div>
    <div class="slide"><img v-if="img == 1" src="@/assets/img2.jpg"></div>
    <div class="slide"><img v-if="img == 2" src="@/assets/img3.jpg"></div>
    <div class="slide"><img v-if="img == 3" src="@/assets/img4.jpg"></div>
     <div class="left-right">
       <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
       <button @click="back()" style="font-size:24px"><i class="material-icons">keyboard_arrow_left</i></button>
       <button @click="next()" style="font-size:24px"> <i class="material-icons">keyboard_arrow_right</i></button>
      <!-- <button class="button" @click="back()"> &lt; </button>
      <button class="button" @click="next()"> &gt; </button> -->
    </div>
    <div class="buttom">
    <!-- <button @click="showImage(0)"></button>
    <button @click="showImage(1)"></button>
    <button @click="showImage(2)"></button>
    <button @click="showImage(4)"></button> -->
    <button @click="showImage(0)" style="font-size:20px"><i class="material-icons">brightness_1</i></button>
    <button @click="showImage(1)" style="font-size:20px"><i class="material-icons">brightness_1</i></button>
    <button @click="showImage(2)" style="font-size:20px"><i class="material-icons">brightness_1</i></button>
    <button @click="showImage(3)" style="font-size:20px"><i class="material-icons">brightness_1</i></button>
    </div>

    <!-- <img :src='require(`../assets/${img2}`)' >  -->
    
   </div>
  
  
  
</template>

<script>

export default {
  name: 'SlideShow',
  components:{
      
  },

  data: () =>{
    return{
      img :0,
    }
  },
   methods:{
      back(){
          this.img -=1;
          if(this.img < 0){
              this.img = 3;
          }
          console.log("back ");
      },
      next(){
          this.img += 1;
          if(this.img > 3){
              this.img = 0;
          }
          console.log("netx")
      },
      showImage(img){
          this.img = img;
          console.log("showing img " + img);
      }

  },
  // data: function() {
  //     return{
  //     img1:"@/assets/plumping1.jpg",
  //     img2: 'plumbing.jpg'
  //     }
  // },
   
  
  props: {
    msg: String
  }
}
</script>



<style lang="scss" scoped>

.slideshow-container{
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}

.left-right{
  
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  // margin-top: -30%;
  position: relative;
  top: -300px;
  padding-right: 8%;
  padding-left: 8%;
  // background-color: red;
}

.left-right button{
  border: none;
  // outline: none;
  background-color: white;
}

.left-right i{
  font-size: 50px;
}

.buttom button {
  border: none;
  outline: none;
  background-color: white;
}
.buttom i{
  font-size: 16px;
}


// .left-right button{
//   width: 30px;
//   height: 30px;
// }

// .slideshow-container{
//   display: flex;
//   overflow-x: auto;
  
// }
// .slide {
//   width: 100%;
//   flex-shrink: 0;
//   height: auto;
// }
// .slideshow-container{
//     display: flex;
//     flex-direction: column;
//     justify-content: center;
//     // padding: 20%;
//     width: 400px;
//     height: 300px;    
//     // // background-image: url('~@/assets/logo.png');
//     // background-repeat: no-repeat;

// }
// .left-right{
    
//     display: flex;
//     flex-direction: row;
//     justify-content: space-between;
//     // background-color: red;
//     // width: 70%;
//     // height: 500px;
//     // margin-top: 50%;
//     // top: 50px;
// }
// .button{
//     width: 50px;
//     height: 50px;
//     border-radius: 120px;
// }
// // .left-right button{
// //     width: 50px;
// //     height: 50px;
// //     margin-top: 50%;
// // }
// .buttom{
//     // position: absolute;
//     display: flex;
//     flex-direction: row;
//     justify-content: space-around;
//     // background-color: blue;
//     // margin-top: 50%;
//     // left: 7%;
//     position: relative;
//     top: 30%;
//    ;
    
// }
// .buttom button{
//     width: 50px;
//     height: 50px;
//     border-radius: 120px;
// }


</style>
