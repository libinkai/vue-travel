<template>
    <div>
      <div class="weekend-title">周末去哪</div>
      <ul>
        <li class="weekend-item border-bottom" v-for="item of list" :key="item.id">
          <div class="item-img-wrapper">
            <img class="item-img" :src="item.imgUrl"/>
          </div>
          <div class="item-info-wrapper">
            <p class="item-info-title">{{item.title}}</p>
            <p class="item-info-description">{{item.desc}}</p>
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
  .weekend-title
    margin-top: .2rem
    line-height: .8rem
    background: #eee
    text-indent: .2rem
  .item-img-wrapper
    height: 0
    overflow: hidden
    padding-bottom: 37.09%
    .item-img
      width: 100%
  .item-info-wrapper
    padding: .1rem
    .item-info-title
      line-height: .54rem
      font-size: .32rem
      ellipsis()
    .item-info-description
      line-height: .4rem
      color: #ccc
      ellipsis()
</style>
