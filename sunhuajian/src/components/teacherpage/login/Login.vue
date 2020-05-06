<template>
  <section class="one">
    <Header></Header>
    <PhoneLogin></PhoneLogin>
  </section>
</template>

<script>
import Header from "../common/Header.vue";
import PhoneLogin from "./PhoneLogin.vue";
export default {
  components: {
    Header,
    PhoneLogin
  }
};
</script>

<style lang="less" scoped>
</style>