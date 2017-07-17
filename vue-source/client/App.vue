<template>
    <div id="app">
        <div class="weui-tab">
            <div class="weui-tab__panel">
                <router-view></router-view>
            </div>
            <layout-footer></layout-footer>
        </div>
    </div>
</template>
<script>
    import Footer from './app/components/layout/Footer.vue';
    import './common/css/style.css';

    export default {
        components: {
            'layout-footer': Footer,
        },
        name: 'app'
    }
</script>
