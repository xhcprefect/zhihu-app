<template>
  <div class="back">
    <span class="iconfont icon-fanhui icon1" @click="$router.go(-1)"></span>
    <span class="iconfont icon-share_icon icon2"></span>
    <span class="iconfont icon-shoucang icon3" :class="[isConnect?'yellow':'white']" @click="sc"></span>
    <span class="iconfont icon-icon- icon4" @click="$router.push('/comment')">
      <i>{{longcomment.length+shortcomment.length}}</i>
    </span>
    <span class="iconfont icon-dianzan icon5" @click="likes">
      <i>{{popularity}}</i>
    </span>
  </div>
</template>
<script>
import api from "../common/js/api";
export default {
  props: ["longcomment", "shortcomment"],
  data() {
    return {
      id: this.$store.state.articleId,
      popularity: "",
      color: this.$store.state.color,
      i: 0,
      articleList: {},
      list: [],
      isConnect: false
    };
  },
  methods: {
    likes() {
      this.color = "#FFD700";
      if (this.color == "#FFD700") {
        this.popularity++;
      }
    },
    setItem() {},
    sc() {
      // this.$store.commit("setScId", this.id);
      if (this.isConnect) {
        //已经收藏了取消收藏
        var arr = JSON.parse(localStorage.getItem("arr"));
        var idx = arr.findIndex(item => item.id === this.id);
        arr.splice(idx, 1);
        localStorage.setItem("arr", JSON.stringify(arr));
        this.isConnect = false;
      } else {
        var arr = localStorage.getItem("arr")
          ? JSON.parse(localStorage.getItem("arr"))
          : [];
        arr.push(this.articleList);
        localStorage.setItem("arr", JSON.stringify(arr));
        this.isConnect = true;
        console.log(arr);
      }
    }
  },
  mounted() {
    this.axios({
      url: api.find + "/" + this.id
    }).then(res => {
      console.log(res);
      this.articleList = res.data;
      console.log(this.articleList);
    });
    var arr = localStorage.getItem("arr")
      ? JSON.parse(localStorage.getItem("arr"))
      : [];
  
      this.isConnect=arr.some(item => item.id == this.id)
    this.axios({
      url: api.extra + "/" + this.id
    }).then(res => {
      console.log(res);
      this.popularity = res.data.popularity;
    });
  }
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
      color: #fff;
    }
  }
  .yellow {
    color: yellow;
  }
  .white {
    color: #fff;
  }
  .icon1 {
    left: 10px;
  }
  .icon2 {
    font-size: 40px;
    left: 200px;
  }
  .icon4 {
    right: 170px;
  }
  .icon5 {
    font-size: 40px;
    right: 60px;
  }
}
</style>