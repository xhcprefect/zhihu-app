// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import './assets/css/reset.css'
import './assets/js/rem'
import Vant from 'vant';
import 'vant/lib/index.css';
import store from './store/index'
Vue.use(Vant);
import axios from 'axios'
import VueAxios from 'vue-axios'
import './assets/fonts/iconfont.css'
Vue.use(VueAxios, axios)
Vue.config.productionTip = false
import filters from './filter/index'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
Vue.use(MintUI)
for(var i in filters){
  Vue.filter(i,filters[i])
}
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
