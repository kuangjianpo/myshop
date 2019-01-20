<template>
    <!-- 搜索框 -->
    <div class="search-wrap">
      <div class="search">
        <icon
          type="search"
          size="14"
        />搜索
      </div>
    </div>
</template>

<script>
export default {
    data() {
        return {

        }
    }
}
</script>

<style lang="scss" scoped>
.search-wrap{
    width: 100%;
    box-sizing: border-box;
    background-color: #ff4d2a;
    padding: 20rpx;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 998;
    .search{
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: #fff;
        font-size: 15px;
        color: #999;
        height: 60rpx;
        width: 100%;
        border-radius: 10rpx;
        icon{
            margin-right: 5px;
        }
    }
}
</style>

