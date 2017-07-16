<template>
    <div id="app" class="page">
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

    export default {
        components: {
            'layout-footer': Footer,
        },
        name: 'app'
    }
</script>
