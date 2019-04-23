import Vue from 'vue'
import App from './App.vue'
import { Button, Popup, Icon, Toast } from 'vant'
import 'vant/lib/button/style'
import 'vant/lib/toast/style'

Vue.config.productionTip = false
Vue.use(Button).use(Popup).use(Icon).use(Toast)
new Vue({
  render: h => h(App),
}).$mount('#app')
