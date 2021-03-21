


<template>
  <div class="outerdiv">
   <h3>Edit contact</h3>
    <div class="signup" :item="contact">
       <span @click="home"><u style="font-size:1vw;">Go Back</u></span><br>
      <form>
        <b>FirstName:</b><br><br>
        <input type="text" class="uname" v-model="fnamec" placeholder="Enter your name" required><br><br>
        <b>LastName:</b><br><br>
        <input type="text" class="uname" v-model="lnamec" placeholder="Enter your name" required><br><br>
        <b>Mobile Number</b><br><br>
        <input type="tel" class="uname" v-model="phonec" pattern="[0-9]{10}" placeholder="enter your number as XXXXXXXXXX" required>
        <br><br>
        <b>Email Address</b><br><br>
        <input type="email" class="uname" v-model="emailc" placeholder="enter your email" required>
        <br><br>
        <b>Company Name</b><br><br>
        <input type="text" ref="pass" v-model="companyc" class="uname" placeholder="enter your company" required>
        <br><br>
        <b>Address</b><br><br>
        <input type="text" ref="repass" v-model="addressc" :maxlength="max" class="uname" placeholder="enter your address" required>
        <br><br>
        <button @click="save()" type="submit">Save</button>
      </form> 
    </div>
  </div>
</template>
<style scoped>
button{
  background: linear-gradient(to bottom, #fd689c 0%, #fe856b 100%);;
  color:white;
  border-radius:10px;
  padding: 0.7vw 1.6vw;;
  margin-left:9vw;
  margin-top:1vw;
  outline: none;
  border: none;
  font-weight: bold;
}
button:hover{
  padding:11px 31px;
}
.uname{
  width:23vw;;
  height:2.5vh;
  border-radius:5px;
}
.signup{

background-color:white;
height:80vh;;
width:30vw;
padding:2.5vw;;
box-sizing: border-box;
border-radius:10px;
border:1px solid black;
padding-top:2.5vw;
background-color:#d9d9d9
}
.outerdiv{
  width:35vw;
  height:45vw;
  margin-left:35vw;
  padding:2vw;
  box-sizing: border-box;
}
</style>
<script>

export default {
  name: "editcontact",
  data: function () {
    return {
        fnamec:null,
        lnamec:null,
        companyc:null,
        addressc:null,
        emailc:null,
        phonec:null,
        fidc:null,
        max:32
    };
  },
  components:{
    
  },
  mounted(){

            var arr = this.$store.getters['Getdisplaydetails']

            for(let item in arr){
                var name = arr[item].name
                var namearray = name.split(" ");
                this.fnamec = namearray[0];
                this.lnamec = namearray[1];
                this.phonec = arr[item].phone
                this.companyc = arr[item].company
                this.addressc = arr[item].Address
                this.emailc = arr[item].email
                this.fidc = arr[item].fid

            }
  },
  methods:{

    home : function(){
      this.$store.dispatch('openItem',{item:'searchpage'})
    },
    save:function(){
      var flag=0;
      if(this.fnamec==""||this.phonec==""||this.emailc==""||
        this.companyc==""||this.addressc==""||this.lnamec==""){
          alert('please enter all the details');
        }
      
          else {
           if(this.phonec.length<10){alert('please enter a 10 digit mobile number');return;}
      if(!this.emailc.includes('@')){alert('enter a valid email');return; }
            
        
            var a = this.fnamec.charAt(0).toUpperCase()+""+this.lnamec.charAt(0).toUpperCase();          
            
            var num = Math.floor(Math.random() * (5 - 1)) + 1;

            var name = this.fnamec+" "+this.lnamec;
            
            this.$store.dispatch('editcontact',{name:name,phone:this.phonec,email:this.emailc,
            company:this.companyc,Address:this.addressc,Initial:a,color:num,fid:this.fidc});
              this.$store.dispatch('displaydetails',
        {name:name,phone:this.phonec,email:this.emailc,
            company:this.companyc,Address:this.addressc,Initial:a,color:num,fid:this.fidc});
            this.$store.dispatch('openItem',{item:'searchpage'})
            
        }    
    }
  },
  computed:{

  }
};
</script>