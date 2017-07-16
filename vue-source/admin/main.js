import Vue from 'vue'
import App from './App.vue'
import router from './app/router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'

Vue.use(ElementUI);

new Vue({
    el: '#app',
    router,
    // template: '<App/>',
    // components: {App},
    render: h => h(App)
})
