<!-- 右侧头像 爱心 评论组件 -->
<template>
  <div class="tool-bar">
    <img class="avatar" :src="itemData.logoUrl" alt="" />
    <div class="collection">
      <img
        class="heart-img"
        src="../../assets/img/search/tj-mob-ui_unit-item_collected-new.png"
        alt=""
      />
      <span v-if="itemData.favoriteCount">{{ itemData.favoriteCount }}</span>
    </div>
    <div class="message">
      <img
        class="msg-img"
        src="../../assets/img/search/tj-mob-ui_unit-item_comment-new.png"
        alt=""
      />
      <span>{{ itemData.totalCount }}</span>
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
.tool-bar {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.avatar {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-top: 5px;
}
.message,
.collection {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 10px;
  .msg-img,
  .heart-img {
    width: 30px;
    height: 30px;
  }
  span {
    color: white;
  }
}
</style>
