<template>
  <div>
    <home-header></home-header>
    <home-swiper></home-swiper>
    <home-icon></home-icon>
    <home-recommend></home-recommend>
  </div>
</template>

<script>
import HomeHeader from './components/HomeHeader'
import HomeSwiper from './components/HomeSwiper'
import HomeIcon from './components/HomeIcon'
import HomeRecommend from './components/HomeRecommend'
import axios from 'axios'

export default {
  name: 'Home',
  components: {
    HomeHeader,
    HomeSwiper,
    HomeIcon,
    HomeRecommend
  },
  mounted () {
    this.getHomeData()
  },
  methods: {
    getHomeData () {
      // 在config index.js下配置了请求转发
      axios.get('/api/index.json').then(this.getHomeDataSuccess)
    },
    getHomeDataSuccess (res) {
      console.log(res)
    }
  }
}
</script>

<style>
  h1 {
    font-size: 50px;
  }
</style>
