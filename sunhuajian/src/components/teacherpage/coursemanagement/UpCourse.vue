<template>
  <section class="up_box">
    <div class="up_box_top">
      <p class="up_box_top_title">全民股东_ 201610241223.mp4</p>
      <p class="plan_box">
        <span class="line"></span>
        <i class="fa fa-lg fa-check-circle"></i>
      </p>
      <span>上传成功100%</span>
    </div>

    <div class="up_box_bottom">

        
      <div class="up_box_bottom_box">
        <img class="success_img" src="../../../assets/img/success.jpg" alt />

        <p class="up_box_bottom_state">保存成功，等待审核</p>
        <p class="up_box_bottom_wait">课程上传成功，正在进行人工审核，我们会在24小时后告知您审核结果，请耐心等候。</p>

        <button class="up_box_bottom_btn" @click="routertwo()">继续上传</button>
      </div>


    </div>
  </section>
</template>

<script>
export default {
  methods: {
    routertwo() {
      this.$router.push("WriteCourse");
    }
  }
};
</script>

<style lang="less" scoped>
.up_box_top {
  padding: 56px 45px 60px 50px;
  box-sizing: border-box;
  border-bottom: 2px solid #f9f9f9;
  background-color: #fafeff;
}
.up_box_top_title {
  margin-bottom: 16px;
}
.plan_box {
  color: #00aaff;
  margin-bottom: 18px;
}
.line {
  display: inline-block;
  width: 1055px;
  height: 10px;
  background-color: #00aaff;
  border-radius: 10px;
  margin-right: 12px;
}
.up_box_bottom {
  padding-top: 100px;
  box-sizing: border-box;
}
.up_box_bottom_box {
  width: 425px;
  margin: 0 auto;
  text-align: center;
}
.success_img {
  margin-bottom: 30px;
}
.up_box_bottom_state {
  font-size: 20px;
  margin-bottom: 16px;
}
.up_box_bottom_wait {
  font-size: 16px;
  color: #888888;
  line-height: 24px;
  margin-bottom: 30px;
}
.up_box_bottom_btn {
  outline: none;
  width: 210px;
  line-height: 60px;
  background-color: #00aaff;
  color: #fff;
  border: 0;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
}
</style>