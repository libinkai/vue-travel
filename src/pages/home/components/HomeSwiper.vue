<template>
  <div class="wrapper">
    <swiper :options="swiperOption" v-if="list.length">
      <!-- slides -->
      <swiper-slide v-for="item of list" :key="item.id">
        <img class="swiper-image" :src="item.imgUrl"/>
      </swiper-slide>
      <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  // swiper组件的name属性不能和组件名相同
  name: 'HomeSwiper',
  props: {
    list: Array
  },
  data () {
    return {
      swiperOption: {
        pagination: '.swiper-pagination',
        loop: true
      },
      swiperList: [
        {
          id: '1',
          url: 'https://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/201910/0aee0400fdf83e2e5584840c309a5a8e.jpg_750x200_f965b0d8.jpg'
        },
        {
          id: '2',
          url: 'https://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/201910/e7eac5a5e99e6517c61b953c0fece63b.jpg_750x200_4b701cf8.jpg'
        },
        {
          id: '3',
          url: 'https://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/201911/2b3a9445cc37885eb13e0402baef9f5e.png_750x200_24df2b41.png'
        }]
    }
  }
}
</script>

<!--\>>>样式穿透，不受scoped限制-->
<style lang="stylus" scoped>
  .wrapper >>> .swiper-pagination-bullet-active
    background: #fff !important
  .wrapper
    /*宽高比例自适应*/
    overflow: hidden
    width: 100%
    height: 0
    padding-bottom: 31.25%
    /*background-color: #eee*/
    .swiper-image
      width: 100%
</style>
