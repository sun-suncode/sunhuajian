<template>
  <section class="two">
    <HeaderOne></HeaderOne>
    <Nav></Nav>
    <Footer></Footer>
  </section>
</template>

<script>
import HeaderOne from "./common/HeaderOne.vue";
import Nav from "./common/Nav.vue"
import Footer from "./common/Footer.vue";
export default {
  components: {
    HeaderOne,
    Footer,
    Nav
  }
};
</script>

<style lang="less" scoped>
</style>