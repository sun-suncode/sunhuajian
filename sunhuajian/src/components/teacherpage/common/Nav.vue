<template>
  <section>
    <section id="nav">
      <div class="navigation_bar clearfix type_area">
        <a
          href="javascript:;"
          v-for="(item , index) in nav_lists"
          :key="index"
          :class="[{item_def:index==number},{my_center:index==0}]"
          @click="change(index)"
        >{{item}}</a>
        <a href="javascript:;" class="add_course">+ 添加课程</a>
      </div>
    </section>
    <router-view></router-view>
  </section>
</template>

<script>
export default {
  data() {
    return {
      number:"",
      nav_lists: ["My Center", "基本信息", "课程管理", "我的问答", "我的收入"]
    };
  },
  methods: {
    change(index) {
      this.number = index;
      if (index == 0) {
        this.$router.push("MyCenter");
      } else if (index == 1) {
        this.$router.push("BasicInfo");
      } else if (index == 2) {
        this.$router.push("CourseManagement");
      } else if (index == 3) {
        this.$router.push("MyQues");
      }
    },
    pushrouter() {
      this.$router.push("MyCenter");
    }
  }
};
</script>

<style lang="less" scoped>
/* 导航栏区域样式 */
#nav {
  background-color: #ffffff;
}

.navigation_bar {
  font-size: 18px;
  height: 120px;
  /* line-height: 120px; */
  position: relative;
  display: flex;
  align-items: center;
  /* background-color: red; */
}

.navigation_bar a {
  display: block;
  height: 55px;
  text-align: center;
  line-height: 55px;
  color: #333333;
  margin-right: 110px;
}

.navigation_bar .my_center {
  color: #00aaff;
  font-size: 30px;
  margin-right: 120px;
  border: 0;
}

.navigation_bar_item:hover {
  color: #00aaff;
}
a.item_def {
  color: #00aaff;
  border-bottom: 1px solid #00aaff;
}

.navigation_bar .add_course {
  display: block;
  position: absolute;
  top: 39px;
  right: 0;

  width: 210px;
  height: 40px;
  line-height: 40px;
  text-align: center;
  color: #00aaff;
  border-radius: 25px;
  margin-right: 0;
  border: 1px solid gray;
}

.navigation_bar .add_course:hover {
  background-color: #00aaff;
  color: #fff;
}
</style>