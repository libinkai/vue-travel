<template>
  <div>
    <home-header></home-header>
    <home-swiper :list="swiperList"></home-swiper>
    <home-icon :list="iconList"></home-icon>
    <home-recommend :list="recommendList"></home-recommend>
    <HomeWeekend :list="weekendList"></HomeWeekend>
  </div>
</template>

<script>
import HomeHeader from './components/HomeHeader'
import HomeSwiper from './components/HomeSwiper'
import HomeIcon from './components/HomeIcon'
import HomeRecommend from './components/HomeRecommend'
import HomeWeekend from './components/HomeWeekend'
import axios from 'axios'
import {mapState} from 'vuex'

export default {
  name: 'Home',
  components: {
    HomeHeader,
    HomeSwiper,
    HomeIcon,
    HomeRecommend,
    HomeWeekend
  },
  mounted () {
    this.lastCity = this.city
    this.getHomeData()
  },
  methods: {
    getHomeData () {
      // 在config index.js下配置了请求转发
      axios.get('/api/index.json?city=' + this.city).then(this.getHomeDataSuccess)
    },
    getHomeDataSuccess (res) {
      res = res.data
      if (res.ret && res.data) {
        const data = res.data
        this.swiperList = data.swiperList
        this.iconList = data.iconList
        this.recommendList = data.recommendList
        this.weekendList = data.weekendList
      }
    }
  },
  data () {
    return {
      lastCity: '',
      swiperList: [],
      iconList: [],
      recommendList: [],
      weekendList: []
    }
  },
  computed: {
    ...mapState(['city'])
  },
  activated () {
    // 每次切换页面时，都会触发activated
    if (this.lastCity !== this.city) {
      this.lastCity = this.city
      this.getHomeData()
    }
  }
}
</script>

<style>
  h1 {
    font-size: 50px;
  }
</style>
