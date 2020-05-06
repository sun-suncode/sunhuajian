<template>
  <section>
    <form action method="post" class="formtwo">
      <span class="login_title">通过手机号码登录</span>

      <div class="phone_login_box">
        <div class="getercodebox">
          <label for="ph_num">手机号</label>
          <input type="text" name id="ph_num" />
          <span class="getnumcode">获取验证码</span>
        </div>
        <label for="auth_code">验证码</label>
        <input type="text" name id="auth_code" />
      </div>
      <span class="subm">提交登录</span>
    </form>
  </section>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
.formtwo {
  width: 700px;
  display: inline-block;
  background-color: #ffffff;
}
.login_title {
  display: block;
  width: 530px;
  height: 60px;
  font-size: 20px;
  color: #333333;
  text-align: center;
  line-height: 70px;
  font-weight: bold;
  margin: 55px auto 0px;
  box-sizing: border-box;
  border-bottom: 4px solid #eeeeee;
}
.phone_login_box {
  margin-top: 105px;
  width: 530px;
  color: #808898;
  font-size: 18px;
  margin: 50px auto 0;
}
.phone_login_box input {
  width: 530px;
  height: 50px;
  border: 0;
  font-size: 18px;
  color: #808898;
  line-height: 50px;
  padding-left: 80px;
  box-sizing: border-box;
  margin-bottom: 45px;
  border-bottom: 1px solid #808898;
}
.phone_login_box label {
  position: relative;
  top: 35px;
  left: 5px;
}
.getercodebox {
  position: relative;
}
.getnumcode {
  display: block;
  width: 160px;
  line-height: 50px;
  font-size: 18px;
  color: #adc700;
  cursor: pointer;
  position: absolute;
  right: -60px;
  top: 18px;
}
.subm {
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
  margin: 80px auto;
  background-color: #adc700;
}
</style>