<template>
    <div>
      <div class="recommend-title">热销推荐</div>
      <ul>
        <li class="recommend-item border-bottom" v-for="item of list" :key="item.id">
          <img class="item-img" :src="item.imgUrl"/>
          <div class="item-info-wrapper">
            <p class="item-info-title">{{item.title}}</p>
            <p class="item-info-description">{{item.desc}}</p>
            <button class="item-info-details-button">查看详情</button>
          </div>
        </li>
      </ul>
    </div>
</template>

<script>
export default {
  name: 'HomeRecommend',
  props: {
    list: Array
  }
}
</script>

<style lang="stylus" scoped>
@import '~style/mixins.styl'
  .recommend-title
    line-height: .8rem
    background: #eee
    text-indent: .2rem
  .recommend-item
    display: flex
    height: 1.9rem
    overflow: hidden
    .item-img
      width: 1.7rem
      height: 1.7rem
      padding: .1rem
    .item-info-wrapper
      flex: 1
      padding: .1rem
      min-width: 0
      .item-info-title
        line-height: .54rem
        font-size: .32rem
        ellipsis()
      .item-info-description
        line-height: .4rem
        color: #ccc
        ellipsis()
      .item-info-details-button
        line-height: .44rem
        background: #ff9300
        padding: 0 .2rem
        border-radius: .06rem
        margin-top: .16rem
        color: #fff
</style>
