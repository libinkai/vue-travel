<template>
  <div>
    <swiper :options="swiperOption">
      <swiper-slide><lazy-test-swiper-item :query="1"></lazy-test-swiper-item></swiper-slide>
      <swiper-slide><lazy-test-swiper-item :query="2"></lazy-test-swiper-item></swiper-slide>
      <swiper-slide><lazy-test-swiper-item :query="3"></lazy-test-swiper-item></swiper-slide>
      <swiper-slide><lazy-test-swiper-item :query="4"></lazy-test-swiper-item></swiper-slide>
      <swiper-slide><lazy-test-swiper-item :query="5"></lazy-test-swiper-item></swiper-slide>
      <swiper-slide><lazy-test-swiper-item :query="6"></lazy-test-swiper-item></swiper-slide>
      <div class="swiper-button-prev" slot="button-prev"></div>
      <div class="swiper-button-next" slot="button-next"></div>
    </swiper>
  </div>
</template>

<script>
import LazyTestSwiperItem from './LazyTestSwiperItem'
export default {
  name: 'LazyTest',
  components: {
    LazyTestSwiperItem
  },
  data () {
    return {
      swiperOption: {
        // 显示小点
        pagination: '.swiper-pagination',
        // 循环
        loop: true,
        prevButton: '.swiper-button-prev',
        nextButton: '.swiper-button-next'
      }
    }
  }
}
</script>

<style scoped>

</style>
