<template>
    <div id="index">
    </div>
</template>


<script>
    import Vue from 'vue';
    import Api from '../../common/js/api';
    export default {
        name: 'index',
        data () {
            return {
                msg: 'Welcome to Simple Vue Phalcon App',
                version: '',
            }
        },
        mounted: function () {
            var that = this;
            Api.post('/index/version', {key: 'val'}).then(res => {
                console.log(res);
                that.version = res.data.iv;
            });
        }
    }
</script>
