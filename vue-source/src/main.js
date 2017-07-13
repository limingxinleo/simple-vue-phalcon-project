import Vue from 'vue';
import App from './App.vue';
import router from './app/router';
import MintUI from 'mint-ui';
import 'mint-ui/lib/style.css';

Vue.use(MintUI);

new Vue({
    el: '#app',
    router,
    // template: '<App/>',
    // components: {App},
    render: h => h(App)
});
