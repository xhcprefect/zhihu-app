<template>
  <div>
    <van-swipe :autoplay="3000" indicator-color="white">
      <van-swipe-item v-for="item in data" :key="item.id">
        <img :src="item.image" @click="newDetail(item.id)" alt />
      </van-swipe-item>
    </van-swipe>
  </div>
</template>
<script>
import api from "../common/js/api";
export default {
  data() {
    return {
      data: []
    };
  },
  methods: {
    newDetail(id) {
      this.$router.push({ path: `/newDetail/${id}` });
       this.$store.commit('setArticleId', id);
    }
  },
  mounted() {
    this.axios({
      method: "get",
      url: api.swiper
    }).then(res => {
      console.log(res);
      this.data = res.data.top_stories;
    });
  }
};
</script>
<style scoped lang="scss">
.van-swipe {
  margin: 80px 0 20px 0;
  width: 100vw;
  height: 350px;
  img {
    width: 100%;
    height: 100%;
  }
}
/deep/ .van-swipe__indicator{
    width: 10px ;
    height: 10px;
}
</style>