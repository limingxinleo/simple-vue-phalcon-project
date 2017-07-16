<template>
    <div id="app">
        <layout-login v-on:loginState="changeLoginState" v-if="!loginState"></layout-login>
        <div v-else>
            <layout-header></layout-header>
            <el-row class="tac">
                <el-col :span="4">
                    <layout-sidebar></layout-sidebar>
                </el-col>
                <el-col :span="20">
                    <div class="container">
                        <router-view></router-view>
                    </div>
                </el-col>
            </el-row>
        </div>
    </div>
</template>
<script>
    import Header from './app/components/layout/Header.vue';
    import SideBar from './app/components/layout/SideBar.vue';
    import Login from './app/components/layout/Login.vue';
    import './common/css/style.css';
    export default {
        data () {
            return {
                loginState: false,
            }
        },
        components: {
            'layout-header': Header,
            'layout-sidebar': SideBar,
            'layout-login': Login,
        },
        name: 'app',
        methods: {
            changeLoginState: function (data) {
                console.log(data);
                var username = data[0];
                var password = data[1];
                this.loginState = true;
            },
        },
    }
</script>
