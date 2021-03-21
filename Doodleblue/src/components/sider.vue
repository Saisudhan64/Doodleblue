<template>
  <div>
    
      <div class="sidebar">
        <i class="fas fa-bars icon1"></i><br><br>
        <br><br>
        <i class="fas fa-home icon2"></i><br>
        <i class="far fa-user icon3"></i><br>
        <i class="far fa-file icon4"></i><br>
        <i class="far fa-clock icon5"></i><br>
        <i class="fas fa-calculator icon6"></i><br>
        <i class="far fa-calendar-alt icon7"></i><br>
        <i class="fas fa-cog icon8"></i>
      </div>
      
  </div>
</template>
<style scoped>
.sidebar{
  float:left;
  height:100vh;
  background: linear-gradient(to bottom, #fd689c 0%, #fe856b 100%);
  width:2.5vw;
}

.icon1{
  font-size:1.3vw;
  color:white;
  padding:0.6vw;
}
.icon2{

  font-size:1.3vw;
  color:white;
  padding:0.5vw;
}
.icon3{
  font-size:1.3vw;
  color:white;
  padding:0.6vw;
  padding-left:0.4vw;
  border-left:4px solid white;
}
.icon4{
  font-size:1.3vw;
  color:white;
  padding:.7vw
}
.icon5{
  font-size:1.3vw;
  color:white;
  padding:.55vw
}
.icon6{
  font-size:1.3vw;
  color:white;
  padding:.6vw
}
.icon7{
  font-size:1.3vw;
  color:white;
  padding:.6vw
}
.icon8{
  font-size:1.3vw;
  color:white;
  padding:.5vw
}
</style>
<script>

export default {
  name: "sider",
  data: function () {
    return {
      name:null,
      password:null
    };
  },
  components:{
    
  },
  methods:{
    
  }
};
</script>