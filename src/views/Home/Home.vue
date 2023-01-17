<template>
  <div class="home" ref="homeRef">
    <!-- 导航栏 -->
    <HomeNavBar />
    <!-- 轮播图 -->
    <HomeSwipe />
    <!-- 搜索 -->
    <HomeSearchBox />
    <HomeCategories />
    <div class="search-bar" v-if="isShowSearchBar">
      <SearchBar :start-date="'09.21'" :end-date="'09.22'" />
    </div>
    <!-- 列表数据 -->
    <HomeContent />
    <!-- <button @click="moreBtnClick">加载更多</button> -->
  </div>
</template>
<script>
export default {
  name: 'home'
}
</script>
<script setup>
import { ref, watch, computed, onActivated } from 'vue'
import HomeNavBar from './cpns/home-nav-bar.vue'
import HomeSwipe from './cpns/home-swipe.vue'
import HomeSearchBox from './cpns/home-search-box.vue'
import HomeCategories from './cpns/home-categories.vue'
import HomeContent from './cpns/home-content.vue'
import useHomeStore from "@/stores/modules/home"
import useScroll from '@/hooks/useScroll'
import SearchBar from '@/components/search-bar/search-bar.vue'
// 发送网络请求
const homeStore = useHomeStore()
homeStore.fetchHotSuggestData()
homeStore.fetchCategoriesData()
homeStore.fetchHouseListData()
// 模拟加载更多
// const moreBtnClick = () =>{
//     console.log('加载更多');
//     homeStore.fetchHouseListData()
// }
// useScroll(()=>{
//     homeStore.fetchHouseListData()
// })
// 监听滚动到底部
// 监听达到底部
// 监听滚动到底部
const homeRef = ref()
const { isReachBottom, scrollTop } = useScroll(homeRef)
watch(isReachBottom, (newValue) => {
  if (newValue) {
    homeStore.fetchHouseListData().then(() => {
      isReachBottom.value = false
    })
  }
})
// 监听页面的滚动
// 加载更多
// 搜索框显示控制
// const isShowSearchBar = ref(false)
// watch(scrollTop,(newTop)=>{
//     isShowSearchBar.value = newTop>100
// })
const isShowSearchBar = computed(() => {
  return scrollTop.value >= 350
})
// 跳转回home时, 保留原来的位置
onActivated(() => {
  homeRef.value?.scrollTo({
    top: scrollTop.value
  })
})
</script>

<style lang="less" scoped>
.home {
  padding-bottom: 60px;
  height: 100vh;
  overflow-y: auto;
  box-sizing: border-box;
}

.search-bar {
  position: fixed;
  z-index: 9;
  top: 0;
  left: 0;
  right: 0;
  height: 45px;
  padding: 16px 16px 10px;
  background-color: #fff;
}
</style>