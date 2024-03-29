// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import './assets/rem'
import './assets/reset.css'

import { Button,Row, Col,Search,Tab, Tabs,Swipe, SwipeItem,Tabbar, TabbarItem,
  Grid, GridItem } from 'vant';
Vue.use(Button).use(Row).use(Col).use(Search).use(Tab).use(Tabs).use(Swipe)
.use(SwipeItem).use(Tabbar).use(TabbarItem).use(Grid).use(GridItem);
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
