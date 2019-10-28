<template>
  <div class="new">
    <v-header :longcomment="longcomments" :shortcomment="shortcomments"></v-header>
    <div class="content-wrapper">
      <div class="banner">
        <img :src="data.image" alt />
        <span>{{data.title}}</span>
        <i>{{data.image_source}}</i>
      </div>
      <div class="body" v-html="data.body"></div>
    </div>
  </div>
</template>
<script>
import vHeader from "../components/header2";
import api from "../common/js/api";
export default {
  components: {
    vHeader
  },
  data() {
    return {
      data: {},
      longcomments: [],
      shortcomments: []
    };
  },
  mounted() {
    this.id = this.$route.params.id;
    //获取详情页内容
    this.axios({
      url: api.find + "/" + this.id
    }).then(res => {
      console.log(res);

      this.data = res.data;
      //   this.body = res.data.body;
      //   res.data.body = this.attachBodyContent(res.data.body);
      console.log(res);
    });
    //获取长评论
    this.axios({
      url: api.longComent + "/" + this.id + "/" + "long-comments"
    }).then(res => {
      console.log(res);
      this.longcomments = res.data.comments;
    });
    //获取短评论
    this.axios({
      url: api.longComent + "/" + this.id + "/" + "short-comments"
    }).then(res => {
      console.log(res);
      this.shortcomments = res.data.comments;
    });
  }
};
</script>
<style  lang="scss">
// @import url("../common/css/news_qa.auto.css");
@import "../common/css/news_qa.auto.css";
.headline .img-place-holder {
  height: 0;
}
.new {
  width: 100vw;
  height: 100vh;
}
.banner {
  position: relative;
  width: 100vw;
  height: 350px;
  margin-top: 80px;
  img {
    width: 100%;
    height: 100%;
  }
  span {
    position: absolute;
    bottom: 20px;
    font-size: 40px;
    color: #fff;
    padding: 10px;
    line-height: 50px;
  }
  i {
    position: absolute;
    bottom: 10px;
    right: 40px;
    color: #fff;
    font-size: 25px;
  }
}
 
</style>