<template>
  <div class="per_box">
    <p class="per_title">个人简介</p>
    <div class="msg_box" v-show="show==1">
      <p class="msg_detail">涂磊，1977年6月10日出生于江西省南昌市，中国内地男主持人，毕业于南方冶金学院(现江西理工大学)计算机系1996级。</p>
      <p>
        2004年，担任长沙人民广播电台星沙之声频道(FM105)的主持人。2006年，转战电视节目，随后主持了长沙晚间法律节目
        《方圆调查》。2010年， 担任青海卫视新闻脱口秀节目《嘎嘣爆米花》的嘎嘣观察员[1]。2011年， 主持浙江钱江频道
        电视新闻时评类节目《九点半》[2]。2012年，主持了江西卫视新闻评论类节目《深度观察》[3],2013年，担任河北卫视
        情感谈话节目《情感大裁判》的主持人[4]。2014年，担任天津卫视职场招聘节目《非你莫属》的主持人[5] ;同年，在天
        津卫视情感综艺类节目《爱情保卫战》中担任情感导师[6]
      </p>
    </div>

    <textarea class="msg_box" style="resize:none" v-show="show==2">
        涂磊，1977年6月10日出生于江西省南昌市，中国内地男主持人，毕业于南方冶金学院(现江西理工大学)计算机系1996级。

        2004年，担任长沙人民广播电台星沙之声频道(FM105)的主持人。2006年，转战电视节目，随后主持了长沙晚间法律节目
        《方圆调查》。2010年， 担任青海卫视新闻脱口秀节目《嘎嘣爆米花》的嘎嘣观察员[1]。2011年， 主持浙江钱江频道
        电视新闻时评类节目《九点半》[2]。2012年，主持了江西卫视新闻评论类节目《深度观察》[3],2013年，担任河北卫视
        情感谈话节目《情感大裁判》的主持人[4]。2014年，担任天津卫视职场招聘节目《非你莫属》的主持人[5] ;同年，在天
        津卫视情感综艺类节目《爱情保卫战》中担任情感导师[6].
</textarea>

    <span class="bianji" @click="shownum()" v-show="show"><i class="fa fa-pencil"></i>编辑</span>

    <div class="per_box_btn" v-show="show==2">
      <span class="per_box_btn_one" @click="shownumber()">确认修改</span>
      <span class="per_box_btn_two" @click="shownumber()">取消修改</span>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      show: 1
    };
  },
  methods: {
    shownum() {
     this.show=2
    },
    shownumber(){
      this.show=1
    }
  }
};
</script>

<style lang="less" scoped>
.per_box {
  padding: 65px 60px 0 45px;
  box-sizing: border-box;
  flex-direction: column;
  width: 590px;

  position: relative;
}
.per_title {
  font-size: 18px;
  margin-bottom: 38px;
}
.msg_box {
  width: 485px;
  height: 500px;
  border-radius: 5px;
  padding: 32px 42px 0 20px;
  box-sizing: border-box;
  font-size: 16px;
  line-height: 28px;
  color: #686868;
  margin-bottom: 40px;
  background-color: #ffffff;
}
.msg_detail {
  margin-bottom: 36px;
}

.bianji {
  display: block;
  width: 120px;
  line-height: 50px;
  text-align: center;
  cursor: pointer;
  font-size: 18px;
  position: absolute;
  right: 50px;
  top: 40px;
  color: #00aaff;
}

.per_box_btn {
  width: 485px;
  text-align: center;
  box-sizing: border-box;
}
.per_box_btn_one,
.per_box_btn_two {
  display: inline-block;
  width: 210px;
  line-height: 60px;
  text-align: center;
  background-color: #fff;
  font-size: 16px;
  border-radius: 5px;
  border: 1px solid #dddddd;
  cursor: pointer;
}
.per_box_btn_one {
  background-color: #00aaff;
  color: #fff;
  margin-right: 18px;
}
</style>