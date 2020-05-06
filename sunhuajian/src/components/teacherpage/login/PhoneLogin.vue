<template>
  <section>
    <div class="login_wrapper">
      <div class="teacher_bk">
        <img src="../../../assets/img/bkpeople.jpg" alt />
      </div>
      <div class="login_form">
        <div class="userid">
          <UserId></UserId>
          <router-view></router-view>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import UserId from "./UserId.vue";
export default {
  components: {
    UserId
  }
};
</script>

<style scoped lang="less">
.login_wrapper {
  margin-top: 2px;
  display: flex;
  align-items: center;
  background-color: #f9f9f9;
}
.teacher_bk {
  width: 680px;
  height: 840px;
  background-color: black;
}
.teacher_bk img {
  display: block;
  width: 100%;
  height: 100%;
}
.login_form {
  display: flex;
  width: 845px;
  height: 605px;
  position: relative;
  right: 145px;
  border-radius: 5px;
  background-color: #ffffff;
}
.userid{
  display: flex;
}
</style>