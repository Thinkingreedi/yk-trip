import { getHomeHotSuggests,getHomeCategories,getHomeHouseList } from "@/services";
import { defineStore } from "pinia";

const useHomeStore = defineStore("home", {
  state: () => ({
    hotSuggests: [],
    categories: [],
    currentPage: 1,
    houselist: []
  }),
  actions: {
    async fetchHotSuggestData() {
      const res = await getHomeHotSuggests()
      this.hotSuggests = res.data
    },
    async fetchCategoriesData(){
      const res =await getHomeCategories()
      this.categories = res.data
    },
    async fetchHouseListData(){
      const res = await getHomeHouseList(this.currentPage)
      this.houselist.push(...res.data)
      this.currentPage++
    }
  }
})

export default useHomeStore

