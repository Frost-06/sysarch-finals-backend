<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> | 
      <router-link to="/manageProduct">Add Product</router-link> |
      <router-link to="/manageProduct">View Product</router-link> |
      <router-link to="/manageProduct">Transactions</router-link> |
      <router-link to="/manageUsers">Manage User</router-link>  |
      
    </div>
    <router-view/>
  </div>
</template>
<script>



</script>
<style>
*{
  margin: 0;
  padding: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
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
  
</style>
