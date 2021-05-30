<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    {{ message }}
  </div>
</template>

<script>
// @ is an alias to /src
import axios from 'axios'

export default {
  name: 'Home',
  async created() {
    const response = await axios.get('user', {
      headers: {
        Authorization: 'Bearer' + localStorage.getItem('token')
      }
    });

    console.log(response);
  }
}
</script>
