<template>
  <div id="app">
    <section v-if="getPath()==true">
          <router-view></router-view>
    </section>
    <section v-else>
          <router-view></router-view>
    </section>
  </div>
</template>

 <script>


export default {
  name: "App",
  components: {

  },
  data() {
    return {
      show: true
    };
  },
  methods: {
    getPath() {
      console.log(this.$route.path);
      let show = true;
      if (this.$route.path == "/Login") {
        show = true;
        return show;
      } else if (this.$route.path == "/Mycenter") {
        show = false;
        return show;
      }
    }
  }
};
</script>

<style lang="less" scoped>
</style>
