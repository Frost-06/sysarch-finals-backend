<template>
<div class="container">
    
   <br>
  <br>
  <br>
  <br>
    <h1>Update Product</h1>
    <br />
    <br />
    <div class="row">
        <div class="col-md-6">
  
             <div class="form-group">
              <label for="productName">Product Name</label>
              <input type="text" class="form-control" id="productName" placeholder="productName" name = "productName" v-model="productName" required>
            </div>
            <div class="form-group">
                <label for="brand">Product Brand</label>
              <input type="text" class="form-control" id="password" placeholder="Brand" name = "brand" v-model="brand" required>
            </div>
            <!-- <div class="form-group">
                <label for="reenterpassword">Password</label>
              <input type="password" class="form-control" id="reenterpassword" placeholder="Repeat Password" name = "reenterpassword" required>
            </div>
            -->
            <div class="form-group">
                <label for="price">Product Price</label>
              <input type="text" class="form-control" id="contactInfo" placeholder="Price" name = "price" v-model="price" required>
            </div>
            <div class="form-group">
                <label for="quantity">Product Quantit</label>
              <input type="text" class="form-control" id="quantity" placeholder="Quantity" name = "Quantity" v-model="quantity" required>
            </div>
            
            <br>
            <button type="submit" id = "submit" class="btn btn-primary" @click="saveUser()">Update</button>
             <br>
             <!-- <div v-if="inputPassword != reenterpassword" class="text-danger">Password doesn't match</div> -->
            <br>
            
            <div id="clickLogin" @click="$router.push('/')">
              
            </div>
            <br>
          
        </div>
    </div>
</div>
</template>

<script>
   
    import axios from 'axios'
    

    
    export default {
        name: "Product",
        data()
        {
            return {products:[]}
        },
        mounted(){
            axios.put('http://localhost:8080/api/product')
            .then((resp)=>{
               
                this.products = resp.data.items;
            })
        }
    }
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
  input[type=password] {
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