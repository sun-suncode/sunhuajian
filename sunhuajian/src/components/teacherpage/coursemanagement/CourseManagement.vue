<template>
  <main>
    <section class="type_area flex tb">
      <CommonLeft :msg='[{title:"我的课程",icon:"fa-file-text",id:"aa"},{title:"我的活动",icon:"fa-bullhorn",id:"bb"}]'></CommonLeft>

       <section class="course_management_right">
            <router-view></router-view>
      </section>
    </section>
  </main>
</template>

<script>
import CommonLeft from "../common/CommonLeft.vue";
export default {
  components: {
    CommonLeft,
  }
};
</script>

<style scoped lang="less">
main {
  background-color: #f4f4f4;
}
.flex {
  display: flex;
  height: 780px;
  justify-content: space-between;
}
.course_management_right {
  width: 1200px;
  margin-left: 25px;
  background-color: #ffffff;
}
</style>