<template>
  <div id="app">
    <header>
        <Navbar />
        <div>
          
        </div>
    </header>
    <img v-bind:src="images" id = "img"/>
     <br>
        <br>    
               <h1>Stocks</h1>
        <br>

        <table border = "1px" id = "users">
            <tr>
                <th hidden>ID</th>
                <th>Bike Type</th>
                <th>Quantity</th>
                <th>Price</th>
                <th>Action</th>
            </tr>
            <tr v-for="stock in list" v-bind:key="stock.id"> 
                <td hidden>{{stock.id}}</td>       
                    <td>{{stock.biketype}}</td> 
                  <td>{{stock.quantity}}</td>
                  <td>{{stock.price}}</td>             
    
                <td><button class = "btn btn-primary" @click="openModel(stock)" type="showModal"><i class="fa fa-shopping-cart fa_custom fa-1x" data-toggle="modal" data-target="#form"></i>Edit</button></td>
      
            </tr>
        </table>
        <div v-if="myModel">
                 <transition name="model">
                 <div class =  "modal-mask">
                     <div class = "modal-wrapper">
                         <div class = "modal-dialog">
                             <div class = "modal-content">
                                 <div class="modal-header">
                                   <h4 class = "modal-title">Stocks</h4>
                                     <button type = "button" class="close"
                                     @click="myModel=false"><span aria-hidden="true">&times;</span></button>
                                     
                                 </div>
                                 <div class = "modal-body">      
                                   
                                         <input type = "hidden" class = "form-control" v-model="id" disabled/>
                                                            
                                     <div class = "form-group">
                                         <label>Bike Type</label>
                                         <input type = "text" class = "form-control" v-model="biketype" disabled/>
                                     </div>
                                     <div class = "form-group">
                                         <label>Quantity</label>
                                         <input type = "text" class = "form-control" v-model="quantity" />
                                     </div>
                                     <div class = "form-group">
                                         <label>Bike Price</label>
                                         <input type = "text" class = "form-control" v-model="price" disabled/>
                                     </div>                               
                                     <br />
                                     <div align = "center">
                                  
                                         <input type="button" class="btn btn-primary" v-model="actionButton" @click="updateStock()" />
                                     </div>
                                 </div>
                             </div>
                         </div>
                     </div>
                 </div>
             </transition>       
         </div>
        <br><br><br><br><br>
    <router-view/>
  </div>
</template>
<script>
import Navbar from '../views/Navbar'
import axios from 'axios'
import http from "../http-common";
export default {
    name: 'HomeUser',
     data()
        {
            return {
              images: 'src/assets/Picture2.png',
              list:undefined,
              myModel: false,
              myModel2: false,
              actionButton: 'Buy',
              actionButton2: 'Delete',
            //   dynamicTitle: 'Update Data',
            //   dynamicTitle2: 'Delete Data',
             //customer : ['id', 'l', 'brand', 'price', 'quantity']
            };
        },
    components: {
        Navbar
    },
    methods:{
          openModel:function(stock){
                this.id = stock.id;
                this.biketype = stock.biketype;
                this.quantity = stock.quantity;
                this.price = stock.price;
                this.actionButton = "Edit";
                // this.dynamicTitle = "Update Data";
                this.myModel = true;
             },
             updateStock() {
               var data = {
                    id:this.id,
                    biketype:this.biketype,
                    quantity: this.quantity,
                    price: this.price
                    
                };
               console.log(data);

               http
               .put('http://localhost:8080/api/stock/' + this.id, data)
               .then(resp => {
                    this.stock.id = response.data.quantity;
                    this.stock.biketype = response.data.biketype;
                    this.stock.quantity = response.data.quantity;
                    this.stock.price = response.data.price;

                    console.log(resp.data);
               })
                
               .catch(e => {
                   console.log(e);
               });
               alert("Updated")
           }
    },
      mounted(){
            http.get('http://localhost:8080/api/stocks')
            .then((resp)=>{
                this.list = resp.data;
            })
        },
}


</script>
<style>
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
    font-family: 'monteserrat', sans-serif;
}

header {
    width: 100vw;
    background-color: rgb(26, 163, 233);
    padding: 15px
}

#img{
    margin-top:20px;
    }

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
 background: #0D83FA;
  position: absolute;
  float: left;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 33%; 
}
</style>
