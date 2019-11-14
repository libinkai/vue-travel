<template>
  <ul class="list">
    <li class="list-item">A</li>
    <li class="list-item">B</li>
    <li class="list-item">C</li>
  </ul>
</template>

<script>
export default {
  name: 'CityAlphabet'
}
</script>

<style lang="stylus" scoped>
  @import "~style/varibles.styl"
  .list
    display: flex
    flex-direction: column
    justify-content: center
    position: absolute
    top: 1.58rem
    right: 0
    bottom: 0
    width: .4rem
    .list-item
      text-align: center
      line-height: .44rem
      color: $bgColor
</style>
