<template>
  <section id="new_students">
    <div class="new_students_title">
      <span>最新学员</span>
      <span>一周内新增25位学员</span>
    </div>
    <div class="new_classmate">
      <a href="javascript:;" v-for="(item,index) in new_students" :key="index">
        <img :src="item.img" alt="最新学员头像" />
        <span>{{ item.name }}</span>
      </a>
    </div>
  </section>
</template>

<script>
export default {
  data: function() {
    return {
      new_students: [
        {
          img: require("../../../assets/img/h1.jpg"),
          name: "杨志"
        },
        {
          img: require("../../../assets/img/h2.jpg"),
          name: "杨静静"
        },
        {
          img: require("../../../assets/img/h3.jpg"),
          name: "吕子秋"
        },
        {
          img: require("../../../assets/img/h4.jpg"),
          name: "闫强"
        },
        {
          img: require("../../../assets/img/h5.jpg"),
          name: "郭晓宜"
        }
      ]
    };
  }
};
</script>

<style lang="less" scoped>
#new_students {
  margin-top: 30px;
  height: 405px;
  padding: 45px 70px 60px 60px;
  box-sizing: border-box;
  background-color: #fff;
}

.new_students_title span:first-child {
  font-size: 22px;
}

.new_students_title span:last-child {
  float: right;
  margin-right: 70px;
  color: gray;
}

.new_classmate {
  display: flex;
  margin-top: 80px;
  margin-bottom: 15px;
  justify-content: space-between;
}

#new_students a {
  display: inline-block;
  width: 120px;
  text-align: center;
  border-radius: 50%;
  background-position: center;
  background-size: cover;
}

#new_students a img {
  display: block;
  width: 120px;
  height: 120px;
  margin-bottom: 25px;
  border-radius: 50%;
}

#new_students a span {
  color: gray;
}
</style>