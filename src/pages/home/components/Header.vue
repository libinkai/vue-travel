<template>
  <div class="header">
    <div class="header-left">
      <div class="iconfont back-icon">&#xe624;</div>
    </div>
    <div class="header-input"><span class="iconfont">&#xe632;</span>输入城市/景点/游玩主题</div>
    <div class="header-right">城市<span class="iconfont city-icon">&#xe64a;</span></div>
  </div>
</template>

<script>
export default {
  name: 'Header'
}
</script>
<!-- scoped说明只对当前组件有效 -->
<!--1rem = html font-size = 50px-->
<!--引入其它样式，@前面需要添加~-->
<style lang="stylus" scoped>
@import '~style/varibles.styl'
.header
  line-height: .86rem
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
    .city-icon
      font-size: .24rem
</style>
