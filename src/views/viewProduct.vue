<template>
    <div>
        <br>
        <br>    
        <h1>View Products</h1>
        <br>
        <br>
        <br>
        <br>
        <table border = "1px" id = "users">
            <tr>
                <th>Product Id</th>  
                <th>Product Name</th>
                <th>Product Brand</th>
                <th>Product Quantity</th>
                <th>Product Price</th>
                <th>Edit</th>
                <th>Delete</th>
            </tr>
            <tr v-for="product in list" v-bind:key="product.productId">
                <td>{{product.productId}}</td>
                <td>{{product.productName}}</td>
                <td>{{product.brand}}</td>
                <td>{{product.quantity}}</td>
                <td>{{product.price}}</td>
                <td><button class = "btnEdit" @click="openModel(product)" type="showModal"><i class="fa fa-pencil fa_custom fa-1x" data-toggle="modal" data-target="#form"></i></button></td>
                <td><button class = "btnDelete" @click="openModel2(product)" type="showModal"><i class="fa fa-trash-o fa_custom fa-1x" data-toggle="modal" data-target="#form"></i></button></td>
                
            </tr>
        </table>
          <div v-if="myModel">
                 <transition name="model">
                 <div class =  "modal-mask">
                     <div class = "modal-wrapper">
                         <div class = "modal-dialog">
                             <div class = "modal-content">
                                 <div class="modal-header">
                                     <button type = "button" class="close"
                                     @click="myModel=false"><span aria-hidden="true">&times;</span></button>
                                     <h4 class = "modal-title">{{ dynamicTitle }}</h4>
                                 </div>
                                 <div class = "modal-body">
                                     <div class = "form-group">
                                         <label>Product Id</label>
                                         <input type = "text" class = "form-control" v-model="productId" disabled />
                                     </div> 
                                     <div class = "form-group">
                                         <label>Product Name</label>
                                         <input type = "text" class = "form-control" v-model="productName" />
                                     </div>
                                     <div class = "form-group">
                                         <label>Product Brand</label>
                                         <input type = "text" class = "form-control" v-model="brand"/>
                                     </div>
                                     <div class = "form-group">
                                         <label>Product Quantity</label>
                                         <input type = "number" class = "form-control" v-model="quantity"/>
                                     </div>
                                     <div class = "form-group">
                                         <label>Product Price</label>
                                         <input type = "number" class = "form-control" v-model="price"/>
                                     </div>
                                     <br />
                                     <div align = "center">
                                         <input type="hidden" v-model="hiddenId" />
                                         <input type="button" class="btn-btn-sucess btn-xs" v-model="actionButton" @click="updatedProduct()" />
                                     </div>
                                 </div>
                             </div>
                         </div>
                     </div>
                 </div>
             </transition>       
         </div>
         <div v-if="myModel2">
                 <transition name="model">
                 <div class =  "modal-mask">
                     <div class = "modal-wrapper">
                         <div class = "modal-dialog">
                             <div class = "modal-content">
                                 <div class="modal-header">
                                     <button type = "button" class="close"
                                     @click="myModel2=false"><span aria-hidden="true">&times;</span></button>
                                     <h4 class = "modal-title">{{ dynamicTitle2 }}</h4>
                                 </div>
                                 <div class = "modal-body">
                                     <div class = "form-group">
                                         <h7>Are you sure you want to delete this product?</h7>
                                     </div>
                                     <br />
                                     <div align = "center">
                                         <input type="hidden" v-model="hiddenId" />
                                         <input type="button" class="btn-btn-sucess btn-xs" v-model="actionButton2" @click="deleteProduct()" />
                                     </div>
                                 </div>
                             </div>
                         </div>
                     </div>
                 </div>
             </transition>       
         </div>
    </div>
    
</template>
<script>
    import axios from 'axios'
    import http from "../http-common";

    export default {
        name: "Users",
        data()
        {
            return {
              list:undefined,
              myModel: false,
              myModel2: false,
              actionButton: 'Update',
              actionButton2: 'Delete',
            //   dynamicTitle: 'Update Data',
            //   dynamicTitle2: 'Delete Data',
             product : ['id', 'productName', 'brand', 'price', 'quantity']
            };
        },
        components: {
          
        },
         mounted(){
            axios.get('http://localhost:8080/api/product')
            .then((resp)=>{
                this.list = resp.data;
            })
        },
        methods: {   
             updatedProduct() {
               var data = {
                    productId: this.productId,
                    productName: this.productName,
                    brand: this.brand,
                    quantity: this.quantity,
                    price: this.price
                    
                };
               console.log(data);
               axios
               .put('http://localhost:8080/api/product/' + this.product.productId, data)
               .then(resp => {
                    this.product.productId = response.data.productId;
                    this.product.productName = response.data.productName;
                    this.product.brand = response.data.brand;
                    this.product.quantity = response.data.quantity;
                    this.product.price = response.data.price;
                    console.log(resp.data);
               })
                
               .catch(e => {
                   console.log(e);
               });
           },
           deleteProduct(){
             var data = {
                    productId: this.productId,
                    productName: this.productName,
                    brand: this.brand,
                    quantity: this.quantity,
                    price: this.price
                    
                };
               console.log(data);
               axios
                    .delete('http://localhost:8080/api/product/' + this.product.productId, data)
                    .then(resp => {
                        console.log(resp.data);
               })
                
               .catch(e => {
                   console.log(e);
               });
            
           },
             openModel:function(product){
                this.productId = product.productId;
                this.productName = product.productName;
                this.brand = product.brand;
                this.price = product.price;
                this.quantity = product.quantity;
                this.actionButton = "Update";
                // this.dynamicTitle = "Update Data";
                this.myModel = true;
             },
             openModel2:function(product){
                this.productId = product.productId;
                this.productName = product.productName;
                this.brand = product.brand;
                this.price = product.price;
                this.quantity = product.quantity;
                 this.actionButton2 = "Delete";
                //  this.dynamicTitle2 = "Delete Data";
                 this.myModel2 = true;
             }
        },  
      newProduct() {
      this.submitted = false;
      this.updatedProduct = {};
      
    }
       
    };
</script>

<style scoped>
#users {
  font-family: Arial, Helvetica, sans-serif;
  border-collapse: collapse;
  width: 100%;
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

.btnDelete {
  background-color: DodgerBlue; /* Blue background */
  border: none; /* Remove borders */
  color: white; /* White text */
  padding: 12px 16px; /* Some padding */
  font-size: 16px; /* Set a font size */
  cursor: pointer; /* Mouse pointer on hover */
  border-radius: 10px;
}

.btnDelete:hover {
  background-color: RoyalBlue;
}

.btnEdit {
  background-color: DodgerBlue; /* Blue background */
  border: none; /* Remove borders */
  color: white; /* White text */
  padding: 12px 16px; /* Some padding */
  font-size: 16px; /* Set a font size */
  cursor: pointer; /* Mouse pointer on hover */
  border-radius: 10px;
}

.btnEdit:hover {
  background-color: RoyalBlue;
}

.modal-mask {
 background: #032445;
  position: absolute;
  float: left;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 33%; 
  border-radius: 10px;
}


</style>