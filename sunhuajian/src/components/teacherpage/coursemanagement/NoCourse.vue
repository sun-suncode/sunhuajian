<template>

  <section v-if="show=1">
    <a href="javascript:;" class="video" @click="pathone()">
      <img src="../../../assets/img/video.jpg" alt />
    </a>
    <div class="refer">
      <ol>
        <li>1、不得.上传未经授权的他人作品，以及色情、反动等违法视频。</li>
        <li>2、视频大小限制:不支持断点续传,视频文件最大200M</li>
        <li>3、支持视频音频格式| mp4、flv、 f4v、 webrh</li>
        <li>4、不支持时长小于1秒或大于10小时的视频文件，上传 后将不能成功转码</li>
        <li>5、高清( 360P ): 视频分辨率>=640x360， 视频码率> =800kbps</li>
        <li>6、超清( 720P ):视频分辨率>=960x540， 视频码率>=1500kbps</li>
        <li>7、蓝光(1080P) :视频分辨率>=1920x1080，视频码率>=2500kbps</li>
      </ol>
    </div>
  </section>
 
</template>

<script>

export default {
  components: {
    
  },
  data() {
    return {};
  },
  methods: {
    pathone() {
      this.$router.push("UpCourse");
    },
  }
};
</script>

<style scoped lang="less">
.video {
  display: block;
  width: 170px;
  height: 150px;
  margin: 120px auto 40px;
}
.refer li {
  width: 600px;
  margin: 0 auto 30px;
  font-size: 18px;
  color: #c6c6c6;
  // margin-bottom: 30px;
}
</style>