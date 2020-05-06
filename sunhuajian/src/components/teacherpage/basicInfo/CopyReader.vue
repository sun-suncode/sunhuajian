<template>
  <section class="basic_information_right_copyreader">
    <form action method="POST" enctype="multipart/form-data">
      <p>
        <label for="name">姓名</label>
        <input type="text" id="name" name="username" value="孙华建" />
      </p>
      <p>
        <label for="birthday">出生日期</label>
        <input
          type="text"
          disabled
          id="birthday"
          name="userbirthday"
          placeholder="本项不可输入，当写完身份证信息后自动同步出生日期"
          value
        />
      </p>
      <div class="sex">
        <label for="sex">性别</label>
        <input type="text" id="sex" name="usersex" value="男" />
        <div class="choose_sex">
          <i class="fa fa-angle-down"></i>
          <div class="choose_sex_box">
            <option disabled value>请选择</option>
            <option class="sex_choose" value="男">男</option>
            <option class="sex_choose" value="女">女</option>
          </div>
        </div>
      </div>
      <p class="phone_num">
        <label for="phonenumber">手机号</label>
        <input
          type="text"
          id="phonenumber"
          name="user_phonenumber"
          class="user_phonenum"
          value="12345678900"
        />
        <span class="verification">
          <i class="fa fa-check">已验证</i>
        </span>
        <span class="get_code">获取验证码</span>
      </p>
      <p>
        <label for="email">邮箱</label>
        <input type="text" id="email" name="user_email" value="123456789@qq.com" />
      </p>
      <p>
        <label for="id_card">身份证</label>
        <input type="text" id="id_card" name="use_id" value="12345678912345678X" />
      </p>
      <p>
        <label for="wechat">微信</label>
        <input type="text" id="wechat" name="use_wechat" value="12345678900" />
      </p>
      <p>
        <label for="qq">QQ</label>
        <input type="text" id="qq" name="use_qq" value="123456789" />
      </p>
    </form>
    <p>
      <span class="sub" v-on:click="disapper()">提交信息</span>
      <span class="cancel" v-on:click="disapper()">取消修改</span>
    </p>
  </section>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
.basic_information_right_copyreader {
  height: 770px;
  width: 1200px;
  padding: 50px 35px;
  box-sizing: border-box;
  background-color: #fff;
}

.basic_information_right_copyreader form p,
.basic_information_right_copyreader .sex {
  margin: 0px 0px 15px 0px;
}

.basic_information_right_copyreader form p label,
.basic_information_right_copyreader .sex label {
  display: inline-block;
  width: 80px;
  font-size: 20px;
  text-align: right;
  margin-right: 25px;
}
.basic_information_right_copyreader form p span,
.basic_information_right_copyreader .sex span {
  display: inline-block;
  width: 80px;
  font-size: 20px;
  text-align: right;
  margin-right: 25px;
}
.basic_information_right_copyreader form p input,
.basic_information_right_copyreader .sex input {
  width: 520px;
  height: 55px;
  font-size: 18px;
  padding-left: 15px;
  box-sizing: border-box;
  border: 1px solid grey;
}

.basic_information_right_copyreader form p .user_phonenum {
  width: 320px;
}
.phone_num {
  position: relative;
  width: 650px;
}

.basic_information_right_copyreader .verification {
  display: inline-block;
  width: 200px;
  height: 55px;
  position: absolute;
  right: 170px;
  top: 0px;
  line-height: 55px;
  box-sizing: border-box;
  text-align: center;
  font-size: 16px;
  color: #94c200;
}
.basic_information_right_copyreader .get_code {
  display: block;
  width: 200px;
  height: 55px;
  position: absolute;
  right: -4px;
  top: 0px;
  line-height: 55px;
  box-sizing: border-box;
  text-align: center;
  font-size: 20px;
  cursor: pointer;
  border: 1px solid grey;
}
.basic_information_right_copyreader .get_code:hover {
  background-color: #00aaff;
  color: #fff;
}
.basic_information_right_copyreader .sub {
  display: inline-block;
  width: 215px;
  height: 58px;
  color: #fff;
  font-size: 20px;
  text-align: center;
  line-height: 58px;
  border-radius: 8px;
  margin-right: 20px;
  margin-left: 110px;
  cursor: pointer;
  background-color: #00aaff;
  border: 1px solid gray;
}
.basic_information_right_copyreader .cancel {
  display: inline-block;
  width: 215px;
  height: 58px;
  font-size: 20px;
  text-align: center;
  line-height: 58px;
  border-radius: 8px;
  cursor: pointer;
  background-color: #fff;
  border: 1px solid gray;
}
.basic_information_right_copyreader .sex {
  position: relative;
  width: 650px;
}
.choose_sex,
.choose_sex_box {
  display: inline-block;
  width: 150px;
  height: 55px;
  line-height: 55px;
  text-align: center;
  position: absolute;
  right: 21px;
  font-size: 24px;
  box-sizing: border-box;
  border-left: 0;
  /* border-right: 0; */
}
.basic_information_right_copyreader .choose_sex:hover {
  background-color: #f4f4f4;
  border: 1px solid gray;
  box-sizing: border-box;
}
.basic_information_right_copyreader .choose_sex:hover .choose_sex_box {
  display: block;
}
.basic_information_right_copyreader
  .choose_sex:hover
  .choose_sex_box
  .sex_choose:hover {
  background-color: #f4f4f4;
}
.choose_sex_box {
  display: none;
  height: auto;
  top: 55px;
  right: -1px;
  background-color: #fff;
  z-index: 5;
}
.choose_sex_box option {
  border: 1px solid gray;
}
</style>