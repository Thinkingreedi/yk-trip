<template>
  <div class="categories" @click="handleBtnClick">
    <template v-for="(item, index) in categories" :key="item.id">
      <div class="item">
        <img :src="item.pictureUrl" alt="" srcset="">
        <div class="text">{{ item.title }}</div>
      </div>
    </template>
  </div>
</template>

<script setup>
import useHomeStore from '@/stores/modules/home';
import { storeToRefs } from 'pinia';
const homeStore = useHomeStore()
const { categories } = storeToRefs(homeStore)

//跳转搜索页面
const handleBtnClick = () => {
  router.push('/search')
}
</script>

<style lang="less" scoped>
.categories {
  display: flex;
  overflow: auto;
  height: 80px;
  padding: 0 10px;
  margin-top: 8px;

  // css隐藏滚动条
  &::-webkit-scrollbar {
    display: none;
  }

  .item {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 70px;
    text-align: center;
    flex-shrink: 0;

    img {
      width: 32px;
      height: 32px;
    }

    .text {
      font-size: 12px;
      margin-top: 8px;
    }
  }
}
</style>