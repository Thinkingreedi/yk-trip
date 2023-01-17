<template>
  <div class="notFound">
    <h2>Not Found: {{ $route.params.pathMatch }}</h2>
    <van-button type="primary" @click="onBack">返回上一页</van-button>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router';

const router = useRouter()
const onBack = () => router.go(-1)

</script>

<style lang="less" scoped>
.notFound {
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  button {
    margin-top: 10px;
  }
}
</style>