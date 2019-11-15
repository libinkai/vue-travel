<template>
  <div>
    <div class="item" v-for="(item, index) of list" :key="index">
      <div class="item-title border-bottom">
        <span class="item-title-icon"></span>
        {{item.title}}
      </div>
      <div v-if="item.list" class="item-children">
        <!--递归组件，使用自己名字（name）作为组件-->
        <list :list="item.list"></list>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'List',
  props: {
    list: Array
  }
}
</script>

<style lang="stylus" scoped>
  .item-title
    padding : 0 .32rem
    font-size : .32rem
    line-height : .8rem
    .item-title-icon
      position : relative
      display: inline-block
      width: .36rem
      height: .36rem
      top: .06rem
      left: .06rem
      background: url(http://s.qunarzz.com/piao/image/touch/sight/detail.png) 0 -.45rem no-repeat
      margin-right: .1rem
      background-size: .4rem 3rem
  .item-children
    padding : 0 .2rem
</style>
