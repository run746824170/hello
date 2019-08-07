<template>
    <div>
        <h2>注册组件</h2>
        <router-link to="/register/user1">普通注册</router-link>
        <router-link to="/register/user2">Vip注册</router-link>
        <router-view></router-view>

        <mt-button type="default">default</mt-button>
        <mt-button type="primary">primary</mt-button>
        <mt-button plain>plain</mt-button>

        <mt-button icon="back">back</mt-button>
        <mt-button icon="more">更多</mt-button>


        <mt-navbar >
            <mt-tab-item id="1">选项一</mt-tab-item>
            <mt-tab-item id="2">选项二</mt-tab-item>
            <mt-tab-item id="3">选项三</mt-tab-item>
        </mt-navbar>
    </div>
</template>

<script>
    export default {
        name: "register",
        methods:{}
    }
</script>

<style scoped>
    h2{
        color: red;
    }
</style>