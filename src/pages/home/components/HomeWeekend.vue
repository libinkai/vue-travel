<template>
    <div>
      <div class="weekend-title">周末去哪</div>
      <ul>
        <li class="weekend-item border-bottom" v-for="item of recommendList" :key="item.id">
          <div class="item-img-wrapper">
            <img class="item-img" :src="item.url"/>
          </div>
          <div class="item-info-wrapper">
            <p class="item-info-title">{{item.title}}</p>
            <p class="item-info-description">{{item.description}}</p>
          </div>
        </li>
      </ul>
    </div>
</template>

<script>
export default {
  name: 'HomeRecommend',
  data () {
    return {
      recommendList: [
        {
          id: '1',
          url: 'https://imgs.qunarzz.com/sight/source/1509/d5/82498669f3a48d.jpg_r_640x214_21f7a4ff.jpg',
          title: '重庆长江索道',
          description: '重庆长江索道重庆长江索道重庆长江索道重庆长江索道重庆长江索道重庆长江索道'
        },
        {
          id: '2',
          url: 'https://imgs.qunarzz.com/sight/source/1509/d5/82498669f3a48d.jpg_r_640x214_21f7a4ff.jpg',
          title: '重庆长江索道',
          description: '重庆长江索道重庆长江索道重庆长江索道重庆长江索道重庆长江索道重庆长江索道'
        },
        {
          id: '3',
          url: 'https://imgs.qunarzz.com/sight/source/1509/d5/82498669f3a48d.jpg_r_640x214_21f7a4ff.jpg',
          title: '重庆长江索道',
          description: '重庆长江索道重庆长江索道重庆长江索道重庆长江索道重庆长江索道重庆长江索道'
        }
      ]
    }
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
    padding-bottom: 33.9%
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
