<template>
  <div class="order-item-title">
    <div class="name ellipsis-text-1">
      {{ itemData.unitName }}
    </div>
    <div class="status-name" :style="{ color: itemData.orderStatusDescColor }">
      {{ itemData.orderStatusDesc }}
      <span class="sub-name"> {{ itemData.cancelReasonDesc }}</span>
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

<style lang="less" scoped>
.order-item-title {
  padding: 20px 0px;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  .name {
    max-width: 204px;
    font-size: 12px;
    color: #333;
    line-height: 12px;
  }
  .status-name {
    font-size: 18px;
    color: #ff9645;
    letter-spacing: 0;
  }

  .sub-name {
    position: relative;
    left: -5px;
    font-size: 12px;
    color: #b2b2b2;
  }
}
</style>
