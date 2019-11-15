<template>
  <ul class="list">
    <li class="list-item" v-for="item of letters"
        :key="item"
        :ref="item"
        @click="handelClickLetter"
        @touchstart.prevent="handelTouchStart"
        @touchmove="handelTouchMove"
        @touchend="handelTouchEnd">{{item}}</li>
  </ul>
</template>

<script>
export default {
  name: 'CityAlphabet',
  props: {
    cities: Object
  },
  computed: {
    letters () {
      const letters = []
      for (let i in this.cities) {
        letters.push(i)
      }
      return letters
    }
  },
  data () {
    return {
      touchStatus: false,
      startY: 0,
      timer: null
    }
  },
  updated () {
    this.startY = this.$refs['A'][0].offsetTop
  },
  methods: {
    handelClickLetter (e) {
      // console.log(e.target.innerText)
      this.$emit('clickLetter', e.target.innerText)
    },
    handelTouchStart () {
      this.touchStatus = true
    },
    handelTouchMove (e) {
      if (this.touchStatus) {
        if (this.timer) {
          clearTimeout(this.timer)
        }
        // 函数节流
        this.timer = setTimeout(() => {
          const touchY = e.touches[0].clientY - 79
          const index = Math.floor((touchY - this.startY) / 20)
          if (index >= 0 && index < this.letters.length) {
            this.$emit('clickLetter', this.letters[index])
          }
        }, 16)
      }
    },
    handelTouchEnd () {
      this.touchStatus = false
    }
  }
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
