<template>
  <div class="user_identity_wrapper">
    <a
      href="javascript:;"
      class="user_identity"
      v-for="(item,ind) in user_identity"
      :key="ind"
      :class="{item_def:ind==1}"
      @click="change(ind)"
    >
      <img :src="item.img" :alt="item.alt" />
      <span class="username">{{item.name}}</span>
    </a>
  </div>
</template>

<script>
export default {
  data() {
    return {
      number: 0,
      num: 0,
      phonenumber: "",
      passwod: "",
      user_identity: [
        {
          img: require("../../../assets/img/students_logo.jpg"),
          name: "我是学生",
          alt: "学生logo"
        },
        {
          img: require("../../../assets/img/teacher_logo.jpg"),
          name: "我是讲师",
          alt: "讲师logo"
        },
        {
          img: require("../../../assets/img/HR_logo.jpg"),
          name: "HR",
          alt: "HRlogo"
        }
      ]
    };
  },
  methods: {}
};
</script>

<style lang="less" scoped>
// 左侧用户身份样式
.userid {
  display: flex;
}
.user_identity_wrapper {
  width: 145px;
}
.user_identity {
  display: block;
  height: 150px;
  text-align: center;
  padding-top: 40px;
  color: #ffffff;
  box-sizing: border-box;
  background-color: #202421;
}
.user_identity_wrapper .item_def {
  padding-top: 120px;
  height: 305px;
  background-color: #adc700;
}
.user_identity img {
  display: block;
  width: 45px;
  height: 45px;
  margin: 0px auto 20px;
}

.username {
  display: block;
  margin: auto;
  width: 85px;
  height: 20px;
  color: #ffffff;
}
</style>