<template>
    <div class="app">
        <!-- 匹配name属性 -->
        <router-view v-slot="props">
            <keep-alive include="home">
                <component :is="props.Component"></component>
            </keep-alive>
        </router-view>
        <!-- <TabBar/> -->
        <!-- tabbar的显示与隐藏方式一 -->
        <TabBar v-show="!route.meta.hideTabBar" />
        <Loading />
    </div>
</template>

<script setup>
import TabBar from  '@/components/tabbar/tabbar.vue'
import Loading from '@/components/loading/loading.vue'
import { useRoute } from 'vue-router';
const route = useRoute()
</script>

<style lang="less" scoped>

</style>
