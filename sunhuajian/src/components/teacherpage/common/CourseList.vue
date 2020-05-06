<template>
  <div class="my_courses_msg">
    <a href="javascript:;">
      <img :src="courses_lists.video" alt />
    </a>
    <div class="my_courses_msg_detail">
      <div class="my_courses_title">
        <h2>{{courses_lists.title}}</h2>
        <span class="status">{{courses_lists.status}}</span>
      </div>
      <p class="data_time">
        <span>上传时间:</span>
        <span class="data">{{courses_lists.data}}</span>
        <span>{{courses_lists.time}}</span>
      </p>
      <p class="people" v-if="tf">
        <span>
          <i class="fa fa-user-o"></i>128位学员
        </span>
        <span>
          <i class="fa fa-commenting ol"></i>18条评论
        </span>
      </p>
      <span class="price" :class="{mt:tf==true}">{{courses_lists.price}}</span>
    </div>

    <div class="btn_box" v-if="!tf">
      <span class="make">修改课程</span>
      <span class="delete" v-if="sh">删除课程</span>
    </div>
  </div>
</template>

<script>
export default {
  props: ["courses_lists", "tf","sh"],
  data() {
    return {};
  }
};
</script>

<style scoped lang="less">
.my_courses_msg {
  height: 270px;
  box-sizing: border-box;
  padding: 60px 0px 50px 35px;
  box-sizing: border-box;
  position: relative;
}
.my_courses_msg a {
  display: inline-block;
}
.my_courses_msg a img {
  display: block;
}
.my_courses .my_courses_msg:first-child {
  border-bottom: 1px solid #f3f3f3;
}
.my_courses_msg_detail {
  display: inline-block;
  vertical-align: top;
  margin-left: 35px;
}
.my_courses_title {
  margin-top: 10px;
}
.my_courses_title h2 {
  display: inline-block;
  font-weight: bold;
  font-size: 22px;
}
.status {
  display: inline-block;
  color: #00aaff;
  margin-left: 10px;
  font-size: 22px;
  font-weight: bold;
}
.data_time {
  font-size: 18px;
  margin: 20px 0;
  color: #cacaca;
}
.data {
  margin: 0 10px;
}
.ol {
  margin-left: 20px;
}
.people {
  font-size: 18px;
  color: #cacaca;
}

.price {
  display: inline-block;
  color: #00aaff;
  font-size: 22px;
  margin-left: 5px;
  font-weight: bold;
}
.mt {
  margin-top: 15px;
}

.btn_box {
  position: absolute;
  right: 105px;
  top: 95px;
    text-align: center;
}
.make {
  display: block;
  width: 160px;
  height: 40px;
  border: 1px solid #cacaca;
  text-align: center;
  line-height: 40px;
  cursor: pointer;
  border-radius: 20px;
  font-size: 18px;
  color: #00aaff;
  margin-bottom: 20px;
}
.make:hover{
  color:#ffffff;
  background-color: #00aaff;
}
.delete{
  cursor: pointer;
  color: #cacaca;
  font-size: 14px;

}
</style>