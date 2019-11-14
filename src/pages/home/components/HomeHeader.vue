<template>
  <div class="header">
    <div class="header-left">
      <div class="iconfont back-icon">&#xe624;</div>
    </div>
    <div class="header-input"><span class="iconfont">&#xe632;</span>输入城市/景点/游玩主题</div>
    <router-link to="/city">
      <div class="header-right">{{this.city}}<span class="iconfont city-icon">&#xe64a;</span></div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'HomeHeader',
  props: {
    city: String
  }
}
</script>
<!-- scoped说明只对当前组件有效 -->
<!--1rem = html font-size = 50px-->
<!--引入其它样式，@前面需要添加~-->
<style lang="stylus" scoped>
@import '~style/varibles.styl'
.header
  line-height: $headerHeight
  display: flex
  background-color: $bgColor
  color: #fff
  .header-left
    width: .64rem
    float: left
    .back-icon
      text-align center
      font-size .4rem
  .header-input
    flex: 1
    height: .64rem
    line-height: .64rem
    margin-top .12rem
    margin-left: .2rem
    background-color: #fff
    padding-left: .2rem
    border-radius: .1rem
    color: #ccc
  .header-right
    width 1.24rem
    float: right
    text-align center
    color: #fff
    .city-icon
      font-size: .24rem
</style>
