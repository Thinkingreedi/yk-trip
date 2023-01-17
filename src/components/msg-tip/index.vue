<!-- 收藏图片框内的评分组件 -->
<template>
  <div class="msg-tip">
    <strong v-if="itemData.overall" class="score"
      >{{ itemData.overall }}分</strong
    >
    <span class="answer">{{ itemData.commentBrief }}</span>
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
.msg-tip {
  display: inline-flex;
  justify-content: center;
  align-items: center;
  max-width: 55%;

  height: 17px;
  padding-left: 6px;
  border-radius: 10px;
  background-color: hsla(0, 0%, 100%, 0.9);

  .score {
    font-size: 14px;
    transform: scale(0.8);
    transform-origin: 0 center;
    color: #333;
  }
  .answer {
    position: relative;
    font-size: 12px;
    transform: scale(0.8);
    transform-origin: 0 center;
    margin-left: -2px;
    padding-left: 5px;
    color: #666;
    &::before {
      content: " ";
      left: 0;
      top: 2px;
      position: absolute;
      height: 10px;
      width: 1px;
      background-color: #dadada;
    }
  }
}
</style>
