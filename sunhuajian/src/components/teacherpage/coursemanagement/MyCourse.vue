<template>
 <router-view></router-view>
</template>

<script>
export default {
  components: {},
  data() {
    return {};
  },
  methods: {
    pathone() {
      this.$router.push("UpCourse");
    },
  }
};
</script>

<style scoped lang="less">
.video {
  display: block;
  width: 170px;
  height: 150px;
  margin: 120px auto 40px;
}
.refer li {
  width: 600px;
  margin: 0 auto 30px;
  font-size: 18px;
  color: #c6c6c6;
  // margin-bottom: 30px;
}
</style>