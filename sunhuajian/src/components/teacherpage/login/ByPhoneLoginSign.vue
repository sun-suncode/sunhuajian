<template>
  <section>
    <form action method="post" class="form">
      <span class="sign_title">通过手机号码注册</span>

      <div class="phone_sign_box">
        <div class="getcodebox">
          <label for="phnum">手机号</label>
          <input type="text" name id="phnum" />
          <span class="getcode">获取验证码</span>
        </div>
        <label for="authcode">验证码</label>
        <input type="text" name id="authcode" />
        <label for="password">密码</label>
        <input type="text" name id="password" />
      </div>
      <span class="sub">提交注册</span>
    </form>
  </section>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
.form {
  width: 700px;
  display: inline-block;
  background-color: #ffffff;
}
.sign_title {
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
.phone_sign_box {
  margin-top: 95px;
  width: 530px;
  color: #808898;
  font-size: 18px;
  margin: 50px auto 0;
}
.phone_sign_box input {
  width: 530px;
  height: 50px;
  border: 0;
  font-size: 18px;
  color: #808898;
  line-height: 50px;
  padding-left: 80px;
  box-sizing: border-box;
  margin-bottom: 25px;
  border-bottom: 1px solid #808898;
}
.phone_sign_box label {
  position: relative;
  top: 35px;
  left: 5px;
}
.getcodebox{
  position: relative;
}
.getcode{
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
.sub {
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
  margin: 40px auto;
  background-color: #adc700;
}
</style>