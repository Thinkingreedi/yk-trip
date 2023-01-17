import { defineStore } from "pinia";

export const useLoadingStore = defineStore("loadingStore", {
  state: () => {
    return {
      showLoading: false,
    };
  },
  getters: {
    isLoading: (state) => state.showLoading,
  },
  actions: {
    changeLoading(isLoading) {
      this.showLoading = !!isLoading;
    },
    toggleLoading() {
      this.showLoading = isLoading;
    },
  },
});
