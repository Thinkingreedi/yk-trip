<template>
  <div class="search-list-item">
    <div class="swiper-wrapper">
      <!-- 轮播图 -->
      <img class="banner" :src="houseData.defaultPicture" />
      <!-- 分页器 -->
      <div class="bottom">
        <msg-tip :item-data="houseData.commentBriefForCD"></msg-tip>
      </div>
      <!-- 侧边栏 -->
      <div class="side-bar">
        <tool-bar :item-data="getToolBarData"></tool-bar>
      </div>
    </div>
    <div class="content">
      <search-list-item-title
        :item-data="getTitleData"
      ></search-list-item-title>
      <search-list-item-info :item-data="getInfoData"></search-list-item-info>
    </div>
  </div>
</template>

<script setup>
import { ref, watch, computed } from "vue";
import MsgTip from "../msg-tip/index.vue";
import ToolBar from "../tool-bar/index.vue";
import SearchListItemTitle from "../search-list-item-title/index.vue";
import SearchListItemInfo from "../search-list-item-info/index.vue";

const props = defineProps({
  itemData: {
    type: Object,
    default: () => {},
  },
});

const houseData = ref({});
watch(
  () => props.itemData,
  (newValue, oldValue) => {
    houseData.value = newValue;
  },
  {
    immediate: true,
  }
);

const getTitleData = computed(() => {
  let data = houseData.value;
  return {
    address: data.address,
    unit: data.unitSummeries[0]?.text,
    unitDesp: data.unitSummeries[1]?.text,
    unitName: data.unitName,
  };
});
const getInfoData = computed(() => {
  let data = houseData.value;
  return {
    houseTags: data.houseTags,
    promoContent: data.promoContent,
    finalPrice: data.finalPrice,
    productPrice: data.productPrice,
    priceTipBadge: data.priceTipBadge,
  };
});

const getToolBarData = computed(() => {
  let data = houseData.value;

  let favoriteCount = 0;
  let totalCount = 0;
  if (data.preloadHouse) {
    favoriteCount = data.preloadHouse.favoriteCount;
    totalCount = data.preloadHouse.totalCount;
  } else {
    totalCount = data.commentBriefForCD.totalCount;
  }
  return {
    logoUrl: data.logoUrl,
    favoriteCount,
    totalCount,
  };
});
</script>

<style scoped lang="less">
.search-list-item {
  margin: 10px 0px;
}
.swiper-wrapper {
  position: relative;
  .banner {
    width: 100%;
    border-radius: 6px;
    margin-bottom: 7px;
  }
  .bottom {
    position: absolute;
    bottom: 15px;
    left: 10px;
    right: 10px;
  }
  .side-bar {
    position: absolute;
    top: 10px;
    right: 10px;
  }
}
</style>
