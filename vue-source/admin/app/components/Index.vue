<template>
    <el-alert
            title="成功提示的文案"
            type="success">
    </el-alert>
    <el-alert
            title="消息提示的文案"
            type="info">
    </el-alert>
    <el-alert
            title="警告提示的文案"
            type="warning">
    </el-alert>
    <el-alert
            title="错误提示的文案"
            type="error">
    </el-alert>
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
//                login_type: true,
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