<template>
  <div class="search-result-item" @click="handleItemClick">
    <div class="left">
      <div class="name ellipsis-text-1" v-html="hightLigthWord"></div>
      <!-- 'Y' + unitPrice + | +  description -->
      <span class="desp">
        <span v-if="unitPrice" class="active">
          ¥ {{ unitPrice }}
          <span v-if="description"> | </span>
        </span>
        <span>{{ description }}</span>
      </span>
    </div>
    <div class="right">{{ typeName }}</div>
  </div>
</template>

<script setup>
import { computed } from "vue";
const props = defineProps({
  keyWord: {
    type: String,
    default: "",
  },
  name: {
    type: String,
    default: "",
  },
  description: {
    type: String,
    default: "",
  },
  typeName: {
    type: String,
    default: "",
  },
  unitPrice: {
    type: Number,
    default: 0,
  },
});

const hightLigthWord = computed(() => {
  let result = props.name;
  if (result) {
    result = result.replace(new RegExp(props.keyWord, "ig"), (a) => {
      return `<font style="color: #ff9645">${props.keyWord}</font>`;
    });
  }
  return result;
});

const emit = defineEmits(["itemClick"]);
const handleItemClick = () => {
  emit("itemClick", { name: props.name, typeName: props.typeName });
};
</script>

<style scoped lang="less">
.search-result-item {
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-height: 70px;
  // font-family: PingFangSC-Medium;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    border-top: 0 solid #e9e9e9;
    border-right: 0 solid #e9e9e9;
    border-bottom: 1px solid #e9e9e9;
    border-left: 0 solid #e9e9e9;
    box-sizing: border-box;
    width: 200%;
    height: 200%;
    transform: scale(0.5);
    transform-origin: left top;
    border-radius: 0;
    pointer-events: none;
  }
  .active {
    color: var(--primary-color);
    span {
      color: #999;
    }
  }
  .left {
    .name {
      height: 16px;
      line-height: 16px;
      font-size: 13px;
      color: #333;
      max-width: 250px;
      margin-right: 5px;
      padding-bottom: 3px;
    }

    .desp {
      font-size: 12px;
      color: #999;
    }
  }

  .right {
    font-family: PingFangSC-Regular;
    font-size: 13px;
    color: #666;
  }
}
</style>
