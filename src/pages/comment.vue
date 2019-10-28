<template>
  <div class="comment">
    <v-comment :longcomment="longcomments" :shortcomment="shortcomments"></v-comment>
    <van-collapse v-model="active">
      <van-collapse-item :title="longcomments.length+'条长评论'" name="1">
        <div class="box" v-for="item in longcomments" :key="item.id">
          <dl>
            <dt>
              <img :src="item.avatar" alt />
            </dt>
            <dd>
              <h3>{{item.author}}</h3>
            </dd>
            <dd>
              {{item.content}}
              <p>{{item.time|timeFilter}}</p>
            </dd>
            <span class="iconfont icon-dianzan">
              <i>{{item.likes}}</i>
            </span>
          </dl>
        </div>
      </van-collapse-item>
    </van-collapse>
    <van-collapse v-model="active">
      <van-collapse-item :title="shortcomments.length+'条短评论'" name="2">
        <div class="box" v-for="item in shortcomments" :key="item.id">
          <dl>
            <dt>
              <img :src="item.avatar" alt />
            </dt>
            <dd>
              <h3>{{item.author}}</h3>
            </dd>
            <dd>
              {{item.content}}
              <p>{{item.time|timeFilter}}</p>
            </dd>
            <span class="iconfont icon-dianzan">
              <i>{{item.likes}}</i>
            </span>
          </dl>
        </div>
      </van-collapse-item>
    </van-collapse>
  </div>
</template>
<script>
import api from "../common/js/api";
import vComment from "../components/header3";
import { mapGetters } from "vuex";
export default {
  components: {
    vComment
  },
  data() {
    return {
      active: [],
      longcomments: [],
      shortcomments: [],
      newsId:this.$store.state.articleId
    };
  },
  computed: {
    ...mapGetters(["articleId"])
  },
  activated() {},
  mounted() {
    //获取长评论
    this.axios({
      url: api.longComent + "/" + this.newsId + "/" + "long-comments"
    }).then(res => {
      console.log(res);
      this.longcomments = res.data.comments;
    });
    //获取短评论
    this.axios({
      url: api.longComent + "/" + this.newsId + "/" + "short-comments"
    }).then(res => {
      console.log(res);
      this.shortcomments = res.data.comments;
    });
  }
};
</script>
<style scoped lang="scss">
.comment {
  padding-top: 80px;
}
.box {
  position: relative;
  dl {
    overflow: hidden;
    width: 80%;
    word-wrap: break-word;
    word-break: break-all;
    overflow: hidden;
  }
  dt {
    float: left;
    width: 60px;
    height: 60px;
    border-radius: 50%;
    background-color: #ccc;
    overflow: hidden;
    img {
      width: 100%;
      height: 100%;
    }
  }
  dd {
    margin-left: 70px;
    h3 {
      font-weight: 700;
      color: #060606;
    }
  }
  span {
    position: absolute;
    top: 0;
    right: 10px;
    i {
      padding: 4px 0 0 5px;
    }
  }
}
</style>