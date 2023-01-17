import hyRequest from '../request'
// 获取城市所有数据
export function getCityAll() {
  return hyRequest.get({
    url: "/city/all"
  })
}
