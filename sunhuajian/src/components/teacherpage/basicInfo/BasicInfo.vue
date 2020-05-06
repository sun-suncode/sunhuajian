
<template>
  <main>
    <section  class="type_area flex tb">
      <CommonLeft :msg='[{title:"我的信息",icon:"fa-user-o",class:"item_i",id:"one"},{title:"认证信息",icon:"fa-check-square",class:"item_i",id:"two"},{title:"密码管理",icon:"fa-cog",class:"item_i",id:"three"}]'></CommonLeft>
       <router-view></router-view>
    </section>
  </main>
</template>

<script>
import CommonLeft from "../common/CommonLeft"
export default {
  components: {
    CommonLeft,
  }
};
</script>

<style lang="less" scoped>
main {
  background-color: #f4f4f4;
}
.flex {
display: flex;
justify-content: space-between;
}
</style>