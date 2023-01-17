<!--会员优惠标签和 优惠价格组件-->
<template>
  <div class="search-list-item-info">
    <div class="tags">
      <template v-for="(item, index) in itemData.houseTags" :key="index">
        <van-tag :color="item.background.color" :text-color="item.color">{{
          item.text
        }}</van-tag>
      </template>
    </div>

    <div class="price">
      <span class="real-price">{{ itemData.finalPrice }}</span>
      <span class="old-price">¥{{ itemData.productPrice }}</span>
      <van-tag
        v-if="itemData.priceTipBadge"
        round
        color="rgb(251, 74, 74)"
        text-color="#fff"
      >
        <i class="icon-unit-sound"></i>
        {{ itemData.priceTipBadge.text }}
      </van-tag>
    </div>
    <div v-if="itemData.promoContent" class="footer">
      <van-tag round color="transparent" text-color="#f66">{{
        itemData.promoContent
      }}</van-tag>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  itemData: {
    type: Object,
    default: () => {},
  },
});
</script>

<style scoped lang="less">
.search-list-item-info {
  margin-top: 7px;
  .tags :deep(.van-tag) {
    margin-right: 6px;
  }

  .price {
    margin-top: 3px;
    margin-bottom: 7px;
    .real-price {
      position: relative;
      top: 1px;
      color: #ff9645;
      font-size: 20px;
      padding-right: 10px;
      padding-left: 1px;
      &::before {
        content: "¥";
        bottom: 0;
        font-size: 14px;
        padding-right: 3px;
      }
    }

    .old-price {
      font-weight: 500;
      font-size: 12px;
      color: #999;
      text-decoration: line-through;
      padding-right: 5px;
    }

    .icon-unit-sound {
      margin-right: 5px;
      display: inline-block;
      width: 10px;
      height: 10px;
      background-image: url(https://fe.tujiacdn.com/pwa/static/fevueui/images/unit-item-m/icon-unit-sound.png);
      background-size: 10px 10px;
      background-repeat: no-repeat;
      background-position: 50%;
    }
  }

  .price :deep(.van-tag) {
    position: relative;
    font-size: 12px;
    transform: scale(0.9);
  }
}
</style>
