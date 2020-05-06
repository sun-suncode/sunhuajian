<template>
  <section class="my_answer_box">
    <ul>
      <li class="answer_list" v-for="( item , index) in list" :key="index">
        <p class="answer_list_title">{{ item.title }}</p>
        <div class="msg_box">
          <p>
            <span class="msg_box_cpu">CPU</span>
            <span class="amd">  AMD</span>
            <span class="athlon">Athlon</span>
              <i class="ll">ll</i>
              <i class="xfour">X4</i>
              <i class="sihe">(速龙II四核)</i>
           
            <span class="msg_box_cpu">640盒装CPU</span>
            <span class="msg_box_nami">(Socket AM3/3GHz/2M二级缓存/45纳米)</span>
            <span>主板华硕(ASUS)M5A88-...</span>
          </p>
        </div>
        <p class="answer_list_data">
          <span>回答时间：</span>
          <span>{{ item.time }}</span>
          <span class="answer_list_data_ans">回答：{{ item.num }}</span> 丨
          <span>{{ item.people }}人看过</span>
          <span class="msg_box_span">提问者：{{ item.name }}</span>
        </p>
        <span class="msg_box_buttom" :class="item.bor_bgc">{{ item.text }}</span>
      </li>
    </ul>
  </section>
</template>

<script>
export default {
  data() {
    return {
      list: [
        {
          title: "中午在凡客打客服电话退货了，下午可以到么？我在北京",
          time: "3月23日 15:43",
          num: 0,
          people: 91,
          text: "有追问",
          bor_bgc: "one_buttom",
          name: "流浪猫"
        },
        {
          title: "中午在凡客打客服电话退货了，下午可以到么？我在北京",
          time: "3月23日 15:43",
          num: 0,
          people: 91,
          text: "删除回答",
          bor_bgc: "two_buttom",
          name: "流浪猫"
        }
      ]
    };
  }
};
</script>

<style>
.my_answer_box {

  border-radius: 5px;
  background-color: #fff;
  box-sizing: border-box;
}

.my_answer_box_one {
  display: flex;
  align-items: center;
}
.answer_list {
  padding: 50px 0;
  font-size: 18px;
  padding-left: 40px;
  position: relative;
  border-bottom: 1px solid #efefef;
}
.answer_list_title {
  margin-bottom: 20px;
}
.answer_list_data {
  font-size: 14px;
  color: #888888;
}
.answer_list_data_ans {
  margin-left: 48px;
}
.one_buttom {
  border: 1px solid #efefef;
  color: #00aaff;
}
.one_buttom:hover {
  background-color: #00aaff;
  color: #fff;
}
.two_buttom {
  color: #cecece;
}
.msg_box {
  width: 830px;
  box-sizing: border-box;
  color: #909090;
  background-color: #f8f8f8;
  padding: 20px 35px 20px 26px;
  font-size: 16px;
  margin-bottom: 25px;
  border-radius: 5px;
}
.msg_box_cpu {
  margin-right: 32px;
}
.msg_box_cpu {
  margin: 0 12px;
}
.sihe,.amd,.athlon,.ll,.xfour {
  padding: 0 5px;
}
.msg_box_nami {
  margin-right: 20px;
}
.NaN {
  padding: 0 5px;
}
.msg_box_buttom {
  display: block;
  position: absolute;
  right: 55px;
  top: 65px;
  width: 200px;
  box-sizing: border-box;
  text-align: center;
  padding: 0 60px;
  line-height: 42px;
  border-radius: 30px;
  font-size: 14px;
  cursor: pointer;
}
</style>