import { defineStore } from "pinia";
import localCache from "@/utils/cache";
const CACHE_SERACH_HISTORY = "CACHE_SERACH_HISTORY";
export const useSearchStore = defineStore("searchStore", {
  state: () => {
    return {
      searchHistorys: [],
    };
  },
  getters: {
    getSearchHistorys: (state) => {
      let historys = state.searchHistorys || [];
      if (historys.length) {
        // 本地读取
        historys = localCache.getCache(CACHE_SERACH_HISTORY) || [];
      }
      historys = historys.reverse();
      return historys.map((item) => {
        return {
          itemType: "搜索历史",
          name: item,
        };
      });
    },
  },
  actions: {
    addSearchHistory(keyWorld) {
      if (!this.searchHistorys.includes(keyWorld)) {
        this.searchHistorys.push(keyWorld);
      }
      // 只缓存10个历史记录
      let len = this.searchHistorys.length;
      if (len >= 10) {
        this.searchHistorys = this.searchHistorys.slice(len - 10, len);
      }
      // 本地读取
      localCache.setCache(CACHE_SERACH_HISTORY, this.searchHistorys);
    },
    initSearchHistory() {
      this.searchHistorys = localCache.getCache(CACHE_SERACH_HISTORY) || [];
    },
    clearSearchHistory() {
      this.searchHistorys = [];
      localCache.deleteCache(CACHE_SERACH_HISTORY);
    },
  },
});
