<template>
  <div class="container">
    <!-- 搜索框 -->
    <search/>
    <!-- 轮播图 -->
    <div class="swiper">
      <swiper
        indicator-dots=true
        autoplay="autoplay"
        circular=true
        indicator-active-color=#fff
      >
        <block
          v-for="(item, index) in swiperList"
          :key="index"
        >
          <swiper-item>
            <image
              :src="item.image_src"
              class="slide-image"
              mode="aspectFill"
            />
          </swiper-item>
        </block>
      </swiper>
    </div>
    <!-- 导航栏 -->
    <div class="nav-wrap">
      <div
        class="nav"
        v-for="(item, index) in navList"
        :key="index"
      >
        <a href="#">
          <img
            :src="item.image_src"
            mode="aspectFill"
          >
        </a>
      </div>
    </div>
    <!-- 楼层 -->
    <div
      class="floor-wrap"
      v-for="(item, index) in floorList"
      :key="index"
    >
      <div class="floor-title">
        <img :src="item.floor_title.image_src">
      </div>
      <div class="floor-content">
        <div class="left">
          <img :src="item.product_list[0].image_src">
        </div>
        <div class="right">
          <div
            class="right-item"
            v-for="(subItem, subIndex) in item.product_list"
            v-if="subIndex != 0"
            :key="subIndex"
          >
            <img
              :src="subItem.image_src"
            >
          </div>
        </div>
      </div>
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
  data() {
    return {
      swiperList: [],
      navList: [],
      floorList: []
    };
  },
  methods: {
    async getData(){
      // 获取轮播图数据
      try {
        let res = await request.get("https://www.zhengzhicheng.cn/api/public/v1/home/swiperdata").then(res => {
        const { message } = res.data;
        this.swiperList = message;
        })
      } catch (error) {}
      // 获取导航栏数据
      try {
        let res = await request.get("https://www.zhengzhicheng.cn/api/public/v1/home/catitems").then(res => {
        const { message } = res.data;
        this.navList = message;
        })
      } catch (error) {}
      // 获取楼层数据
      try {
        let res = await request.get("https://www.zhengzhicheng.cn/api/public/v1/home/floordata").then(res => {
        const { message } = res.data;
        this.floorList = message;
        })
      } catch (error) {}
    }
  },
  mounted() {
    this.getData()
  }
}
</script>

<style lang="scss" scoped>
@import "style.scss";
</style>

