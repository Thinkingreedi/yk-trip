<template>
  <van-dropdown-menu>
    <template v-for="(item, index) in itemsData">
      <!-- 自定义 -->
      <van-dropdown-item
        v-if="item.gType === 2"
        title="位置"
        :ref="dropdownItemRefs"
      >
        <div class="dropdown-bar-panel-content">
          <side-bar
            class="top"
            :menuData="item.subGroups"
            @item-click="handleSideSubItemClick"
          ></side-bar>
          <view-house-btns
            class="bottom"
            @clear="handleClearClick('位置')"
            @view-click="handleViewClick('位置')"
          ></view-house-btns>
        </div>
      </van-dropdown-item>

      <van-dropdown-item
        v-if="item.gType === 4"
        v-model="value"
        :options="options"
      />

      <!-- 自定义 -->
      <van-dropdown-item
        v-if="item.gType === 1"
        title="筛选"
        :ref="dropdownItemRefs"
      >
        <div class="dropdown-bar-panel-content">
          <side-bar class="top" :menuData="item.subGroups">
            <template #content="slotProps">
              <p class="list-content">正在开发中....</p>
            </template>
          </side-bar>
          <view-house-btns
            class="bottom"
            @clear="handleClearClick('筛选')"
            @view-click="handleViewClick('筛选')"
          ></view-house-btns>
        </div>
      </van-dropdown-item>
    </template>
  </van-dropdown-menu>
</template>

<script setup>
import { ref } from "vue";
import SideBar from "../side-bar/index.vue";
import ViewHouseBtns from "../view-house-btns/index.vue";
const dropdownRefs = {};

defineProps({
  itemsData: {
    type: Array,
    default: () => [],
  },
});

// dropdown
const value = ref(0);
const options = [
  { text: "欢迎度排序", value: 0 },
  { text: "好评优先", value: 1 },
  { text: "点评数多->少", value: 2 },
  { text: "低价优先", value: 3 },
  { text: "高价优先", value: 4 },
];
const onConfirm = () => {
  item.value.toggle();
};

const dropdownItemRefs = (el) => {
  if (el) {
    dropdownRefs[el.title] = el;
  }
};
const handleClearClick = (title) => {
  dropdownRefs[title]?.toggle();
};
const handleViewClick = (title) => {
  dropdownRefs[title]?.toggle();
};
const handleSideSubItemClick = (item) => {
  console.log(item);
};
</script>

<style scoped lang="less">
@popupHeight: 500px;
// 重写Vant样式
:global(.van-dropdown-menu .van-popup .van-sidebar-item) {
  padding-left: 20px;
  padding-top: 14px;
  padding-bottom: 14px;
}
:global(.van-dropdown-menu .van-popup .van-sidebar-item::before) {
  border-radius: 50%;
  left: 8px;
}

:global(.van-dropdown-menu .van-dropdown-item__content) {
  overflow-y: hidden;
  max-height: 100%;
}

.dropdown-bar-panel-content {
  position: relative;
  height: @popupHeight;
  overflow: hidden;
  background-color: var(--van-sidebar-background-color);

  .bottom {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 100;
  }
}
</style>
