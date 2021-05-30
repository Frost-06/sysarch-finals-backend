<template>
<div class="container">
  <br>
  <br>
  <br>
    <h1>Registration Page</h1>
    <br />
    <br />
    <div class="row">
        <div class="col-md-6">
  
             <div class="form-group" id="userInput">
              <label for="inputUsername">Username</label>
              <input type="text" class="form-control" id="inputUsername" placeholder="Username" name = "username" v-model="users.username" required>
            </div>
            <div class="form-group" id="passwordInput">
                <label for="password">Password</label>
              <input type="password" class="form-control" id="password" placeholder="Password" name = "password" v-model="users.password" required>
            </div>
            <!-- <div class="form-group">
                <label for="reenterpassword">Password</label>
              <input type="password" class="form-control" id="reenterpassword" placeholder="Repeat Password" name = "reenterpassword" required>
            </div>
            -->
            <div class="form-group" id="contactInput">
                <label for="contactInfo">Contact#</label>
              <input type="text" class="form-control" id="contactInfo" placeholder="Contact Number" name = "contactinfo" v-model="users.contactinfo" required>
            </div>
            <div class="form-group" id="locationInput">
                <label for="location">Location: </label>
              <input type="text" class="form-control" id="location" placeholder="Location" name = "location" v-model="users.location" required>
            </div>
            
            <br>
            <button type="submit" id = "submit" class="btn btn-primary" @click="saveUser()">Register</button>
             <br>
             <!-- <div v-if="inputPassword != reenterpassword" class="text-danger">Password doesn't match</div> -->
            <br>
            <p>Already have an account?</p> 
            <div id="clickLogin" @click="$router.push('/')">
              Log in
            </div>
            <br>
          
        </div>
    </div>
</div>
</template>

<script>
import http from "../http-common";

export default {
  name: "users",
  data() {
    return {
      users: {
        clientName: "",
        pass: "",
        contactInfo: "",
        location: "",
      },
      submitted: false
    };
  },
  methods: {
    /* eslint-disable no-console */
    saveUser() {
      var data = {
        clientName: this.users.username,
        pass: this.users.password,
        contactInfo: this.users.contactinfo,
        location: this.users.location
      };
    
      http
        .post("/user", data)
        .then(response => {
          this.users.id = response.data.id;
          console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        });

      this.submitted = true;
    },
    newUser() {
      this.submitted = false;
      this.saveUser = {};
    }
    /* eslint-enable no-console */
  }
};
</script>
<style scoped>
input[type=text] {
    width: 100%;
    padding: 15px 20px 50px;
    margin-left: 53%;
    box-sizing: border-box;  
    border-radius: 10px;
    height:50px;
    text-align: center;
    color: #0a0a0a;
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
input[type=password] {
    width: 100%;
    padding: 15px 20px 50px;
    margin-left: 53%;
    box-sizing: border-box;  
    border-radius: 10px;
    height:50px;
    text-align: center;
    color: #0a0a0a;
}
 
#submit {
  color: #3b353b;
  background-color: white;
  width: 150px; /* was 150, now 150px */
  height: 50px;
  border-radius: 10px;
  position: center;
  margin-left: 88%;
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

