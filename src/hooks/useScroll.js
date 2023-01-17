import { onMounted, onUnmounted, ref } from 'vue'
// 引入节流函数
import { throttle } from 'underscore'
export default function useScroll(elRef) {
  let el = window
  const isReachBotton = ref(false)
  const scrollTop = ref(0)
  const clientHeight = ref(0)
  const scrollHeight = ref(0)

  // 监听window窗口的滚动
  // 离开页面，移除监听
  // 代码复用
  const scrollListenerHandler = throttle(() => {
    if (el === window) {
      clientHeight.value = document.documentElement.clientHeight
      scrollTop.value = +document.documentElement.scrollTop.toFixed()
      scrollHeight.value = document.documentElement.scrollHeight
    } else {
      clientHeight.value = el.clientHeight
      scrollTop.value = +el.scrollTop.toFixed()
      scrollHeight.value = el.scrollHeight
    }

    //console.log(clientHeight,scrollTop,scrollHeight);
    if (clientHeight.value + scrollTop.value >= scrollHeight.value) {
      isReachBotton.value = true
    }
  }, 100)
  onMounted(() => {
    if (elRef) el = elRef.value
    el.addEventListener('scroll', scrollListenerHandler)
  })
  onUnmounted(() => {
    el.removeEventListener('scroll', scrollListenerHandler)
  })
  return { isReachBotton, clientHeight, scrollTop, scrollHeight }
}
