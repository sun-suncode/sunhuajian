<template>
  <section class="authinfo">
      <router-view></router-view>
  </section>
</template>

<script>
export default {
  components: {},
  methods: {
  }
};
</script>

<style lang="less" scoped>
.authinfo {
  width: 1200px;
  min-height: 770px;
  background-color: #ffffff;
  display: flex;
}
.auth_id,
.auth_per {
  flex: 1;
}
.auth_id {
  border-right: 1px solid #f4f4f4;
  box-sizing: border-box;
}
.btn{
  display: block;
  width: 120px;
  height: 50px;
  cursor: pointer;
}
</style>