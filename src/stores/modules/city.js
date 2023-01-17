import { getCityAll } from '@/services'
import { defineStore} from 'pinia'

const useCityStore = defineStore('city',{
  state: ()=>({
    allCities: {},
    currentCity: {cityName: '广州'}
  }),
  actions: {
    // 发送网络请求，请求城市数据
    async fetchAllCityData(){
      const res = await getCityAll()
      this.allCities = res.data
    }
  }
})
export default useCityStore