import Vue from 'vue';
import App from './App.vue';
import { defineCustomElements, applyPolyfills } from 'test-components/loader';

Vue.config.productionTip = false;
Vue.config.ignoredElements = [/my-\w*/];

// Apply necessary Polyfills for IE11.
applyPolyfills().then(() => {
  defineCustomElements(window);
});

new Vue({
  render: (h) => h(App),
}).$mount('#app');
