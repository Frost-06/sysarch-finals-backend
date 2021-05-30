<template>
    <div>
        <br>
        <br>    
        <h1>View Users</h1>
        <br>
        <br>
        <br>
        <br>
        <table border = "1px" id = "users">
            <tr>
                <th>Client Id</th>  
                <th>Clients Name</th>
                <th>Clients Password</th>
                <th>Clients Contact Info</th>
                <th>Clients Location</th>
                <th>Edit</th>
                <th>Delete</th>
            </tr>
            <tr v-for="user in list" v-bind:key="user.clientId">
                <td>{{user.clientId}}</td>
                <td>{{user.clientName}}</td>
                <td>{{user.pass}}</td>
                <td>{{user.contactInfo}}</td>
                <td>{{user.location}}</td>
                <td><button class = "btnEdit"><i class="fa fa-pencil fa_custom fa-1x"></i></button></td>
                <td><button class = "btnDelete"><i class="fa fa-trash-o fa_custom fa-1x"></i></button></td>
                <td></td>   
            </tr>
        </table>
    </div>
</template>
<script>
   
    import axios from 'axios'
    

    
    export default {
        name: "Users",
        data()
        {
            return {list:undefined}
        },
        mounted(){
            axios.get('http://localhost:8080/api/user')
            .then((resp)=>{
               
                this.list = resp.data;
            })
        }
    }
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
</style>