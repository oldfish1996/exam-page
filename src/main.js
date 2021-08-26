import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import router from './router'
import store from './store'
import { Button,Radio,RadioGroup,ButtonGroup,Message,MessageBox,Pagination } from 'element-ui';

Vue.config.productionTip = false
Vue.use(VueRouter)
//element-ui
Vue.use(Button)
Vue.use(Radio)
Vue.use(RadioGroup)
Vue.use(ButtonGroup)
Vue.use(Pagination);
Vue.prototype.$message = Message
Vue.prototype.$confirm = MessageBox.confirm

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
