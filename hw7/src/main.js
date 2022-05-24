import Vue from 'vue'
import App from './App.vue'
import contextMenu from './plugins/ContextMenu'

Vue.config.productionTip = false
Vue.use(contextMenu)


new Vue({
  render: h => h(App),
}).$mount('#app')
