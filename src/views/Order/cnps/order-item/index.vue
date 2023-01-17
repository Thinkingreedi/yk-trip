<template>
  <div class="order-item">
    <order-item-title :item-data="getTitleData"></order-item-title>
    <order-item-info :item-data="getInfoData"></order-item-info>
    <order-item-btn :item-data="getFooterBtnData"></order-item-btn>
  </div>
</template>

<script setup>
import OrderItemTitle from "../order-item-title/index.vue";
import OrderItemInfo from "../order-item-info/index.vue";
import OrderItemBtn from "../order-item-btn/index.vue";
import { computed } from "vue";

const props = defineProps({
  itemData: {
    type: Object,
    default: () => {},
  },
});

const getTitleData = computed(() => {
  let data = props.itemData;
  return {
    unitName: data.unitName,
    orderStatusDesc: data.orderStatusDesc,
    cancelReasonDesc: data.cancelReasonDesc,
    orderStatus: data.orderStatus, // 1 待支付  0 取消
    orderStatusDescColor: data.orderStatusDescColor,
  };
});
const getInfoData = computed(() => {
  let data = props.itemData;
  return {
    checkInDate: data.checkInDate,
    checkOutDate: data.checkOutDate,
    checkInLatestTime: data.checkInLatestTime,
    checkOutLatestTime: data.checkOutLatestTime,
    prepayAmount: data.prepayAmount,
    unitPicture: data.unitPicture,
  };
});
const getFooterBtnData = computed(() => {
  let data = props.itemData;
  return {
    countdown: data.countdown, // 剩余支付秒
    orderStatusDesc: data.orderStatusDesc,
    orderStatus: data.orderStatus, // 1 待支付  0 取消
  };
});
</script>

<style lang="less" scoped>
.order-item {
  padding: 0 20px;
  margin-top: 10px;
  background-color: white;
  // padding-bottom: 50px;
}
</style>
