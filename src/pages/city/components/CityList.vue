<template>
  <div class="list" ref="wrapper">
    <div>
      <div class="area">
        <div class="area-title border-topbottom">当前城市</div>
        <div class="button-list">
          <div class="button-wrapper">
            <div class="button">北京</div>
          </div>
        </div>
      </div>
      <div class="area">
        <div class="area-title border-topbottom">热门城市</div>
        <div class="button-list">
          <div class="button-wrapper">
            <div class="button">北京</div>
          </div>
          <div class="button-wrapper">
            <div class="button">北京</div>
          </div>
          <div class="button-wrapper">
            <div class="button">北京</div>
          </div>
          <div class="button-wrapper">
            <div class="button">北京</div>
          </div>
          <div class="button-wrapper">
            <div class="button">北京</div>
          </div>
        </div>
      </div>
      <div class="area">
        <div class="area-title border-topbottom">A</div>
        <div class="item-list">
          <div class="item border-bottom">阿富汗</div>
          <div class="item border-bottom">阿富汗</div>
          <div class="item border-bottom">阿富汗</div>
          <div class="item border-bottom">阿富汗</div>
          <div class="item border-bottom">阿富汗</div>
          <div class="item border-bottom">阿富汗</div>
        </div>
      </div>
      <div class="area">
        <div class="area-title border-topbottom">B</div>
        <div class="item-list">
          <div class="item border-bottom">阿富汗</div>
          <div class="item border-bottom">阿富汗</div>
          <div class="item border-bottom">阿富汗</div>
          <div class="item border-bottom">阿富汗</div>
          <div class="item border-bottom">阿富汗</div>
          <div class="item border-bottom">阿富汗</div>
        </div>
      </div>
      <div class="area">
        <div class="area-title border-topbottom">C</div>
        <div class="item-list">
          <div class="item border-bottom">阿富汗</div>
          <div class="item border-bottom">阿富汗</div>
          <div class="item border-bottom">阿富汗</div>
          <div class="item border-bottom">阿富汗</div>
          <div class="item border-bottom">阿富汗</div>
          <div class="item border-bottom">阿富汗</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Bscroll from 'better-scroll'
export default {
  name: 'CityList',
  mounted () {
    this.scroll = new Bscroll(this.$refs.wrapper)
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
