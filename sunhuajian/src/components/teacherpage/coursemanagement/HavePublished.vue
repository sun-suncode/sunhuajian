<template>
  <div class="my_courses">
    <CourseList v-for="(item,index) in my_courses" :key="index" :courses_lists="item" :tf="true"></CourseList>
  </div>
</template>

<script>
import CourseList from "../common/CourseList.vue";
export default {
  components: {
    CourseList
  },
  data() {
    return {
      my_courses: [
        {
          video: require("../../../assets/img/video1.jpg"),
          title: "显露你的实力 — 面试",
          status: "[进行中]",
          data: "3月23日",
          time: "15:43",
          price: "免费"
        },
        {
          video: require("../../../assets/img/video2.jpg"),
          title: "微信微博新媒体营销课程",
          status: "[已结束]",
          data: "3月23日",
          time: "15:43",
          price: "￥199元"
        }
      ]
    };
  }
};
</script>

<style scoped lang="less">
</style>