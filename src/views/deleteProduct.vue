<template>
<div class="container">
    
   <br>
  <br>
  <br>
  <br>
    <h1>Delete Product</h1>
    <br />
    <br />
    <div class="row">
        <div class="col-md-6">
            <div class="form-group">
              <input type="text" class="form-control" id="brand" placeholder="Enter Product Id" name = "brand" v-model="product.id"  ref = "brand" required>
             <button type="submit" id = "submit" class="btn btn-primary" @click="searchId()">Search</button>
            </div>
            <div class="form-group">
               
              <input type="text" class="form-control" id="brand" placeholder="brand" name = "brand" v-model="product.brand"  ref = "brand" disabled="disabled">
            </div>
             <div class="form-group">
                
              <input type="text" class="form-control" id="brand" placeholder="Product name" name = "brand" v-model="product.productName"  ref = "brand" disabled="disabled">
            </div>
            
            <!-- <div class="form-group">
                <label for="reenterpassword">Password</label>
              <input type="password" class="form-control" id="reenterpassword" placeholder="Repeat Password" name = "reenterpassword" required>
            </div>
            -->
           
            
            <br>
            <button type="submit" id = "submit" class="btn btn-primary" @click="saveProduct(), resetInput()">Delete</button>
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
import ProductUserServices from "../services/ProductUserServices"

export default {
  name: "users",
  data() {
    return {
      product: {
        productName: "",
        brand: "",
        quantity: "",
        price: "",
      },
      submitted: false
    };
  },    
  methods: {
    /* eslint-disable no-console */
     searchId() {
      ProductUserServices.findById(this.product.id)
        .then(response => {
          this.product.id= response.data;
          console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        });
    },
      
    //   http
    //     .post("/product", data)
    //     .then(response => {
    //       this.product.id = response.data.id;
    //       console.log(response.data);
    //     })
    //     .catch(e => {
    //       console.log(e);
    //     });

    //   this.submitted = true;
      
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
    
    
  
  
  
};
</script>
<style scoped>
   input[type=text] {
    width: 30%;
    padding: 15px 22px;
    margin: 10px 5px;
    box-sizing: border-box;  
    border-radius: 10px;
}
p {
 margin-left: -70px;
 margin-top: 8px;
}
#clickLogin {
 color:#ed394a;
 position:center;
 /* margin : -18px; */
 margin-left: 170px;
 margin-top: -18px;
 cursor:pointer;
}
  input[type=number] {
    width: 30%;
    padding: 15px 22px;
    margin: 10px 5px;
    box-sizing: border-box;
    border-radius: 10px;  
}
 
#submit {
  color: #3b353b;
  background-color: white;
  width: 150px; /* was 150, now 150px */
  height: 50px;
  border-radius: 10px;
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

 
</style>