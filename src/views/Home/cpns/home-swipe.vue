<template>
  <div class="swipe">
    <van-swipe class="my-swipe banner" :autoplay="3000" indicator-color="white">
      <van-swipe-item>
        <img src="@/assets/img/home/banner.jpg" alt="" srcset="" />
      </van-swipe-item>
      <van-swipe-item>
        <img src="@/assets/img/home/banner1.jpg" alt="" srcset="" />
      </van-swipe-item>
      <van-swipe-item>
        <img src="@/assets/img/home/banner2.jpg" alt="" srcset="" />
      </van-swipe-item>
      <van-swipe-item>
        <img src="@/assets/img/home/banner3.jpg" alt="" srcset="" />
      </van-swipe-item>
      <van-swipe-item>
        <img src="@/assets/img/home/banner4.jpg" alt="" srcset="" />
      </van-swipe-item>
    </van-swipe>
  </div>
</template>

<script setup>

</script>

<style lang="less" scoped>
.banner {
  img {
    height: 200px;
    width: 100%;
  }
}
</style>