<template>
  
    <form enctype method="post" class="form">
      <div class="login_method">
        <span
          class="method"
          v-for="(item,index) in method"
          :key="index"
          :class="{def:index==number}"
          @click="changeindex(index)"
        >{{item}}</span>
      </div>
      <div class="num_login_box" v-show="show">
        <div class="input">
          <div class="phonenum_input">
            <label for="phone" class="arr_right">手机号</label>
            <input type="text" v-model="phonenumber" id="phone" required />
          </div>
          <div class="password_input">
            <label for="passwod" class="arr_right">密码</label>
            <input type="password" v-model="passwod" id="password" required />
          </div>
          <span class="miss">忘记密码？</span>
        </div>
        <button class="submit" @click="skip()">登陆啦</button>
        <div class="sign_box">
          <span>还没有账号？</span>
          <span class="please">请</span>
          <span class="sign">注册</span>
        </div>
      </div>
      <div class="code_login_box" v-show="showone">
        <img src="../../../assets/img/ercode.jpg" alt="二维码登录" />
      </div>
    </form>
</template>

<script>

export default {
  data() {
    return {
      number: 0,
      num:0,
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
      ],
      method: ["账号登录", "微信登录"],
      show: true,
      showone: false
    };
  },
  methods: {
    skip() {
      this.$router.push("Mycenter");
    },
    change(ind) {
      this.num = ind;
    },
    changeindex(index) {
      this.number = index;
      this.show = !this.show;
      this.showone = !this.showone;
    }
  }
};
</script>

<style scoped lang="less">

// 右侧form表单样式
.form {
  width: 700px;
  background-color: #ffffff;
}

.login_method {
  width: 530px;
  height: 60px;
  margin: 55px auto 0px;
}
.login_method .method {
  display: inline-block;
  width: 50%;
  height: 70px;
  font-size: 20px;
  color: #808898;
  text-align: center;
  line-height: 70px;
  cursor: pointer;
  box-sizing: border-box;
  border-bottom: 4px solid #eeeeee;
}
.login_method .def {
  color: #adc700;
  border-bottom: 4px solid #adc700;
}
.input {
  width: 530px;
  color: #808898;
  font-size: 18px;
  position: relative;
  margin: 70px auto 0;
}
.phonenum_input {
  margin-bottom: 45px;
}
input {
  width: 530px;
  height: 50px;
  border: 0;
  font-size: 18px;
  color: #808898;
  line-height: 50px;
  padding-left: 85px;
  box-sizing: border-box;
  border-bottom: 1px solid #808898;
}

.arr_right {
  position: relative;
  top: 32px;
  left: 5px;
}
.miss {
  position: absolute;
  right: -10px;
  bottom: -30px;
  cursor: pointer;
}

.submit {
  display: block;
  width: 530px;
  height: 60px;
  text-align: center;
  line-height: 60px;
  font-size: 20px;
  border-radius: 60px;
  border: 0;
  color: #ffffff;
  outline: none;
  margin: 120px auto 30px;
  background-color: #adc700;
}

.sign_box {
  font-size: 20px;
  color: #808898;
  margin-left: 240px;
}
.please {
  margin: 0px 10px 0px 20px;
}
.sign {
  color: #abc700;
  cursor: pointer;
}

// 右侧二维码登录样式
.code_login_box {
  margin: 70px auto 0;
  width: 370px;
  height: 370px;
}
.code_login_box img {
  display: block;
  width: 100%;
  height: 100%;
}
</style>