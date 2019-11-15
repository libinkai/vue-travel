<template>
  <div>
    <router-link tag="div" to="/" class="header-abs" v-show="showAbs">
      <div class="iconfont back-icon">&#xe624;</div>
    </router-link>
    <div class="header-fixed" v-show="!showAbs" :style="opacityStyle">
      <router-link tag="div" to="/" class="header-abs">
        <div class="iconfont fixed-back-icon">&#xe624;</div>
      </router-link>
      景点详情
    </div>
  </div>
</template>

<script>
export default {
  name: 'Header',
  data () {
    return {
      showAbs: true,
      opacityStyle: {
        opacity: 0
      }
    }
  },
  methods: {
    handelScroll () {
      const top = document.documentElement.scrollTop
      if (top > 60) {
        let op = top / 140
        op = op > 1 ? 1 : op
        this.opacityStyle.opacity = op
        this.showAbs = false
      } else {
        this.showAbs = true
      }
    }
  },
  activated () {
    window.addEventListener('scroll', this.handelScroll)
  },
  deactivated () {
    // 页面被隐藏或销毁时调用
    // 在window上面绑定事件，必须解绑事件
    window.removeEventListener('scroll', this.handelScroll)
  }
}
</script>

<style lang="stylus" scoped>
  @import "~style/varibles.styl"
  .header-abs
    left : .2rem
    top : .2rem
    width : .6rem
    line-height : .6rem
    height : .6rem
    border-radius : .4rem
    background : rgba(0,0,0,.8)
    position : absolute
    .back-icon
      font-size : .4rem
      color : #fff
  .header-fixed
    z-index : 2
    position: fixed
    top : 0
    left : 0
    right : 0
    height: $headerHeight
    line-height: $headerHeight
    text-align: center
    color: #fff
    background: $bgColor
    font-size: .32rem
    .fixed-back-icon
      position: absolute
      top: 0
      left: 0
      width: .6rem
      text-align: center
      font-size: .4rem
      color: #fff
</style>
