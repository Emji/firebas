<template>
  <div class="home">
  <div class="backpannel" :class="{tweak: this.store.tweak,untweak: !this.store.tweak}">
  <div class="frontpannel" :class="{darken: this.store.tweak, clear: !this.store.tweak}" ></div>
  </div>
  </div>
  
</template>
<script>
import {tweak} from '../stores/counter'
export default {

    name:'home',
      setup(){
    const store = tweak()

    return {
      store,
    }
  },
  data(){
    return {
     
    }
  },
  mounted(){
    this.store.sidemenu = true
    this.store.tweak=false;

    if ( this.store.show === false )
    {
      this.store.show = false

    }else{
       
   
     this.store.show = true
    }
    
  }
 
  }


</script>
<style>
.home {
  width: 80%;
  height: 80%;
}
.backpannel{
  width: 100%;
  height: 100vh;
 
}
.frontpannel {

  width: 100%;
  height: 100vh;
}
.clear {
    
    transition: all 0.5s;
    background-color: transparent;
}
.darken {
   
    transition: all 0.5s;
    background-color: black;
    opacity: 0.6;
}
.tweak {
  background-image: url('gs://vuefirebase-2b174.appspot.com/_MJI0011.jpg');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  transform: perspective(500px) rotateY(10deg);
   transition: all 0.5s;
   overflow: hidden;
 
}
.untweak {
    background-image: url('../assets/img.jpg');
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
   transition: all 0.5s;
};
</style>