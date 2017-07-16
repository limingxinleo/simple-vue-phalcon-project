import Vue from 'vue'
import App from './App.vue'
import router from './app/router'

import 'weui/dist/style/weui.css'
new Vue({
    el: '#app',
    router,
    // template: '<App/>',
    // components: {App},
    render: h => h(App)
})
