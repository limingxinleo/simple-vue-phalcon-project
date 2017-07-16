<template>
    <el-menu theme="dark" :default-active="activeIndex" class="el-menu-demo" mode="horizontal"
             @select="handleSelect">
        <el-menu-item index="1">处理中心</el-menu-item>
        <el-submenu index="2">
            <template slot="title">我的工作台</template>
            <el-menu-item index="2-1">选项1</el-menu-item>
            <el-menu-item index="2-2">选项2</el-menu-item>
            <el-menu-item index="2-3">选项3</el-menu-item>
        </el-submenu>
        <el-menu-item index="3"><a href="https://www.ele.me" target="_blank">订单管理</a></el-menu-item>
    </el-menu>
</template>
<script>
    export default {
        name: 'layout-header',
        data () {
            return {};
        },
        mounted: function () {
            console.log('Header mounted!');
        }
    }
</script>