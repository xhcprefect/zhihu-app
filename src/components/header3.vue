<template>
  <div class="back">
    <span class="iconfont icon-fanhui icon1" @click="$router.go(-1)"></span>
    <span class="iconfont icon-pinglun icon2"></span>
    <h3>{{longcomment.length+shortcomment.length}}条点评</h3>
  </div>
</template>
<script>
export default {
    props:['longcomment','shortcomment']
};
</script>
<style scoped lang="scss">
.back {
  position: fixed;
  z-index: 3;
  left: 0;
  top: 0;
  width: 100vw;
  height: 80px;
  text-align: center;
  background-color: #00a2ed;
  line-height: 80px;
  span {
    position: absolute;
    font-size: 50px;
    color: #fff;
    vertical-align: middle;

    i {
      font-size: 20px;
      position: absolute;
      padding-left: 5px;
    }
  }
  .icon1 {
    left: 10px;
  }
  .icon2 {
    font-size: 40px;
    right: 10px;
  }
  h3{
      color: #fff;
      font-size: 30px;
  }
}
</style>