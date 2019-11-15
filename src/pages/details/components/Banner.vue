<template>
  <div>
    <div class="banner" @click="handelClickBanner">
      <img class="banner-img" :src="bannerImg"/>
      <div class="banner-info">
        <div class="banner-title">{{sightName}}</div>
        <div class="banner-number"><span class="iconfont banner-icon">&#xe692;</span>39</div>
      </div>
    </div>
    <fade-animation>
      <gallery :images="galleryImgs" v-show="showGallery" @gallery-close="handelGalleryClose"></gallery>
    </fade-animation>
  </div>
</template>
<script>
import Gallery from 'common/gallery/Gallery'
import FadeAnimation from 'common/fade/Fade'
export default {
  name: 'Banner',
  components: {
    Gallery,
    FadeAnimation
  },
  props: {
    sightName: String,
    bannerImg: String,
    galleryImgs: Array
  },
  data () {
    return {
      showGallery: false,
      images: ['http://img1.qunarzz.com/sight/p0/1411/24/76171cd59252affb9df757fea503f81a.water.jpg_350x240_873740a1.jpg', 'http://img1.qunarzz.com/sight/p0/1910/45/45d3b2863b0f5adfa3.img.jpg_350x240_8b8b11f3.jpg']
    }
  },
  methods: {
    handelClickBanner () {
      this.showGallery = true
    },
    handelGalleryClose () {
      this.showGallery = false
    }
  }
}
</script>

<style lang="stylus" scoped>
  .banner
    height : 0
    padding-bottom : 55%
    overflow : hidden
    position : relative
    .banner-img
      width : 100%
    .banner-info
      display : flex
      color : #fff
      left : 0
      right : 0
      bottom : 0
      line-height : .6rem
      position : absolute
      background-image : linear-gradient(top, rgba(0,0,0,0), rgba(0,0,0,.8))
      .banner-title
        flex : 1
        font-size : .4rem
        padding : 0 .2rem
      .banner-number
        margin-top : .14rem
        background : rgba(0,0,0,0.8)
        border-radius : .2rem
        line-height : .32rem
        height : .32rem
        font-size : .24rem
        padding : 0 .4rem
        .banner-icon
          font-size : .24rem
</style>
