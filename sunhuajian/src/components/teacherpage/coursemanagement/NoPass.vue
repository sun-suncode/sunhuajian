<template>
  <div class="my_courses">
    <CourseList v-for="(item,index) in my_courses" :key="index" :courses_lists="item" :tf="false" :sh="true"></CourseList>
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
    
          data: "3月23日",
          time: "15:43",
          price: "失败原因：内容包含反动性质，请修改"
        },
        {
          video: require("../../../assets/img/video2.jpg"),
          title: "微信微博新媒体营销课程",
         
          data: "3月23日",
          time: "15:43",
          price: "失败原因：内容包含反动性质，请修改"
        }
      ]
    };
  }
};
</script>

<style scoped lang="less">
</style>