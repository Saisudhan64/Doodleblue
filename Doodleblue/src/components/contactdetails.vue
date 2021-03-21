


<template>
  <div>
      
    <div class="detailsback" v-for="item in displayitems" :key="item.id">
      
    <span class="bigcircle" :class="classobject(item.color)">{{item.Initial}}</span><br><br><br>
    <span   class="big">{{item.name}}</span><br>
    <span class="small">Manager at  {{item.company}}</span><br><br><br>
      <table class="detailsdesc">
        <tr>
          <td><span ref ="name" class="fixed">Fullname</span></td> 
          <td><span  :contenteditable="toedit"  class="right">{{item.name}}</span></td>
        </tr>
        <tr>
        <td><span class="fixed">Email</span></td>
        <td><span :contenteditable="toedit"  class="right">{{item.email}}</span></td>
        </tr>
        <tr>
        <td><span class="fixed">Phone</span></td> 
        <td><span :contenteditable="toedit"  class="right">{{item.phone}}</span></td>
        </tr>
        <tr>
        <td><span class="fixed">Company</span></td> 
        <td><span :contenteditable="toedit"  class="right">{{item.company}}</span></td>
        </tr>
        <tr>
        <td><span class="fixed">Address</span></td> 
        <td><span :contenteditable="toedit"  class="address right">{{item.Address}}</span></td>
        </tr>
        
    </table>

    <button @click="edit()" type="submit">Edit</button>
    </div>

    

  </div>
</template>
<style scoped>

button{
  background: linear-gradient(to bottom, #fd689c 0%, #fe856b 100%);;
  color:white;
  border-radius:10px;
  padding: 0.7vw 1.6vw;
  margin-top:1vw;
  outline: none;
  border: none;
  font-weight: bold;
}
button:hover{
  padding:11px 31px;
}
.detailsdesc{
  line-height: 2.3vw;
 
  table-layout: auto;
  line-height: 1.2vw;
  
}
.address{
  white-space: nowrap;
  overflow:hidden
}
.edit{
  text-align:center;
  display:inline-block;
  position:relative;
  width:4vw;
  top:2vw;
  left:20vw;
  height:2vh;
  background-color:white;
  cursor: pointer;
  }
  .edit:hover{
    background-color:#888
  }
td{height:1.5vw;text-align: left;}
.right{

  padding-left:2vw;
}
.fixed{
  opacity:0.7;

  padding-left:1vw;
  
} 
.detailsback{
  width:26vw;
  height:27.5vw;
  background-color:#d9d9d9;
  border-radius:10px;
  text-align: center;
  padding:0.5vw;
  box-sizing: border-box;
}
.bigcircle{
  width:5vw;
  height:5vw;
  border-radius:50%;
  display: inline-block;
  margin-top:2vw;
  color:white;
  font-weight: bold;
  font-size:2.1vw;
  padding-top:1.3vw;
  text-align: center;
  box-sizing: border-box;
  margin-left:0vw;

}

.small{
  opacity:0.7
}
.circlecolor1{background-color:green;}
.circlecolor2{background-color:chocolate}
.circlecolor3{background-color: cornflowerblue;}
.circlecolor4{background-color: darkorchid;}
.circlecolor5{background-color: lightcoral;}

</style>
<script>

export default {
  name: "Bussearch",
  data: function () {
    return {
      arr:[],
      toshow:false,
      toedit:false,
    
    };
  },
  components:{
    
  },
  
  methods:{
    classobject : function(item){
      
     var ret=null;
       
      if(item=="1"){ret="circlecolor1"}
      if(item=="2"){ret="circlecolor2"}
      if(item=="3"){ret="circlecolor3"}
      if(item=="4"){ret="circlecolor4"}
      if(item=="5"){ret="circlecolor5"}
    
      return ret;
   },
    toEdit : function(){
      this.toedit=!this.toedit
      this.toshow=!this.toshow

    },
   toggle : function(){

     this.toshow = !this.toshow
   },
   edit : function(){
       this.$store.dispatch('openItem',{item:'editcontact'})
    }, 

  },
  computed:{
   displayitems : function(){
    
    return this.$store.getters['Getdisplaydetails']
   },
   
  },
};
</script>