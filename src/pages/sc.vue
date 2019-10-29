<template>
  <div class="wrap">
    <div class="header">
      <div class="model">
        <span class="iconfont icon-daohang" @click="showPopup"></span>
        <h1>{{articleList.length}}条收藏</h1>
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
    <div class="list">
      <ul>
        <li v-for="item in articleList" :key="item.id" @click="goDetail(item.id)">
          <span>
            <p>{{item.title}}</p>
          </span>
          <img :src="item.images" alt />
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import api from "../common/js/api";
import vSlide from "../components/slideBar";
import { mapGetters } from "vuex";
export default {
  components: {
    vSlide
  },
  data() {
    return {
      show: this.$store.state.show,
      articleList: localStorage.getItem("arr")
          ? JSON.parse(localStorage.getItem("arr"))
          : [],
      id: this.$store.state.scId
    };
  },

  methods: {
    showPopup() {
      this.show = true;
    },
    changeShow() {
      this.show = false;
    },
    goDetail(id) {
      this.$router.push({ path: `/newDetail/${id}` });
      this.$store.commit("setArticleId", id);
    }
  },
  mounted() {
    
  
  }
};
</script>
<style scoped lang="scss">
.wrap {
  padding-top: 20px;
}
.header {
  overflow: hidden;
  margin-bottom: 80px;
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
.list {
  padding: 0 10px;
  margin-top: 80px;
  ul {
    padding: 0;
    li {
      height: 170px;
      background-color: #fff;
      margin-top: 20px;
      border-radius: 15px;
      span {
        p {
          width: 65%;
          font-size: 25px;
          padding: 20px;
          display: inline-block;
          word-wrap: break-word;
          word-break: break-all;
          overflow: hidden;
          line-height: 30px;
        }
      }
      img {
        width: 150px;
        height: 150px;
        float: right;
        margin: 10px 15px 0 0;
      }
    }
  }
}
</style>