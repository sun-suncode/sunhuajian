<template>
  <section class="change_password">
    <div class="pass_title">
      <span>登陆密码</span>
    </div>
    <form action method="post" class="change_form">
      <p>
        <label for="oldpassword">原密码</label>
        <input type="text" id="oldpassword" />
      </p>
      <p>
        <label for="newpassword">新密码</label>
        <input type="text" id="newpassword" />
      </p>
      <p>
        <label for="againpassword">确认密码</label>
        <input type="text" id="againpassword" />
      </p>
      <p class="sub_btn">
        <span>确认修改</span>
        <span>取消修改</span>
      </p>
    </form>
  </section>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
.change_password {
  width: 1200px;
  height: 770px;
  background-color: #ffffff;
}
.pass_title {
  height: 120px;
  line-height: 120px;
  color: gray;
  font-weight: bold;
  font-size: 20px;
  padding-left: 60px;
  border-bottom: 2px solid #ececec;
}
.change_form {
  padding: 40px;
  color: gray;
}
.change_form label {
  display: inline-block;
  width: 100px;
  text-align: right;
  font-size: 18px;
}
.change_form input {
  width: 600px;
  height: 50px;
  font-size: 20px;
  line-height: 60px;
  margin: 0px 0px 40px 25px;
}
.sub_btn {
  margin-top: 20px;
}
.sub_btn span{
  display: inline-block;
  width: 160px;
  height: 50px;
  line-height: 60px;
  text-align: center;
  font-size: 18px;
  color: gray;
  cursor: pointer;
  border: 1px solid #cecece;
  border-radius: 12px;
}
.sub_btn span:first-child{
  margin-right:60px ;
  color: #ffffff;
  margin-left: 125px;
  background-color:#00aaff;
}
</style>