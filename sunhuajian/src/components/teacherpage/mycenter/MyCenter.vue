<template>
  <main>
    <section class="type_area flex tb">
      <MyCenterLeft></MyCenterLeft>
      <MyCenterRight></MyCenterRight>
    </section>
  </main>
</template>

<script>
import MyCenterLeft from "./MyCenterLeft.vue";
import MyCenterRight from "./MyCenterRight.vue";

export default {
  components: {
    MyCenterLeft,
    MyCenterRight
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