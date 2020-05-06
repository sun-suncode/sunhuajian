<template>
  <section class="authinfo">
    <section class="auth_id">
    <Id v-if="num==1"  :id_msg='{imgone:require("../../../assets/img/id1.jpg"),imgtwo:require("../../../assets/img/id2.jpg"),imgthree:require("../../../assets/img/id1.jpg"),status:"【未认证】",fail:"fail"}'></Id>
    <Id v-if="num==2" :id_msg='{imgone:require("../../../assets/img/id4.jpg"),imgtwo:require("../../../assets/img/id5.jpg"),imgthree:require("../../../assets/img/id6.jpg"),status:"【认证失败】",fail:"fail"}'></Id>
    <Id v-if="num==3" :id_msg='{imgone:require("../../../assets/img/id4.jpg"),imgtwo:require("../../../assets/img/id5.jpg"),imgthree:require("../../../assets/img/id6.jpg"),status:"【认证中】"}'></Id>
    <Id v-if="num==4" :id_msg='{imgone:require("../../../assets/img/id8.jpg"),imgtwo:require("../../../assets/img/id3.jpg"),imgthree:require("../../../assets/img/id7.jpg"),status:"【已认证】"}'></Id>
    </section>

    <section class="auth_per">
      <person></person>
    </section>
  </section>
</template>

<script>
import Id from './Id.vue'
import Person from'./Person.vue'

export default {
  components: {
    Person,
    Id
  },
  data(){
    return{
      num:1
    }
  },
  methods:{
   
  }
};
</script>

<style lang="less" scoped>

</style>