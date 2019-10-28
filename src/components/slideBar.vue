<template>
  <div>
    <div class="header">
      <div class="tx">
        <img src="../assets/images/tou.jpg" alt />
        <i>xhc</i>
      </div>
      <div class="share">
        <span @click="sc">
          <i class="iconfont icon-shoucang"></i>
          <b>我的收藏</b>
        </span>
        <span>
          <i class="iconfont icon-xiazai1"></i>
          <b>我的下载</b>
        </span>
      </div>
    </div>
    <div class="shou">
      <span @click="shouye">
        <i class="iconfont icon-liuliangyunpingtaitubiao02"></i>
        <b>首页</b>
      </span>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      show: false
    };
  },
  methods: {
    shouye() {
      this.$emit("change");
      this.$router.push('/index')
    },
    sc() {
      this.$emit("change");
      setTimeout(() => {
        this.$router.push("/sc");
      }, 300);
    }
  }
};
</script>
<style scoped lang="scss">
.header {
  overflow: hidden;
  width: 100vw;
  height: 300px;
  background-color: #00a2ed;
  .tx {
    margin: 20px;
    line-height: 90px;
    img {
      width: 90px;
      height: 90px;
      border-radius: 50%;
      margin-right: 10px;
    }
    i {
      color: #fff;
      opacity: 0.7;
      font-size: 30px;
    }
  }
  .share {
    margin-top: 120px;
  }
  span {
    position: relative;
    color: #fff;
    font-size: 30px;
    margin-left: 50px;
    i {
      font-size: 50px;
      left: 0;
      top: -4px;

      position: absolute;
    }
    b {
      margin-left: 80px;
    }
  }
  .shou {
    width: 100vw;
    height: 80px;
    background-color: #f0f0f0;
    line-height: 80px;
    span {
      font-size: 50px;
      color: #079eed;
      vertical-align: middle;
      b {
        font-size: 40px;
      }
    }
  }
}
</style>