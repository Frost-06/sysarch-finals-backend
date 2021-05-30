<template>
<div class="main-1">
  <div class="login-page">
    <div class="left-side">
        <img src="../assets/login-bg.png" alt="">
    </div>
    <div class="right-side">
      <div>
        <h2 class="header-1">
          Login
        </h2>
      </div>
        <form action="" class="frm-1">
          <div class="frm-grp">
            <label>Username</label>
            <input type="text" placeholder="RidersBuddy06"/>
          </div>

          <div class="frm-grp">
            <label>Password</label>
            <input type="text" placeholder="6+ Characters, 1 Capital Letter"/>
          </div>
           <router-link to = "/profile"><button type="button" id="login" style="background-color:#1AA3E9;
                                                  border-radius: 54px;
                                                  font-weight: 600;
                                                  font-size: 16px;
                                                  width: 220px;
                                                  height: 60px;
                                                  border: none;
                                                  cursor: pointer;
                                                  color: #fff;
                                                  outline-style: none;
                                                  margin-right: 1.6em;
                                                  margin-top: 3em;
">Login</button> </router-link>
        </form>
         <router-link to = "/admin-login"><a href="#" style="margin-left: -15px; margin-top: 25px; color: #1AA3E9">Login as administrator</a></router-link>
    </div>
  </div>
</div>
          
</template>

<script>
export default {
  name: 'Login',
  components: {
      
  }
}
</script>
<style scoped>
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@100;500&display=swap');

:root {
    --body-font: 'Poppins', sans-serif;
    --primary-color: #1AA3E9;
    --secondary-color: #19456B;
    --bg-color: #fff;
    --inpt-clr: #F6F9FE;
    --inpt-placeholder-clr: #999CB8;
}

*,::before,::after{
    box-sizing: border-box;
    margin: 0;
    font-family: var(--body-font);
}

#main-1 {
  margin: 0;
    background-repeat: no-repeat;
    width: 100%;
    height: 100%;
    overflow-y: hidden !important;
}

.login-page {
  display: inline-flex;
  flex-grow: 1;
  width: 100%;
  align-items: center;
}

.login-page img {
  width: 85%;
  margin-left: -15%;
}

.right-side {
  display: flex;
  flex-direction: column;
  margin-left: 15%;
}

.right-side h2 {
  font-style: normal;
  font-weight: bold;
  font-size: 48px;
  color: #1AA3E9;
  margin-left: -10.5em;

}

.frm-grp {
  display: flex;
  flex-direction: column;
  margin-top: 10%;
}

.frm-grp label {
  margin-left: -85%;
  margin-bottom: 1em;
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  color: #565656;
}

.frm-grp input {
  background: #FFFFFF;
  border: 4px solid rgba(0, 0, 0, 0.12);
  box-sizing: border-box;
  border-radius: 20px;
  width: 646px;
  height: 74px;
  outline: none;
  padding-left: 25px;
}

#log-in:hover {
    box-shadow: none;
    transition: cubic-bezier(0.455, 0.03, 0.515, 0.955) 0.3s;
    opacity: 80%;
}

</style>