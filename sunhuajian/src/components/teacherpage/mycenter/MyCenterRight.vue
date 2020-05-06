<template>
  <section class="content_right">
 <MyCourses v-for="(item,index) in courses_list" :key="index" :user_course="item"></MyCourses>
    <NewStudents></NewStudents>
  </section>
</template>

<script>
import NewStudents from "./NewStudents.vue";
import MyCourses from "./MyCourses.vue";
export default {
  components: {
    MyCourses,
    NewStudents
  },
  data() {
    return {
      courses_list: [
        {
          title: "我上传的课程",
          num: "3"
        },
        {
          title: "我的问答",
          num: "3"
        }
      ]
    };
  }
};
</script>

<style lang="less" scoped>

</style>