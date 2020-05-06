<template>
  <header class="header">
    <div class="login_header_wrapper type_area">
      <a href="javascript:;" class="logo">
        <img src="../../../assets/img/logo.jpg" alt="网站logo" />
      </a>
      <div class="login_wrapper">
        <span class="sign_in_button" @click="changePath()">注册</span>
        <span class="line">|</span>
        <span class="login_button" @click="changePathtwo()">登录</span>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  methods: {
    changePath() {
      this.$router.push("ByPhoneSign");
    },
    changePathtwo(){
      this.$router.push("ByPhonelogin");
    }
  }
};
</script>

<style lang="less" scoped>
.header {
  height: 120px;
  background-color: #ffffff;
  box-shadow: 15px 15px 50px #eaeaea;
}
.login_header_wrapper {
  display: flex;
  height: 120px;
  align-items: center;
  justify-content: space-between;
}
.logo {
  display: block;
  width: 340px;
  height: 80px;
}
.logo img {
  display: block;
  width: 100%;
  height: 100%;
}
.login_wrapper {
  color: #bcbcbc;
}

.line {
  margin: 0px 5px;
}
.sign_in_button,
.login_button {
  cursor: pointer;
}
</style>

