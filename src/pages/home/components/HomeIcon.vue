<template>
  <div class="icons">
  <!--:options="swiperOption"-->
    <swiper>
      <!-- slides -->
      <swiper-slide v-for="(page,index) of pages" :key="index">
        <div class="icon" v-for="item of page" :key="item.id">
          <div class="icon-img">
            <img class="icon-img-content" :src="item.url">
          </div>
          <p class="icon-description">{{item.description}}</p>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
export default {
  name: 'HomeIcon',
  data () {
    return {
      iconList: [
        {
          id: '1',
          url: 'https://imgs.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png',
          description: '景点门票'
        },
        {
          id: '2',
          url: 'https://imgs.qunarzz.com/piao/fusion/1803/ab/6f7d6e44963c9302.png',
          description: '泡温泉'
        },
        {
          id: '3',
          url: 'https://imgs.qunarzz.com/piao/fusion/1803/fa/2548667cb6e902.png',
          description: '动植物园'
        },
        {
          id: '4',
          url: 'https://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20193/338c5b924c5809e8c7b14f60a953c3e2.png',
          description: '重庆欢乐谷'
        },
        {
          id: '5',
          url: 'https://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20193/338c5b924c5809e8c7b14f60a953c3e2.png',
          description: '重庆欢乐谷'
        },
        {
          id: '6',
          url: 'https://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20193/338c5b924c5809e8c7b14f60a953c3e2.png',
          description: '重庆欢乐谷'
        },
        {
          id: '7',
          url: 'https://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20193/338c5b924c5809e8c7b14f60a953c3e2.png',
          description: '重庆欢乐谷'
        },
        {
          id: '8',
          url: 'https://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20193/338c5b924c5809e8c7b14f60a953c3e2.png',
          description: '重庆欢乐谷重庆欢乐谷'
        },
        {
          id: '9',
          url: 'https://imgs.qunarzz.com/piao/fusion/1803/89/55083b0f1951f302.png',
          description: '两江夜游'
        }
      ]
    }
  },
  computed: {
    pages () {
      // 将一维的数组拆分为二维的数组
      const pages = []
      this.iconList.forEach((item, index) => {
        const page = Math.floor(index / 8)
        if (!pages[page]) {
          pages[page] = []
        }
        pages[page].push(item)
      })
      return pages
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~style/varibles.styl'
@import '~style/mixins.styl'
  .icons >>> .swiper-container
    height: 0
    padding-bottom: 50%
  .icon
    position: relative
    overflow: hidden
    float: left
    height: 0
    width: 25%
    padding-bottom: 25%

    .icon-img
      position: absolute
      top: 0
      left: 0
      right: 0
      bottom: .44rem
      box-sizing: border-box
      padding: .1rem

      .icon-img-content
        height: 100%
        display: block
        margin: 0 auto
    .icon-description
      position: absolute
      left: 0
      right: 0
      bottom: 0
      height: .44rem
      line-height: .44rem
      color: $darkTextColor
      text-align: center
      ellipsis()
</style>
