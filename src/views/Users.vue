<template>
  <div v-if="this.users">
    <h4>Users</h4>
    <div>
      <label>Username: </label> {{this.users.username}}
    </div>
    <div>
      <label>Password: </label> {{this.users.password}}
    </div>
    <div>
      <label>Contact Info: </label> {{this.users.contactinfo}}
    </div>
    <div>
      <label>Location: </label> {{this.users.location}}
    </div>
  
    <span v-if="this.users.active"
      v-on:click="updateActive(false)"
      class="button is-small btn-primary">Inactive</span>
    <span v-else
      v-on:click="updateActive(true)"
      class="button is-small btn-primary">Active</span>
  
    <span class="button is-small btn-danger" v-on:click="deleteUser()">Delete</span>
  </div>
  <div v-else>
    <br/>
    <p>Please click on a User...</p>
  </div>
</template>

<script>
import http from "../http-common";

export default {
  name: "users",
  props: ["users"],
  methods: {
    /* eslint-disable no-console */
    updateActive(status) {
      var data = {
        id: this.users.id,
        name: this.users.username,
        age: this.users.password,
        contactinfo: this.users.contactinfo,
        location: this.users.location
      };

      http
        .put("/users" + this.users.id, data)
        .then(response => {
          this.users.active = response.data.active;
          console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        });
    },
    deleteUser() {
      http
        .delete("/deleteUser/" + this.users.id)
        .then(response => {
          console.log(response.data);
          this.$emit("refreshData");
          this.$router.push('/');
        })
        .catch(e => {
          console.log(e);
        });
    }
    /* eslint-enable no-console */
  }
};
</script>