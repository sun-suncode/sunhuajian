<template>
  <header>
    <div class="clearfix type_area">
      <div class="logo" @click="push()">
        <a href="javascript:;">
          <img src="../../../assets/img/logotwo.jpg" alt />
        </a>
      </div>
      <div class="user_msg">
        <div class="user_head_portrait">
          <img src="../../../assets/img/t1.jpg" alt />
        </div>
        <span class="user_name">孙华建</span>
        <i class="fa fa-angle-down"></i>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    push() {
      this.$router.push("Login");
    }
  }
};
</script>

<style lang="less" scoped>
/* 头部logo区域的样式 */
header {
  height: 50px;
  background-color: #333333;
}

header .logo {
  float: left;
}

header .logo img {
  display: block;
  height: 50px;
}

header .user_msg {
  float: right;
  color: white;
  font-size: 12px;
  line-height: 50px;
  cursor: pointer;
}

header .user_head_portrait {
  display: inline-block;
  width: 30px;
  height: 30px;
  margin-right: 10px;
  vertical-align: middle;
}

header .user_head_portrait img {
  display: block;
  width: 100%;
  height: 100%;
  border-radius: 50%;
}

.user_name {
  margin-right: 10px;
}
</style>