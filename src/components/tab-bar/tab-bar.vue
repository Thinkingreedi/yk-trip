<template>
    <div class="tab-bar">
        <template v-for="(item, index) in tabbarData">
            <div class="tab-bar-item" :class="{ active: curIndex == index }" @click="itemClick(index, item)">
                <img :src="getAssetUrl(curIndex == index ? item.imageActive : item.image)" alt="">
                <span class="text">{{ item.text }}</span>
            </div>
        </template>
    </div>
</template>

<script setup>
import tabbarData from "@/assets/data/tabbar.js";
import { getAssetUrl } from "@/utils/loadAssets.js";
import { ref } from "vue"
import { useRouter } from "vue-router";

const router = useRouter()
const curIndex = ref(0)
const itemClick = (index, item) => {
    curIndex.value = index
    router.push(item.path)
}
</script>

<style lang="less" scoped>
.tab-bar {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    height: 50px;
    display: flex;

    border-top: 1px solid #f3f3f3;

    .tab-bar-item {
        flex: 1;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        &.active {
            color: var(--theme-color);
        }

        img {
            width: 36px;
        }

        .text {
            font-size: 12px;
            margin-top: 2px;
        }
    }
}
</style>
