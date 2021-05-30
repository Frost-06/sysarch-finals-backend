<template>
  <div id="app">
    
    <router-view/>
  </div>
</template>

<style >
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
  text-align: 50%;
}

#nav {
  background-color: #333;
  overflow: hidden;
}

#nav a {
 float: left;
  color: #f2f2f2;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  font-size: 17px;
  top: 50%;
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
