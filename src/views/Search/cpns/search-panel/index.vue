<template>
  <div class="search-panel">
    <van-search
      v-model="value"
      show-action
      shape="round"
      placeholder="搜索广州的景点、地标、房源"
      @search="onSearch"
      @cancel="onCancel"
    />
    <div v-if="searchsuggest.length" class="search-result-panel">
      <template v-for="(item, index) in searchsuggest" :key="index">
        <search-result-item
          :key-word="value"
          :name="item.name"
          :type-name="item.itemTypeName"
          :description="item.description"
          :unitPrice="item.unitPrice"
          @item-click="handleResultItemClick"
        />
      </template>
    </div>
    <div v-else class="search-category-panel">
      <search-category
        title="搜索历史"
        :itemDatas="searchStore.getSearchHistorys"
        itemType="pink"
        @tag-click="handleTagClick($event, item)"
      >
        <template #more>
          <div class="clear" @click="handleClearSearchHistory">
            <span class="name">清空</span>
            <i class="icon-delete"></i>
          </div>
        </template>
      </search-category>
      <template v-for="(item, index) in searchPanelDatas" :key="index">
        <search-category
          v-if="item.suggests"
          :title="item.name"
          :itemDatas="item.suggests"
          :itemType="index === 0 ? 'pink' : 'gray'"
          @tag-click="handleTagClick($event, item)"
        ></search-category>
      </template>
    </div>
  </div>
</template>

<script setup>
import { ref, watch } from "vue";
import SearchCategory from "../search-category/index.vue";
import { keywordsearchsuggest } from "@/services";
import SearchResultItem from "../search-result-item/index.vue";
import { debounce } from "@/utils/common.js";
import { useSearchStore } from "@/stores/index";
const value = ref("");
const searchsuggest = ref([]);
// const loadingStore = useLoadingStore();
const searchStore = useSearchStore();
const props = defineProps({
  searchPanelDatas: {
    type: Array,
    default: () => [],
  },
});

searchStore.initSearchHistory();
// 今天搜索框的输入
watch(
  value,
  debounce((newValue, oldValue) => {
    if (!newValue.trim()) {
      return;
    }
    // 缓存到历史记录中
    searchStore.addSearchHistory(newValue);

    // loadingStore.changeLoading(true); // 显示加载
    keywordsearchsuggest(newValue)
      .then((res) => {
        searchsuggest.value = res.data.suggests || [];
      })
      .finally(() => {
        // loadingStore.changeLoading(false); // 隐藏加载
      });
  })
);

const emit = defineEmits(["cancel", "search", "tagClick", "resultItemClick"]);

const onSearch = (val) => {
  emit("search", val);
};
const onCancel = () => {
  emit("cancel");
};
const handleTagClick = (subItem, item) => {
  emit("tagClick", { typeName: item.name, keyWord: subItem.name });
};
const handleResultItemClick = (item) => {
  emit("resultItemClick", item);
};
const handleClearSearchHistory = () => {
  searchStore.clearSearchHistory();
};
</script>

<style scoped lang="less">
// 重写Vant样式
:global(.search-panel .van-search--show-action) {
  padding-left: 0px;
}
.search-panel :deep(.van-search) {
  .van-field__left-icon .van-icon-search {
    font-size: 25px;
  }
  .van-field__control::placeholder {
    font-size: 13px;
    color: #ccc !important;
  }
}

.search-panel {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 100;
  padding: 0px 20px;
  background-color: white;
}

.search-category-panel {
  overflow-y: scroll;
  padding-top: 30px;
  height: calc(100% - 100px);
  &::-webkit-scrollbar {
    display: none;
    width: 0;
  }

  .clear {
    .name {
      font-size: 12px;
      color: #333;
      padding-right: 4px;
    }
    .icon-delete {
      position: relative;
      top: 1px;
      display: inline-block;
      background-image: url(@/assets/img/home/home-sprite.png);
      background-size: 207px 192px;
      background-position: -150px -133px;
      width: 11px;
      height: 11px;
    }
  }
}
</style>
