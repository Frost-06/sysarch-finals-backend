<template>
<div class="main-1">
  <div class="login-page">
    <div class="left-side">
        <img src="../assets/reg-bg.png" alt="">
    </div>
    <div class="right-side">
      <div>
        <h2 class="header-1">
          Sign up to Riders Buddy.
        </h2>
      </div>
        <form action="" class="frm-1">
          <div class="frm-grp">
            <div class="first-group">
                <div class="group-1">
                    <div>
                    <label>First Name</label>
                    </div>
                    <div>
                        <input type="text" placeholder="Ex: Andre"/>
                    </div>
                </div>
                <div class="group-2">
                    <div>
                    <label>Last Name</label>
                    </div>
                    <div>
                        <input type="text" placeholder="Ex: Guinita"/>
                    </div>
                </div>
            </div>
             <div class="second-group">
                <div class="group-3">
                    <div>
                    <label>Email Name</label>
                    </div>
                    <div>
                        <input type="text" class="email-input" placeholder="Ex: Andre"/>
                    </div>
                </div>
                <div class="group-4">
                    <div>
                    <label>Username</label>
                    </div>
                    <div>
                        <input type="text" placeholder="Ex: Guinita"/>
                    </div>
                </div>
                <div class="group-5">
                    <div>
                    <label>Password</label>
                    </div>
                    <div>
                        <input type="text" placeholder="Ex: Guinita"/>
                    </div>
                </div>
            </div>
          </div>
          <button type="button" id="login" style="background-color:#1AA3E9;
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
                                                  margin-left: -96%;
">Sign up</button>   
        </form>
    </div>
  </div>
</div>
          
</template>

<script>
export default {
  name: 'Registration',
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
  margin-bottom: 1em;
}
.first-group {
    display: inline-flex;
}

.second-group {
    display: flex;
    flex-direction: column;
}
#log-in:hover {
    box-shadow: none;
    transition: cubic-bezier(0.455, 0.03, 0.515, 0.955) 0.3s;
    opacity: 80%;
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
  width: 400px;
  height: 74px;
  outline: none;
  padding-left: 25px;
}

.frm-grp .email-input {
  width: 700px;
}

.group-1 {
    margin-right: 5em;
    margin-left: -10%;
}

.group-1 input {
    margin-left: -10%;
}

.group-3 {
    margin-left: -15%;
    margin-top: 3em;
}

.group-3 input {
    margin-left: -27%;
}

.group-4 {
    margin-left: -16%;
    margin-top: 3em;
}

.group-4 input {
    margin-left: -55%;
}

.group-5 {
     margin-left: -16%;
    margin-top: 3em;
}

.group-5 input {
    margin-left: -55%;
}
</style>