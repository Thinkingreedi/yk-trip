export const getAssetURL = (image) => {
  // new URL(url, import.meta.url)
  // 参数一: 相对路径
  // 参数二：当前模块(文件)所在路径
  // https://cn.vitejs.dev/guide/assets.html#new-url-url-import-meta-url
  // https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/import.meta
  return new URL(`../assets/img/${image}`, import.meta.url).href
}