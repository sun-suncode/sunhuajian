<template>
  <section class="all_ques">
    <div class="question_title">
      <span v-for="(item,index) in navs" :key="index" @click="change(index)">
        <i
          class="fa mr"
          :class='[{item_def:index==number},{"fa-check-circle":index==number},{"fa-circle-o":index !=number}]'
        ></i>
        {{item}}
      </span>
      <span class="quiz">我要提问</span>
    </div>

    <div class="content_one">
      <router-view></router-view>
    </div>
  </section>
</template>

<script>

export default {
  data() {
    return {
      navs: ["全部", "待处理"],
      number: 0
    };
  },
  methods: {
    change(index) {
      this.number = index;
    }
  }
};
</script>

<style lang="less" scoped>
.all_ques {
  width: 1200px;
  height: 780px;
  background-color: #ffffff;
}
.question_title {
  height: 120px;
  font-size: 20px;
  line-height: 120px;
  padding-left: 40px;
  position: relative;
  border-bottom: 1px solid #ececec;
}
.question_title span:first-child {
  margin-right: 80px;
}
.item_def {
  color: #00aaff;
}
.quiz {
  display: block;
  width: 160px;
  height: 40px;
  font-size: 18px;
  line-height: 40px;
  border-radius: 8px;
  color: #ffffff;
  text-align: center;
  position: absolute;
  right: 90px;
  top: 30px;
  background-color: #00aaff;
}
</style>