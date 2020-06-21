import Vue from 'vue'
import App from './App.vue'
import Bootstrap from 'bootstrap-vue'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'bulma/css/bulma.css'

import router from './router'
import store from './store'

import { domain, clientId } from '../auth_config.json';
import { Auth0Plugin } from './auth';

Vue.use(Bootstrap)
Vue.use(Auth0Plugin, {
  domain,
  clientId,
  onRedirectCallback: appState => {
    router.push(
      appState && appState.targetUrl
        ? appState.targetUrl
        : window.location.pathname
    );
  }
});


Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
