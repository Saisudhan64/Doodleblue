


<template>
  <div class="outerdiv">
   <h3>Add new contact</h3>
    <div class="signup">
       <span @click="home"><u style="font-size:1vw;">Go Back</u></span><br>
      <form>
        <b>FirstName:</b><br><br>
        <input type="text" class="uname" v-model="fname" placeholder="Enter your name" required><br><br>
        <b>LastName:</b><br><br>
        <input type="text" class="uname" v-model="lname" placeholder="Enter your name" required><br><br>
        <b>Mobile Number</b><br><br>
        <input type="tel" class="uname" v-model="number" pattern="[0-9]{10}" placeholder="enter your number as XXXXXXXXXX" required>
        <br><br>
        <b>Email Address</b><br><br>
        <input type="email" class="uname" v-model="email" placeholder="enter your email" required>
        <br><br>
        <b>Company Name</b><br><br>
        <input type="text" ref="pass" v-model="company" class="uname" placeholder="enter your company" required>
        <br><br>
        <b>Address</b><br><br>
        <input type="text" ref="repass" v-model="address" :maxlength="max" class="uname" placeholder="enter your address" required>
        <br><br>
        <button @click="add()" type="submit">Register</button>
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
  name: "Confirmation",
  data: function () {
    return {
        fname:null,
        lname:null,
        number:null,
        company:null,
        address:null,
        email:null,
        max:32
    };
  },
  components:{
    
  },
  methods:{

    home : function(){
      this.$store.dispatch('openItem',{item:'searchpage'})
    },
    add:function(){
      var flag=0;
      if(this.fname==null||this.number==null||this.email==null||
        this.company==null||this.address==null||this.lname==null){
          alert('please enter all the details');
        }
      
          else {
           if(this.number.length<10){alert('please enter a 10 digit mobile number');return}
      if(!this.email.includes('@')){alert('enter a valid email'); return}
            
        
            var a = this.fname.charAt(0).toUpperCase()+""+this.lname.charAt(0).toUpperCase();          
            
            var num = Math.floor(Math.random() * (5 - 1)) + 1;

            var name = this.fname+" "+this.lname;
            
            this.$store.dispatch('addcontact',{name:name,phone:this.number,email:this.email,
            company:this.company,Address:this.address,Initial:a,color:num})
            this.$store.dispatch('openItem',{item:'searchpage'})
            
        }    
    }
  },
  computed:{
    
  }
};
</script>