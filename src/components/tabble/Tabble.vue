<template>
    <div class="tabble">
        <van-tabbar v-model="active">
            <router-link to="/home" class="van-tabbar-item">
                <van-tabbar-item icon="home-o">首页</van-tabbar-item>
            </router-link>
            <router-link to="/classify" class="van-tabbar-item">
                <van-tabbar-item icon="apps-o">分类</van-tabbar-item>
            </router-link>
            <router-link to="/shopping" class="van-tabbar-item">
                <van-tabbar-item icon="cart-o">购物车</van-tabbar-item>
            </router-link>
            <router-link to="/mine" class="van-tabbar-item">
                <van-tabbar-item icon="friends-o">个人</van-tabbar-item>
            </router-link>

        </van-tabbar>
    </div>
</template>

<script>
    export default {
        name: "Tabble",
        data() {
            return {
                active: 0,
            };
        },
    }
</script>

<style scoped lang="less">

</style>