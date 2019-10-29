import Vue from 'vue'
import vuex from 'vuex'

Vue.use(vuex);
var state = {
  articleId: '',
  color:'',
  scId:'',
  articleList:[],
  height:'',
  title:'首页'
}


var getters = {
  articleId: state => state.articleId,
  color:state=>state.color,
  show:state=>state.show,
  scId:state=>state.scId,
  articleList:state=>state.articleList,
  height:state=>state.height,
  title:state=>state.title
}
var mutations = {
  setArticleId(state, id) {
    state.articleId = id;
  },
  setColor(state,color){
    state.color=color
  },
  setShow(state,show){
    state.show=show
  },
  setScId(state,id){
    state.scId=id
  },
  setArticleList(state,name){
    state.articleList=name
  },
  setHeight(state,name){
    state.height=name
  },
  setTitle(state,name){
    state.title=name
  }
}
var store = new vuex.Store({
  state,
  getters,
  mutations
})
export default store
