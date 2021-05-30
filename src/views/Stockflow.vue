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
        <h1>Customers</h1>
        <br>

        <table border = "1px" id = "users">
            <tr>
              <th hidden>Id</th>
                <th >Start Time</th>
                <th>End Time</th>
                <th>Bike Type</th>
                <th>Quantity</th>
                <th>Duration</th>
                <th>Total Price</th>
                <th>Action</th>
            </tr>
            <tr v-for="transaction in list" v-bind:key="transaction.id">
                <td hidden> {{transaction.id}}</td>
                <td>{{transaction.startTime}}</td>
                <td>{{transaction.endTime}}</td>
                <td>{{transaction.bikeType}}</td>
                  <td>{{transaction.qty}}</td>
                  <td>{{transaction.duration}}</td>
                  <td>{{transaction.totalPrice}}</td>
                <td><button class = "btnEdit" @click="openModel(customer)" type="showModal"><i class="fa fa-shopping-cart fa_custom fa-1x" data-toggle="modal" data-target="#form"></i>Edit</button>
                </td>
      
            </tr>
        </table>

         <div v-if="myModel">
                 <transition name="model">
                 <div class =  "modal-mask">
                     <div class = "modal-wrapper">
                         <div class = "modal-dialog">
                             <div class = "modal-content">
                                 <div class="modal-header">
                                   <h4 class = "modal-title">Customer</h4>
                                     <button type = "button" class="close"
                                     @click="myModel=false"><span aria-hidden="true">&times;</span></button>
                                     
                                 </div>
                                 <div class = "modal-body">
                                         <input type = "hidden" class = "form-control" v-model="id" />
                                     <div class = "form-group">
                                         <label>Lastname</label>
                                         <input type = "text" class = "form-control" v-model="lastname" />
                                     </div>
                                     <div class = "form-group">
                                         <label>Firstname</label>
                                         <input type = "text" class = "form-control" v-model="firstname" />
                                     </div>
                                     <div class = "form-group">
                                         <label>Username</label>
                                         <input type = "text" class = "form-control" v-model="username" />
                                     </div>
                                     <div class = "form-group">
                                         <label>Password</label>
                                         <input type = "text" class = "form-control" v-model="password"/>
                                     </div>
                                     <div class = "form-group">
                                         <label>Email</label>
                                         <input type = "text" class = "form-control" v-model="email"/>
                                     </div>
                                     <div class = "form-group">
                                         <label>Status</label>
                                         <input type = "text" class = "form-control" v-model="stats"/>
                                     </div>
                                     <br />
                                     <div align = "center">
                                        <input type="button" class="btn btn-danger" v-model="actionButton1" @click="deletCustomer()" />
                                         <input type="button" class="btn btn-primary" v-model="actionButton" @click="updateCustomer()" />
                                     </div>
                                 </div>
                             </div>
                         </div>
                     </div>
                 </div>
             </transition>       
         </div>
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

          openModel:function(customer){
                this.id = customer.id;
                this.lastname = customer.lastname;
                this.firstname = customer.firstname;
                this.username = customer.username;
                this.password = customer.password;
                this.email = customer.email;
                this.stats = customer.stats;
                this.actionButton = "Edit";
                this.actionButton1 = "Delete";
                // this.dynamicTitle = "Update Data";
                this.myModel = true;
             },
             updateCustomer() {
               var data = {
                 
                    lastname: this.lastname,
                    firstname: this.firstname,
                    username: this.username,
                    password: this.password,
                    email: this.email,
                    stats: this.stats
                    
                };
               console.log(data);

               http
               .put('http://localhost:8080/api/customer/' + this.id, data)
               .then(resp => {
                    this.customer.lastname = response.data.lastname;
                    this.customer.firstname = response.data.firstname;
                    this.customer.username = response.data.username;
                    this.customer.password = response.data.password;
                    this.customer.email = response.data.email;
                    this.customer.stats = response.data.stats;
                    console.log(resp.data);
               })
                
               .catch(e => {
                   console.log(e);
               });
               alert("Updated")
           },      
           deletCustomer(){
             var data = {
                    id: this.id,
                    lastname: this.lastname,
                    firstname: this.firstname,
                    username: this.username,
                    password: this.password,
                    email: this.email,
                    stats: this.stats
                    
                };
               console.log(data);
               http
                    .delete('http://localhost:8080/api/customer/' + this.id, data)
                    .then(resp => {
                      this.customer.id = response.data.id;
                        console.log(resp.data);
               })
                
               .catch(e => {
                   console.log(e);
               });
            alert("Deleted");
           }
    },
      mounted(){
            axios.get('http://localhost:8080/api')
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
#img{margin-top:20px;}
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
