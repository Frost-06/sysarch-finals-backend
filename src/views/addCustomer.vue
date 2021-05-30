<template>

<div class="container">
  <header>
    <Navbar />
  </header>
  <img v-bind:src="images" id = "img"/>
  <br />

    <h1>Add Customer</h1>
    <div class = "nav">
        <div class="col-md-6">
             <div class="form-group" id="productNameInput">
              <label for="productName"></label>
              <input type="text" class="form-control" id="Lastname" placeholder="Lastname" name = "lastname" v-model="customer.lastname" required>
            </div>
            <div class="form-group" id="brandInput">
                <label for="brand"></label>
              <input type="text" class="form-control" id="Firstname" placeholder="Firstname" name = "firstname" v-model="customer.firstname"  required>
            </div>
            <div class="form-group">
                <label for="reenterpassword"></label>
                <input type="text" class="form-control" id="Username" placeholder="Username" name = "username" v-model="customer.username"  required>
            </div>
            
            <div class="form-group" id="priceInput">
                <label for="price"></label>
              <input type="text" class="form-control" id="Password" placeholder="Password" name = "password" v-model="customer.password"  required>
            </div>
            <div class="form-group" id="quantityInput">
                <label for="quantity"></label>
              <input type="text" class="form-control" id="Email" placeholder="Email" name = "email" v-model="customer.email" required>
            </div>
            
            <br>
            <button type="text" id = "submit" class="btn btn-primary" @click="saveCustomer()">Add</button>
             <br>
             <!-- <div v-if="inputPassword != reenterpassword" class="text-danger">Password doesn't match</div> -->
            <br>
            <br>
          
        </div>
    </div>
</div>

</template>

<script>
import http from "../http-common";
import Navbar from '../views/Navbar'
export default {
  name: "Product",
  components:{
    Navbar
  },
  data() {
    return {
      images: 'src/assets/Picture2.png',
      customer: {
        lastname: "",
        firstname: "",
        username: "",
        password: "",
        email: "",
        status: false,
      },
      submitted: false
    };
  },    
  methods: {
    /* eslint-disable no-console */
    saveCustomer() {
      var data = {
        lastname: this.customer.lastname,
        firstname: this.customer.firstname,
        username: this.customer.username,
        password: this.customer.password,
        email: this.customer.email,
      };
      
      http
        .post("/customers", data)
        .then(response => {
          this.customer.id = response.data.id;
          console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        });
      alert("Customer has been Added");
      this.submitted = true;
      
    },
    resetInput() {
        this.$refs["productName"].value = ""
        this.$refs["price"].value = ""
        this.$refs["brand"].value = ""
       this.$refs["quantity"].value = ""
    },
    newUser() {
      this.submitted = false;
      this.saveProduct = {};
      
    }
    /* eslint-enable no-console */
    
    
  }
  
  
};
</script>
<style scoped>
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
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
  #img{
    margin-top:20px;
    margin-left: 19.2%;
    }


</style>