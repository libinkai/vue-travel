<template>
  <div class="list" ref="wrapper">
    <div>
      <div class="area">
        <div class="area-title border-topbottom">当前城市</div>
        <div class="button-list">
          <div class="button-wrapper">
            <div class="button">{{this.currentCity}}</div>
          </div>
        </div>
      </div>
      <div class="area">
        <div class="area-title border-topbottom">热门城市</div>
        <div class="button-list">
          <div class="button-wrapper"
               @click="handelClickCity(city.name)"
               v-for="city of hotCities"
               :key="city.id">
            <div class="button">{{city.name}}</div>
          </div>
        </div>
      </div>
      <div class="area" v-for="(item, key) of cities" :key="key" :ref="key">
        <div class="area-title border-topbottom">{{key}}</div>
        <div class="item-list"
             v-for="city of item"
             :key="city.id"
             @click="handelClickCity(city.name)">
          <div class="item border-bottom">{{city.name}}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Bscroll from 'better-scroll'
import {mapState, mapMutations} from 'vuex'
export default {
  name: 'CityList',
  props: {
    cities: Object,
    hotCities: Array,
    letter: String
  },
  computed: {
    ...mapState({
      currentCity: 'city'
    })
  },
  mounted () {
    this.scroll = new Bscroll(this.$refs.wrapper)
  },
  watch: {
    letter () {
      // console.log(this.letter)
      if (this.letter) {
        const temp = this.$refs[this.letter][0]
        this.scroll.scrollToElement(temp)
      }
    }
  },
  methods: {
    handelClickCity (cityName) {
      // console.log(cityName)
      // this.$store.dispatch('changeCity', cityName)
      // 简单的操作，可以绕过Action
      // this.$store.commit('changeCity', cityName)
      this.changeCity(cityName)
      this.$router.push('/')
    },
    ...mapMutations(['changeCity'])
  }
}
</script>

<style lang="stylus" scoped>
  @import "~style/varibles.styl"
  .border-topbottom
    &:before
      border-color: #ccc
    &:after
      border-color: #ccc
  .border-bottom
    &:before
      border-color: #ccc
  .list
    overflow: hidden
    top: 1.58rem
    left: 0
    right: 0
    bottom: 0
    position: absolute
    .area
      .area-title
        font-size: .26rem
        line-height: .54rem
        background: #eee
        padding-left: .2rem
        color: #666
      .button-list
        overflow: hidden
        padding: .1rem .6rem .1rem .1rem
        .button-wrapper
          float: left
          width: 33.33%
          .button
            border: .02rem solid #ccc
            text-align: center
            padding: .1rem 0
            border-radius: .06rem
            margin: .1rem .1rem
      .item-list
        .item
          padding-left: .2rem
          line-height: .76rem
</style>
