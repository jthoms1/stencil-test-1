import Vue from 'vue';
import App from './App.vue';
import { defineCustomElements } from 'test-components/loader';

Vue.config.productionTip = false;
Vue.config.ignoredElements = [/my-\w*/];

defineCustomElements(window);

new Vue({
  render: (h) => h(App),
}).$mount('#app');
