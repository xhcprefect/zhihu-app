import Vue from 'vue'
import vuex from 'vuex'

Vue.use(vuex);
var state = {
  articleId: '',
  color:'',
  scId:'',
  articleList:[],
}


var getters = {
  articleId: state => state.articleId,
  color:state=>state.color,
  show:state=>state.show,
  scId:state=>state.scId,
  articleList:state=>state.articleList
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
  }
}
var store = new vuex.Store({
  state,
  getters,
  mutations
})
export default store
