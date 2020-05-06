<template>
  <div class="id_box">
    <div class="id_top">
      <div class="id_top_box">
        <div class="id_top_one">
          <img class="id_img" :src="id_msg.imgone" alt />

          <p class="succeed_box_title">
            <span>身份证</span>
            <span class="succeed_box_one">(正面)</span>
            <span class="succeed_box_two succeed_box_succe" :class="id_msg.fail">{{id_msg.status}}</span>
          </p>
        </div>

        <div class="id_top_one">
          <img class="id_img" :src="id_msg.imgtwo" alt />
          <p class="succeed_box_title">
            <span>身份证</span>
            <span class="succeed_box_one">(反面)</span>
            <span class="succeed_box_two succeed_box_succe" :class="id_msg.fail">{{id_msg.status}}</span>
          </p>
        </div>
      </div>
      <p class="succeed_box_msg">
        请上传真实的身份证信息
        <span>正反面</span>
      </p>
      <p class="succeed_box_msg">照片要四角对其，如有模糊、反光、太暗、有遮挡，则不予认证</p>
    </div>

    <div class="id_bottom">
      <div class="id_bottom_box">
        <img class="id_img" :src="id_msg.imgthree" alt />
        <p class="succeed_box_title">
          <span>资质认证</span>
          <span class="succeed_box_two succeed_box_succe" :class="id_msg.fail">{{id_msg.status}}</span>
        </p>
      </div>
      <p class="succeed_box_msg">请上传能证明您专业技能的图片</p>
      <p class="succeed_box_msg">如:职业资格证书、加盖公章的材料证明，获奖证书等</p>
    </div>
  </div>
</template>

<script>
export default {
    props:["id_msg"]
};
</script>

<style lang="less" scoped>
.id_top_box {
  display: flex;
  justify-content: space-between;
}

.id_top,
.id_bottom {
  flex: 1;
  box-sizing: border-box;
  padding: 65px 55px 0px 55px;
}
.id_top_one {
  margin-bottom: 30px;
}
.succeed_box {
  border-bottom: 1px solid #f5f5f5;
}
.id_img {
  width: 220px;
  border: 2px dashed #ececec;
  margin-bottom: 20px;
  box-sizing: border-box;
}
.succeed_box_title {
  text-align: center;
  color: #7e93af;
  font-size: 16px;
}

.succeed_box_msg {
  text-align: center;
  color: #cacaca;
  font-size: 16px;
  line-height: 28px;
}

.succeed_box_succe {
  color: #86cf0d;
}
.id_bottom_box {
  margin: 0 auto;
  width: 220px;
  margin-bottom: 30px;
}

.fail{
  color: red;
}
</style>