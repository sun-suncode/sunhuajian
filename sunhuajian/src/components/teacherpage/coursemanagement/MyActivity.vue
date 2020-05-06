<template>
  <section>
    <div class="course_management_right_top_box">
      <div class="courses">
        <span
          class="courses_button"
          v-for="(item,index) in courses_list"
          :key="index"
          @click="change(index),path(index)"
        >
          <i
            class="fa mr"
            :class='[{item_def:index==number},{"fa-check-circle":index==number},{"fa-circle-o":index !=number}]'
          ></i>
          {{item}}
        </span>
      </div>
    </div>
    <router-view></router-view>
  </section>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      number: 0,
      courses_list: ["已发布的课程", "审核中的课程", "未通过审核的课程"]
      // my_courses: [
      //   {
      //     video: require("../../../assets/img/video1.jpg"),
      //     title: "显露你的实力 — 面试",
      //     status: "[进行中]",
      //     data: "3月23日",
      //     time: "15:43",
      //     price: "免费"
      //   },
      //   {
      //     video: require("../../../assets/img/video2.jpg"),
      //     title: "微信微博新媒体营销课程",
      //     status: "[已结束]",
      //     data: "3月23日",
      //     time: "15:43",
      //     price: "￥199元"
      //   }
      // ]
    };
  },
  methods: {
    change(index) {
      this.number = index;
    },
    path(index) {
      if (index == 0) {
        this.$router.push("HavePublished");
      } else if (index == 1) {
        this.$router.push("Audit");
      } else if (index == 2) {
        this.$router.push("NoPass");
      }
    }
  }
};
</script>

<style scoped lang="less">
.course_management_right {
  width: 1200px;
  margin-left: 25px;
  background-color: #ffffff;
}
.course_management_right_top_box {
  line-height: 130px;
  font-size: 22px;
  padding-left: 35px;
  border-bottom: 1px solid #f3f3f3;
}

.courses_button {
  margin-right: 55px;
}
.item_def {
  color: #00aaff;
}
.mr {
  margin-right: 15px;
}

.my_courses_msg {
  height: 270px;
  box-sizing: border-box;
  padding: 60px 0px 50px 35px;
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
  margin-top: 30px;
  color: #00aaff;
  font-size: 24px;
  margin-left: 5px;
  font-weight: bold;
}
</style>