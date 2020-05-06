<template>
  <section>
    <section class="basic_information_right" v-if="show==true">
      <p class="user_name_box">
        <span>姓名</span>
        <span>孙华建</span>
        <span class="copyreader" v-on:click="copyreader()">
          <i class="fa fa-pencil"></i>编辑
        </span>
      </p>
      <p>
        <span>出生日期</span>
        <span>1999年2月9日</span>
      </p>
      <p>
        <span>性别</span>
        <span>男</span>
      </p>
      <p class="user_num_phone">
        <span>手机号</span>
        <span>19998654588</span>
        <span class="verification">
          <i class="fa fa-check mr"></i>已验证
        </span>
      </p>
      <p>
        <span>邮箱</span>
        <span>123456789@qq.com</span>
      </p>
      <p>
        <span>身份证</span>
        <span>555444199902096666</span>
      </p>
      <p>
        <span>微信</span>
        <span>12345678900</span>
      </p>
      <p>
        <span>QQ</span>
        <span>123456789</span>
      </p>
    </section>
    <section v-if="!show">
      <CopyReader></CopyReader>
    </section>
  </section>
</template>

<script>
import CopyReader from "./CopyReader.vue";
export default {
  components: {
    CopyReader
  },
  data() {
    return {
      show: true
    };
  },
  methods: {
    copyreader() {
      this.show = false;
    }
  }
};
</script>

<style lang="less" scoped>
.basic_information_right {
  height: 770px;
  width: 1200px;
  padding: 50px 35px;
  box-sizing: border-box;
  background-color: #fff;
}

.basic_information_right p {
  margin: 0px 0px 15px 0px;
  width: 580px;
  line-height: 55px;
  font-size: 20px;
}
.basic_information_right p span:first-child {
  display: inline-block;
  width: 80px;
  margin-right: 25px;
  text-align: right;
}
.basic_information_right p.user_name_box {
  display: block;
  width: 980px;
  position: relative;
}
.copyreader {
  cursor: pointer;
  position: absolute;
  color: #00aaff;
  right: 0;
}
.basic_information_right p.user_name_box i {
  margin-right: 10px;
}

.user_num_phone {
  position: relative;
}
.user_num_phone .verification {
  display: inline-block;
  width: 200px;
  height: 55px;
  position: absolute;
  right: 120px;
  top: 0px;
  line-height: 55px;
  box-sizing: border-box;
  text-align: center;
  font-size: 16px;
  color: #94c200;
}
.user_num_phone .mr {
  margin-right: 10px;
}
</style>