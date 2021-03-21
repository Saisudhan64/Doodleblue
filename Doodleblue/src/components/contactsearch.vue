


<template>

  <div class="maindiv">
  <div>
    <div class="searchbardesc">
      <div class="iconbackground">
        
        <i class="fal fa-address-book bookicon"></i>
        
      </div>
      <span class="condesc">Contacts</span><br>
      <span class="smalldesc">Welcome to FlatCRM Contact Page</span>
    </div>
    <div class="searchbar">
      <input type="search" v-model="searchtext" placeholder="Search contacts with name" id="searchbar"> 
      <i class="fas fa-search searchicon"></i>
      <button @click="addcontact();">+ Add Contact</button>
    </div>
    <div class="contactlist">
      <div class="clheader"><span style="padding-left:2vw;font-size:1.5vw"></span> 
        <span style="padding-left:7.5vw;opacity:0.7">Basic Info</span>
        <span style="padding-left:12vw;opacity:0.7">Company</span>
        </div>
        <contactlist v-bind:item="item" v-for="item in contacts" :key="item.id"/>
        

        
    </div>  
  </div>
  <div class="showcontactdetails">
    <contactdetails/>
  </div>
  </div>
</template>
<style scoped>
.condesc{
  font-weight:bold;
  font-size:1.3vw;
  padding-left:1vw;
  position:absolute;
  top:4vw;
}
button{
  height:2vw;
  width:7vw;
  background: linear-gradient(to bottom, #fd689c 0%, #fe856b 100%);
  border: none;
  color: white;
  font-weight: bold;
  border-radius:5px;
  outline: none;
}
button:hover{
  height:2.1vw;
  width:7.1vw;
  transition:0.3s
}
#searchbar{
  padding-left:0.6vw;
  padding-top:0.3em;
  border-radius:50px;
  box-sizing: border-box;
  margin: 2vw 3.5vw;
  margin-right:0;
  width:16vw;
  height:2vw;
  background-color: #d9d9d9;
  color:black;
  opacity:0.7;
  outline: none;
  border:none;
}
.searchicon{
  right:1.3vw;
  position: relative;
}
.maindiv{
  height:100vh;
  width:87vw;
  margin-left:6vw;
  display:grid;
  grid-template-columns : 50% 50%;
}
.bookicon{
  color:white;
  font-size:2vw;
}
.iconbackground{
  width:2.4vw;
  height:2.4vw;
  padding: 0.3vw;;
  box-sizing: border-box;
  margin-top:4vw;
  background: linear-gradient(to bottom, #fd689c 0%, #fe856b 100%);
  display:inline-block;
}
.smalldesc{
  font-size:0.6vw;
  opacity:0.7;
  padding-left:3.5vw;
  position:absolute; 
  top:11vh;
  
}
.contactlist{
  padding:0vw;
  box-sizing: border-box;
  height:70vh;
  width:39vw;
  margin-left:2.7vw;
  overflow-y: auto;
}
.clheader{
  display:block;
  background-color:#d9d9d9;
  height:2.5vw;
  padding:0.7vw;
  padding-top:0.3vw;
  box-sizing: border-box;
  font-weight: bolder;
  position: sticky;
  top:0;
  z-index:10;
}
/* width */
::-webkit-scrollbar {
  width: 5px;
}

/* Track */
::-webkit-scrollbar-track {
  background: #f1f1f1;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: #888;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #555;
}
.showcontactdetails{
  margin:15vw 10vw;
}
</style>
<script>
import contactlist from './contactlist.vue'
import contactdetails from './contactdetails.vue'
export default {
  name: "contactsearch",
  data: function () {
    return {
      searchtext:null
      };
  },
  components:{
    contactlist,contactdetails
    
  },
  methods:{
    addcontact: function(){
       this.$store.dispatch('openItem',{item:'confirm'});
    }
  },
  computed:{
    
      contacts: function(){
        var ret;
       if(this.searchtext==null ){return this.$store.getters['Getcontacts']}
        else{
          
          return this.$store.getters.Getfilteredcontacts(this.searchtext);
        }
      }
  }
};
</script>