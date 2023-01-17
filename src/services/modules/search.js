import myRequest from "../request";

export function getSearchConditions() {
  return myRequest.get({
    url: "/search/top",
  });
}
export function getSearchHouse() {
  return myRequest.get({
    url: "/search/result",
  });
}

// 测试用的配置，需要在vite.config.js中配置代理
const TSET_URL = "http://localhost:5173/api";
const _apitsp = "1657957399020";
const _fasTraceId = "1657957399023KiYJenCT_6Th0R8QmkS3QDMD3wNhFaJsfn97x";

// 发起网络请求
export function getGuessulike() {
  return myRequest.post({
    url:
      TSET_URL +
      `/bnbapp-node-h5/h5/suggest/guessulike/bnb?_apitsp=${_apitsp}&_fasTraceId=${_fasTraceId}
    `,
    method: "post",
    data: { cityId: 45, keywordTryRecommend: 2 },
  });
}

export function keywordsearchsuggest(keyword) {
  return myRequest.post({
    url:
      TSET_URL +
      `/bnbapp-node-h5/h5/keyword/keywordsearchsuggest/bnb?_apitsp=${_apitsp}&_fasTraceId=${_fasTraceId}
    `,
    method: "post",
    data: {
      cityId: 45, // 城市 id
      keyword, // 搜索的关键字
      sourceCode: 702, // 源代码
    },
  });
}
