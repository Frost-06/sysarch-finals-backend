<template>

<div class="container">
  <header>
    <Navbar />
  </header>
   <img v-bind:src="images" id = "img"/>
        <br>    
    <h1>Borrow</h1>
    <div v-if="!submitted">
    <div class = "nav">

            <div class="col-md-6">
            <div class="form-group" id="productNameInput">
              <label for="biketype"></label>
              <input type="time" class="form-control" id="startTime" placeholder="Starting Time" name = "startTime" v-model="transaction.startTime" required>
            </div>
            <div class="form-group" id="brandInput">
                <label for="quantity"></label>
              <input type="time" class="form-control" id="endTime" placeholder="Ending Time" name = "endTime" v-model="transaction.endTime"  required>
            </div>
            <div class="form-group">
                <label for="biketype"></label>
                <input type="text" class="form-control" id="bikeType" placeholder="Bike Type" name = "bikeType" v-model="transaction.bikeType"  required>
            </div>
            <div class="form-group">
                <label for="biketype"></label>
                <input type="text" class="form-control" id="Qty" placeholder="Quantity" name = "Qty" v-model="transaction.qty"  required>
            </div>
            <br>
            <button type="text" id = "submit" class="btn btn-primary" @click="saveTransactions()">Add</button>
             <br>
             <!-- <div v-if="inputPassword != reenterpassword" class="text-danger">Password doesn't match</div> -->
            <br>
            <br>
            </div>
    </div>
           </div>
        <div v-else>
            <h4>Borrowed Successfully</h4>
            <tr v-for="transaction in list" v-bind:key="transaction.id">
                <td>{{transaction.duration}}</td>
            </tr>
         
        </div>
</div>

</template>

<script>
import http from "../http-common";
import axios from 'axios'
import Navbar from '../views/Navbar'
export default {
  name: "Transactions",
  components:{
    Navbar
  },
  data() {
    return {
        images: 'src/assets/Picture2.png',
         list:undefined,
        myModel: false,
        myModel2: false,

        transaction: {      

          startTime: "",
          endTime: "",
          bikeType: "",
          qty: 0,
      },
    
      submitted: false
    };
  },    
  methods: {
    /* eslint-disable no-console */
    saveTransactions() {
      var data = {
        startTime: this.transaction.startTime,
        endTime: this.transaction.endTime,
        bikeType: this.transaction.bikeType,
        qty: this.transaction.qty,
        duration:this.transaction.duration

      };
      
      http
        .post("/transaction",data)
        .then(response => {
          this.transaction.id = response.data.id;
          console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        });
      alert("Added" + this.transaction.duration);
      this.submitted = true;
      
    },
    resetInput() {
        
    },
    newUser() {
      this.submitted = false;
      this.saveProduct = {};
      
    },
    openModel:function(stock){          
                this.biketype = stock.biketype;
                this.quantity = stock.quantity;
                this.price = stock.price;
                this.actionButton = "Edit";
                // this.dynamicTitle = "Update Data";
                this.myModel = true;
             }
    /* eslint-enable no-console */
    
    
  },
  mounted(){
             
        }
  
  
};
</script>
<style scoped>
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
#img{
    margin-top:20px;
    margin-left: 19.2%;
    }
header {
    width: 100vw;
    background-color: rgb(26, 163, 233);
    padding: 15px
}

input[type=text] {
    width: 100%;
    padding: 15px 20px 50px;
    margin-left: 70%;
    box-sizing: border-box;  
    border-radius: 10px;
    height:10px;
    text-align: center;
    color: #0a0a0a;
}

h1{
  margin-left: 20%;
}
p {
 margin-left: 73%;
 margin-top: 8px;
 width: 50%;
}

h2 {
 margin-left: 32px;
 margin-top: -36.5px;
 font-size: 17px;
 font-style: normal;
}
#clickLogin {
 color:#ed394a;
 position:center;
 /* margin : -18px; */
 margin-left: 116%;
 margin-top: -38.5px;
 width: 10%;
 cursor:pointer;
}
input[type=number] {
    width: 100%;
    padding: 15px 20px 50px;
    margin-left: 70%;
    box-sizing: border-box;  
    border-radius: 10px;
    height:50px;
    text-align: center;
    color: #0a0a0a;
}
 
#submit {
  color: #3b353b;
  background-color: rgb(26, 163, 233);
  width: 150px; /* was 150, now 150px */
  height: 50px;
  border-radius: 10px;
  position: center;
  margin-left: 65%;
}
#submit:hover{ 
  background-color: #1b3742;
  color:white;
  cursor: pointer;
}
#submit:active {
  color: white;
  background-color: #1b3742;
  box-shadow: 0 5px #666;
  transform: translateY(4px);
  cursor: pointer;
}

#nav {
  background-color: #333;
  overflow: hidden;
  position: fixed;
  top: 0;
  width: 100%;
  float: left;
  z-index: 9;
  
}

#nav a {
 float: left;
  color: #f2f2f2;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  font-size: 17px;

}

#nav a:last-child {
 float:right;
}

#nav a.hover {
  background-color: #ddd;
  color: black;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
  #users {
  font-family: Arial, Helvetica, sans-serif;
  border-collapse: collapse;
  width: 100%;
  margin-left: 10%;
}

#users td, #users th {
  border: 1px solid #ddd;
  padding: 8px;
}

#users tr:nth-child(even){background-color: #f2f2f2;}

#users tr:hover {background-color: #ddd;}

#users th {
  padding-top: 12px;
  padding-bottom: 12px;
  text-align: center;
  background-color: #032445;
  color: white;
}
.modal-mask {
 background: #0D83FA;
  position: absolute;
  float: left;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 33%; 
}
#startTime, #endTime{
    margin-left: 70%;
}
h4{
    margin-left:20%;
    margin-top: 10%;
}
</style>