import myRequest from '../request'
// 获取城市所有数据
export function getCityAll() {
  return myRequest.get({
    url: "/city/all"
  })
}
