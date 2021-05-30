import Vue from 'vue'
import App from './App.vue'
import router from './router'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import BootstrapVue from 'bootstrap-vue';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css'
import BootstrapSideBar from 'b-sidebar';
import VueRouter from 'vue-router'
import 'regenerator-runtime/runtime'


Vue.use(BootstrapSideBar);
library.add(fas);
Vue.use(VueRouter);


new Vue({
  router, 
  render: h => h(App)
}).$mount("#app");

// .component('fa', FontAwesomeIcon)

export default {
  components: {
    // BIcon,
    // BIconArrowUp,
    // BIconArrowDown,
    // BootstrapSideBar
  },
  props: {
    // ...
  }
  // ...
}
