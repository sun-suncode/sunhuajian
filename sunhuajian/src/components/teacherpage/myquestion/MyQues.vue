<template>
    <section class="my_ques_box">
      <ul>
          <li class="ques_list" v-for="( item , index) in list" :key="index">
              <p class="ques_list_title">{{ item.title }}</p>
              <p class="ques_list_data">
                  <span>提问时间：</span><span>{{ item.time }}</span>
                  <span class="ques_list_ans">回答：{{ item.num }}</span> 丨
                  <span>{{ item.people }}人看过</span>
              </p>
              <span class="ques_list_buttom" :class="item.bor_bgc">{{ item.text }}</span>
          </li>
      </ul>
  </section>
</template>

<script>
    export default {

        data(){
            return {
                list:[
                    {
                        title:"中午在凡客打客服电话退货了，下午可以到么？我在北京",
                        time:"3月23日 15:43",
                        num:0,
                        people:91,
                        text:"查看并处理",
                        bor_bgc:"one_buttom"
                    },
                    {
                        title:"想买电脑 不懂配置 求各位大神给一套3000-4000的配置 急求配置 谢谢",
                        time:"3月23日 15:43",
                        num:0,
                        people:91,
                        text:"删除问题",
                        bor_bgc:"two_buttom"
                    }
                ]
            }
        }
    }
</script>

<style>
.my_ques_box{
    border-radius: 5px;
    background-color: #fff;
    box-sizing: border-box;
}
.ques_list{
    padding: 40px 0;
    font-size: 18px;
    padding-left: 40px;
    position: relative;
    border-bottom: 1px solid #efefef;
}
.ques_list_title{
    margin-bottom: 20px;
}
.ques_list_data{
    font-size: 14px;
    color: #888888;
}
.ques_list_ans{
    margin-left: 48px;
}
.ques_list_buttom{
    display: block;
    position: absolute;
    right: 55px;
    top: 65px;
    width: 200px;
    box-sizing: border-box;
    text-align: center;
    padding: 0 60px;
    line-height: 42px;
    color: #00aaff;
    border-radius: 30px;
    font-size: 14px;
    cursor: pointer;
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
    color:#cecece;
}
</style>