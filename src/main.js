import Vue from 'vue'
import App from './newApp.vue'
import router from './router'
import VueCarousel from 'vue-carousel';

import DefaultLayout from "@/layouts/Default.vue";
import AnotherLayout from "@/layouts/Custom.vue";

Vue.config.productionTip = false;

Vue.component("default-layout", DefaultLayout);
Vue.component("another-layout", AnotherLayout);

 
Vue.use(VueCarousel);
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
