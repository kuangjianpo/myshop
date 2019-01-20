<template>
  <div>
    <!-- 搜索栏 -->
    <search/>
    <!-- 视图区域 -->
    <div class="main">
      <scroll-view class="left" scroll-y>
        <div class="menu active">撒地方</div>
        <div class="menu">上打广告</div>
        <div class="menu">给对方</div>
        <div class="menu">按时</div>
        <div class="menu">地方好人</div>
        <div class="menu">说大狒狒</div>
        <div class="menu">交通费一</div>
      </scroll-view>
      <scroll-view class="right" scroll-y>
        <div class="title">
          <span>/</span>
          电视
          <span>/</span>
        </div>
        <div class="info">
          <div class="content">
            <img src="https://img.alicdn.com/imgextra/i2/1826865883/TB2fe3dmtnJ8KJjSszdXXaxuFXa_!!1826865883-0-beehive-scenes.jpg_180x180xzq90.jpg_.webp" mode=aspectFill>
            <p>曲面电视</p>
          </div>
          <div class="content">
            <img src="https://img.alicdn.com/imgextra/i2/1826865883/TB2fe3dmtnJ8KJjSszdXXaxuFXa_!!1826865883-0-beehive-scenes.jpg_180x180xzq90.jpg_.webp" mode=aspectFill>
            <p>曲面电视</p>
          </div>
          <div class="content">
            <img src="https://img.alicdn.com/imgextra/i2/1826865883/TB2fe3dmtnJ8KJjSszdXXaxuFXa_!!1826865883-0-beehive-scenes.jpg_180x180xzq90.jpg_.webp" mode=aspectFill>
            <p>曲面电视</p>
          </div>
          <div class="content">
            <img src="https://img.alicdn.com/imgextra/i2/1826865883/TB2fe3dmtnJ8KJjSszdXXaxuFXa_!!1826865883-0-beehive-scenes.jpg_180x180xzq90.jpg_.webp" mode=aspectFill>
            <p>曲面电视</p>
          </div>
        </div>
      </scroll-view>
    </div>
  </div>
</template>

<script>
import Search from '../../components/search.vue'
import request from '../../utils/request.js'

export default {
  components:{
    Search
  },
  data () {
    return {
      categotyList:[]
    }
  },
  mounted() {
    // request.get("https://www.zhengzhicheng.cn/api/public/v1/categories").then((res) => {
    //   const {message} = res.data
    //   this.categotyList = message
    //   console.log(this.categotyList);
    // })
  },
}
</script>

<style lang="scss" scoped>
@import "style.scss"
</style>

