<template>
    <div class="message">
        <nav-bar title="消息中心"></nav-bar>
        <div class="content">
            <img src="@/assets/img/message/icon_message.png" alt="">
            <div class="text">暂无聊天消息</div>
        </div>
    </div>
</template>
  
<script setup>
import NavBar from "@/components/nav-bar/index.vue"

</script>
  
<style lang="less" scoped>
.content {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 100px;

    img {
        width: 88%;
    }
}
</style>