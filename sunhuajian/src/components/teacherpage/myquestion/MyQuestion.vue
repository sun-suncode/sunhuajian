<template>
  <main>
    <section class="type_area flex tb">
      <CommonLeft :msg='[{title:"我的提问",icon:"fa-file-text",id:"yi"},{title:"我的回答",icon:"fa-bullhorn",id:"er"}]'></CommonLeft>
      <MyQuestionRight></MyQuestionRight>
    </section>
  </main>
</template>

<script>
import CommonLeft from "../common/CommonLeft";
import MyQuestionRight from "./MyQuestionRight.vue";

export default {
  name:"MyQuestion",
  components: {
   MyQuestionRight,
   CommonLeft
  },
  methods: {}
};
</script>

<style lang="less" scoped>
main {
  background-color: #f4f4f4;
}
.flex {
  display: flex;
  height: 780px;
  justify-content: space-between;
}
</style>