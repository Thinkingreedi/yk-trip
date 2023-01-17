<template>
  <div class="tab-bar">
    <van-tabbar v-model="currentIndex" active-color="#ff9854" route>
      <template v-for="(item, index) in tabbarData" :key="index" >
        <!-- 路由切换 -->
        <van-tabbar-item :to="item.path">
          <span>{{item.text}}</span>
          <template #icon>
            <img v-if="currentIndex !== index" :src="getAssetURL(item.image)" alt="" srcset="">
            <img v-else :src="getAssetURL(item.imageActive)" alt="" srcset="">
          </template>
        </van-tabbar-item>
      </template>
    </van-tabbar>
  </div>
</template>

<script setup>
import tabbarData from '@/assets/data/tabbar.js'
import {getAssetURL} from '@/utils/load_assets.js'
import { ref,watch } from 'vue';
import { useRoute} from 'vue-router'
const route = useRoute()
const currentIndex = ref(0)
watch(route,(newRoute)=>{
  const index = tabbarData.findIndex(item=>item.path === newRoute.path)
  if(index === -1) return
  currentIndex.value = index
})
</script>

<style lang="less" scoped>
.tab-bar{
  // 1.局部修改vant里面tabbar样式
  // --van-tabbar-item-icon-size: 30px!important;
  //2. 对类中css属性进行修改
  :deep(.van-tabbar-item_icon){
    font-size: 27px;
  }
 img{
  height: 32px;
 }
}
</style>