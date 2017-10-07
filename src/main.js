import Vue from 'vue'
import App from './App'
import router from './router'
import UIkit from 'uikit'
import Icons from 'uikit/dist/js/uikit-icons'
import 'uikit/dist/css/uikit.min.css'
import VueFire from 'vuefire'
import Router from 'vue-router'
import Firebase from 'firebase'
import VueLocalStorage from 'vue-localstorage/src'
import VueGlobalReactive from './plugins/global'

UIkit.use(Icons)

Vue.use(VueGlobalReactive)
Vue.config.productionTip = false
Vue.use(VueLocalStorage, {bind: true})
Vue.use(VueFire)
Vue.use(Router)

var config = {
  apiKey: 'AIzaSyDZnIN6rJ2qdZoaL2OGyXE73244w4N6t7U',
  authDomain: 'vueonfire.firebaseapp.com',
  databaseURL: 'https://vueonfire.firebaseio.com',
  projectId: 'vueonfire',
  storageBucket: 'vueonfire.appspot.com',
  messagingSenderId: '747529820635'
}

Vue.prototype.$firebase = Firebase.initializeApp(config)
Vue.prototype.$db = Vue.prototype.$firebase.database()
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
