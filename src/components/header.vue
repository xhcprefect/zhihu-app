<template>
  <div class="header" ref="header">
    
    <div class="model">
      <span class="iconfont icon-daohang" @click="showPopup"></span>
      <h1>{{this.$store.state.title}}</h1>
    </div>
    <van-popup
      v-model="show"
      closeable
      close-icon="iconfont icon-daohang"
      position="left"
      :style="{ height: '100%',width:'85%' }"
    >
      <v-slide @change="changeShow"></v-slide>
    </van-popup>
    {{this.$store.state.show}}
  </div>
</template>
<script>
import vSlide from "../components/slideBar";
export default {
  components: {
    vSlide
  },
  data() {
    return {
      show: this.$store.state.show
    };
  },

  methods: {
    showPopup() {
      this.show = true;
    },
    changeShow() {
      this.show = false;
    },
    get() {
      var headerH = this.$refs.header.offsetHeight;
      console.log(headerH);
      this.$store.commit('setHeight',headerH)
      var title=document.querySelector('.model h1').innerHTML
      this.$store.commit('setTitle',title)
      
    }
  },
  mounted() {
    this.get()
  }
};
</script>
<style scoped lang="scss">
.header {
  position: fixed;
  z-index: 10;
  left: 0;
  top: 0;
  width: 100vw;
  height: 80px;
  // text-align: center;
  background-color: #00a2ed;
  .model {
    line-height: 80px;
    span {
      position: absolute;
      left: 10px;
      font-size: 50px;
      color: #fff;
    }
    h1 {
      font-size: 40px;
      color: #fff;
      margin: 0;
      margin-left: 100px;
    }
  }
}
</style>