<template>
  <section class="write_box">
    <div class="up_box_top">
      <p class="up_box_top_title">全民股东_ 201610241223.mp4</p>
      <p class="plan_box">
        <span class="line"></span>
        <i class="fa fa-lg fa-check-circle"></i>
      </p>
      <span>上传成功100%</span>
    </div>

    <div class="up_box_bottom">
      <form action method="post" class="upform">
        <p>
          <label for="title">标题</label>
          <input type="text" id="title" placeholder="请输入课程标题" />
        </p>
        <p>
          <label for="sort">分类</label>
          <input type="text" id="sort " placeholder="请输入课程分类" />
        </p>
        <div class="introduce_box">
          <span for="introduce" class="introduce">课程介绍</span>
          <textarea style="resize: none;" class="input_introduce" placeholder="请输入课程介绍"></textarea>
        </div>

        <span class="onesubmit" @click="pathtwo()">保存信息</span>
      </form>
    </div>
  </section>
</template>

<script>
export default {
  methods: {
    pathtwo(){
       this.$router.push("MyCourse");
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
.upform {
  width: 1100px;
  margin: 50px auto 0;
}
.upform p {
  margin-bottom: 25px;
}
.upform label {
  display: inline-block;
  width: 120px;
  font-size: 16px;
  margin-right: 20px;
  text-align: right;
}
.upform input {
  width: 880px;
  height: 50px;
  padding-left: 15px;
  box-sizing: border-box;
}
.upform .input_introduce {
  width: 880px;
  height: 200px;
    padding-top: 5px;
  padding-left: 15px;
    font-size: 16px;
  box-sizing: border-box;
}

.introduce_box {
  position: relative;
  left: 140px;
}
.introduce {
  display: block;
  width: 120px;
  text-align: right;
  position: absolute;
  top: 5px;
  left:-135px;
}
.onesubmit{
  display: block;
  width: 160px;
  height: 40px;
  text-align: center;
  line-height: 40px;
  font-size: 16px;
  background-color: #00aaff;
  border-radius: 8px;
  margin: 25px 0px 0px 140px;
}
</style>