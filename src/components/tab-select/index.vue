<template>
  <div class="tab-select">
    <!-- {{ itemsData }} -->
    <template v-for="(item, index) in hotFilters" :key="index">
      <van-dropdown-menu
        v-if="item.subFilterItems && item.subFilterItems.length"
      >
        <van-dropdown-item :title="item.label" :ref="dropdownItemRefs">
          <div class="drow-content">
            <tab-select-item
              class="d-item"
              borderColor="#979797"
              borderActiveColor="#ff9645"
              v-for="(subItem, indey) in item.subFilterItems"
              :active="subItem.isSelect"
              :title="subItem.label"
              @tag-click="handleSubTagClick(index, indey)"
            ></tab-select-item>
          </div>
          <view-house-btns
            class="bottom"
            @clear="handleClearClick(item.label)"
            @view-click="handleViewClick(item.label)"
          ></view-house-btns>
        </van-dropdown-item>
      </van-dropdown-menu>

      <tab-select-item
        v-else
        :title="item.label"
        :active="item.isSelect"
        border-width="0px"
        @tag-click="handleTagClick(item, index)"
      ></tab-select-item>
    </template>
  </div>
</template>

<script setup>
import { ref, watch } from "vue";
import TabSelectItem from "../tab-select-item/index.vue";
import ViewHouseBtns from "../view-house-btns/index.vue";
// 定义属性
const props = defineProps({
  itemsData: {
    type: Array,
    default: () => [],
  },
});

// 定义变量
const dropdownItemRef = {};
const hotFilters = ref([]);

const value1 = ref(0);
const option1 = [
  { text: "全部商品", value: 0 },
  { text: "新款商品", value: 1 },
  { text: "活动商品", value: 2 },
];

watch(
  () => props.itemsData,
  (newValue, oldValue) => {
    hotFilters.value = newValue;
  }
);

const dropdownItemRefs = (el) => {
  if (el) {
    dropdownItemRef[el.title] = el;
  }
};
// 事件
const handleClearClick = (label) => {
  dropdownItemRef[label]?.toggle();
};
const handleViewClick = (label) => {
  dropdownItemRef[label]?.toggle();
};
const handleTagClick = (item, index) => {
  hotFilters.value.forEach((hotInfo, i) => {
    hotInfo.isSelect = i === index;
  });
};
const handleSubTagClick = (index, indey) => {
  // 一级菜单
  hotFilters.value.forEach((hotInfo, i) => {
    if (i === index) {
      const subFilterItem = hotInfo.subFilterItems || [];
      // 二级菜单
      subFilterItem.forEach((item, j) => {
        item.isSelect = j === indey;
      });
    }
  });
};
</script>

<style scoped lang="less">
.btn-style {
  height: 25px;
  line-height: 25px;
  border-radius: 13px;
  border: 1px solid rgba(0, 0, 0, 0);
  padding: 0 3px;
  background-color: white;
}
:global(.tab-select .van-dropdown-menu) {
  display: inline-block;
}
:global(.tab-select .van-dropdown-menu .van-dropdown-item--down) {
  top: 140px !important;
}
:global(.tab-select .van-dropdown-menu .van-dropdown-item__content) {
  // background-color: #f7f8fb;
  background-color: white;
  padding-top: 0px;
}
:global(.tab-select .van-dropdown-menu .van-dropdown-menu__bar) {
  .btn-style();
  box-shadow: none;
}
:global(.tab-select .van-dropdown-menu__title) {
  padding-right: 20px;
  font-size: 12px;
  color: #666;
}
:global(.tab-select .van-dropdown-menu__title::after) {
  right: 8px;
}

.tab-select {
  height: 29px;
  // 水平滚动
  white-space: nowrap;
  overflow-x: scroll;
  overflow-y: hidden;
  &::-webkit-scrollbar {
    display: none;
    width: 0;
  }

  .drow-content {
    margin-top: 12px;
    margin-left: 10px;
    display: flex;
    flex-wrap: wrap;
    .d-item {
      margin-bottom: 10px;
    }
  }
}
</style>
