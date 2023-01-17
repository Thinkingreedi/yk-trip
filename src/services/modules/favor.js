import hyRequest from "../request";

/**
数据弄好了：
1.订单数据：
http://123.207.32.32:1888/api/order/list?type=pend
type=pend 未完成订单
type=recent 最近订单
type=all 全部订单

2.收藏数据：
http://123.207.32.32:1888/api/favor/list
http://123.207.32.32:1888/api/favor/history
3.搜索数据：
http://123.207.32.32:1888/api/search/top
http://123.207.32.32:1888/api/search/result

 */
export function getFavorList() {
  return hyRequest.get({
    url: "/favor/list",
  });
}
export function getHistoryList() {
  return hyRequest.get({
    url: "/favor/history",
  });
}
