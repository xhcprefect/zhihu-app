<template>
  <div>
    <div
      class="list"
      v-infinite-scroll="loadMore"
      infinite-scroll-disabled="loading"
      :infinite-scroll-immediate-check="true"
      :infinite-scroll-distance="articleList.length"
    >
      <ul v-for="(items,index) in articleList" :key="items.index">
        <li class="date">
          <h1>{{showDay(index)}}</h1>
        </li>
        <li v-for="item in items.stories" :key="item.id" @click="goDetail(item.id)">
          <span>
            <p>{{item.title}}</p>
          </span>
          <img :src="item.images" alt />
        </li>
      </ul>
      <div class="loading-box tc" v-if="isLoading">
        <mt-spinner type="snake" class="loading-more"></mt-spinner>
        <span class="loading-more-txt">加载中...</span>
      </div>
    </div>
  </div>
</template>
<script>
import api from "../common/js/api";

export default {
  data() {
    return {
      articleList: [],
      data: [],
      todayDate: "",
      list: [],
      isLoading: false,
      loading: false,
      height:this.$store.state.height
    };
  },
  methods: {
    goDetail(id) {
      this.$router.push({ path: `/newDetail/${id}` });
      this.$store.commit("setArticleId", id);
    },
    loadMore() {
      this.loading = true;
      this.isLoading = true;
      setTimeout(() => {
        this.axios({
          url: api.listItem + "/" + this.todayDate
        }).then(res => {
          this.isLoading = false;
          // this.articleList.push(res.data["stories"]);
          this.data.push(res.data["date"]);
          //    res.data.date.forEach(item => {
          //       this.data.push(item);
          //     });
          console.log(res);

          this.todayDate = res.data["date"];
          this.articleList.push(res.data);
          //   res.data["stories"].forEach(item => {
          //     this.articleList.push(item);
          //   });
        });
        this.loading = false;
      }, 2500);
    },
    showDay(index) {
      if (index === 0) {
        return "今日新闻";
      } else {
        return this.getToday(index);
      }
    },
    getToday(index) {
      let year = this.data[index].slice(0, 4);
      let month = this.data[index].slice(4, 6);
      let day = this.data[index].slice(6);
      let today = new Date(year + "/" + month + "/" + day);
      let week = ["日", "一", "二", "三", "四", "五", "六"];
      return month + "月" + day + "日" + " 星期" + week[today.getDay()];
    }
  },
  created() {
    this.axios({
      url: api.nowItem
    }).then(res => {
      console.log(res);
      //   res.data["date"].forEach(item => {
      //     this.data.push(item);
      //   });
      this.todayDate = res.data["date"];
      //   this.list = res.data.data;
      this.data.push(res.data["date"]);
      this.articleList.push(res.data);
      //   res.data["stories"].forEach(item => {
      //     this.articleList.push(item);
      //   });
    });
  },
  mounted() {
    console.log(this.articleList);
    window.onscroll = () => {
      var dates = document.querySelectorAll(".date h1");
      var arr=[]
      for(var i=0;i<dates.length;i++){
        arr.push(dates[i].getBoundingClientRect().top)
      }
      var n=arr.findIndex((item,index)=>{
        return item<this.height&&arr[index+1]>0
      })
      if(n==-1){
        this.$store.commit('setTitle','首页')
      }else{
        this.$store.commit('setTitle',dates[n].innerHTML)
      }
    };
  }
};
</script>
<style scoped lang="scss">
.list {
  .date {
    height: 110px;
    margin-bottom: 0;
    background: none;
    margin-top: -20px;
    h1 {
      height: 70px;
      line-height: 70px;
      padding: 20px;
      font-size: 25px;
      opacity: 0.5;
    }
  }
  padding: 0 10px;

  ul {
    padding: 0 ;
    li {
      //   width: 100vw;
      height: 170px;
      background-color: #fff;
      margin-bottom: 20px;
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

.loading-box {
  padding: 0.1rem 0;
  margin-left: 270px;
  .loading-more {
    display: inline-block;
    vertical-align: middle;
    margin-right: 0.2rem;
  }
  .loading-more-txt {
    vertical-align: middle;
    font-size: 0.22rem;
  }
}
</style>