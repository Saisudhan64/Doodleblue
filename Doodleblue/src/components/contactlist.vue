


<template>
  <div>
    
    <table  @click="toggleclass(); tocontactdetails()">
      <tr class="width">
    <td colspan="1"><i @click="deletecontact()" class="far fa-trash-alt delete"></i></td>
    <td colspan="1" style="text-align:right;"><span class="circle" :class="classobject">{{item.Initial}}</span></td>
    <td colspan="2" style="text-align:left;"><span class="big">{{item.name}}</span><br>
    <span class="small">{{item.email}}</span></td>
    <td colspan="2"><span class="company">{{item.company}}</span></td>
    </tr>
    </table>
  </div>
</template>
<style scoped>
.company{
  float:left;
  font-weight: bold;
  position:relative;
  top:-1.5vw;
  padding-top:2vw;
}

table{

  width:38.7vw;
  text-align: center;
  table-layout: fixed;
}
.circle{
  width:2.5vw;
  height:2.5vw;
  border-radius:50%;
  display: inline-block;
  color:white;
  font-weight: bold;
  font-size:1.1vw;
  text-align: center;
  padding-top:0.5vw;
  box-sizing: border-box;

}
.delete:hover{
font-size: 1.5vw;
cursor: pointer;
}

.circlecolor1{background-color:green;}
.circlecolor2{background-color:chocolate}
.circlecolor3{background-color: cornflowerblue;}
.circlecolor4{background-color: darkorchid;}
.circlecolor5{background-color: lightcoral;}

.small{
  
  opacity:0.7
}


table:hover{
  background-color: #888;
}

</style>
<script>

export default {
  name: "contactlist",
  
  data: function () {
    return {
      active:false,
      grey:'grey',
      white:'white',
      ischecked:[],
      
    };
  },
  props:['item'],
  components:{
    
  },
  computed:{
    classobject:function(){
      var ret=null;

      if(this.item.color=="1"){ret="circlecolor1"}
      if(this.item.color=="2"){ret="circlecolor2"}
      if(this.item.color=="3"){ret="circlecolor3"}
      if(this.item.color=="4"){ret="circlecolor4"}
      if(this.item.color=="5"){ret="circlecolor5"}
      return ret;
    }

  },
  methods:{
     toggleclass : function(){
    
       this.active = !this.active;
      
     }, 
     deletecontact : function(){
       if(confirm("do you wish to delete the contact")){
        this.$store.dispatch('deletecontact',{id:this.item.fid});
       }
       
     },
     tocontactdetails:function(){
        this.$store.dispatch('displaydetails',
        {name:this.item.name,phone:this.item.phone,Address:this.item.Address,
        company:this.item.company,email:this.item.email,Initial:this.item.Initial,color:this.item.color,id:this.item.fid});
     }
  }
};
</script>