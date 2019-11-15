<template>
  <div class="container" @click="handelClickGallery">
    <div class="wrapper">
      <swiper :options="swiperOption">
        <swiper-slide v-for="(img, index) of images" :key="index">
          <img class="gallery-image" :src="img"/>
        </swiper-slide>
        <div class="swiper-pagination"  slot="pagination"></div>
      </swiper>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Gallery',
  props: {
    images: {
      type: Array,
      default () {
        return []
      }
    }
  },
  data () {
    return {
      swiperOption: {
        pagination: '.swiper-pagination',
        paginationType: 'fraction',
        observeParents: true,
        observer: true
      }
    }
  },
  methods: {
    handelClickGallery () {
      this.$emit('gallery-close')
    }
  }
}
</script>

<style lang="stylus" scoped>
  .container >>> .swiper-container
    overflow : inherit
  .container
    left : 0
    right : 0
    top : 0
    bottom : 0
    background : #000
    position : fixed
    display : flex
    flex-direction : column
    justify-content : center
    z-index : 99
    .wrapper
      height : 0
      padding-bottom : 100%
      width : 100%
      .gallery-image
        width : 100%
      .swiper-pagination
        color : #fff
        bottom : -1rem
</style>
