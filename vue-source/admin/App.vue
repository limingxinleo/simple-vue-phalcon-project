<template>
    <div id="app">
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
</template>
<script>
    import Header from './app/components/layout/Header.vue';
    import SideBar from './app/components/layout/SideBar.vue';
    import './common/css/style.css';
    export default {
        components: {
            'layout-header': Header,
            'layout-sidebar': SideBar,
        },
        name: 'app'
    }
</script>
