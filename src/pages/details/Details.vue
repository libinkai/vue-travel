<template>
  <div>
    <details-banner></details-banner>
    <details-header></details-header>
    <div class="content">
      <details-list :list="list"></details-list>
    </div>
  </div>
</template>

<script>
import DetailsBanner from './components/Banner'
import DetailsHeader from './components/Header'
import DetailsList from './components/List'

export default {
  name: 'Details',
  components: {
    DetailsBanner,
    DetailsHeader,
    DetailsList
  },
  data () {
    return {
      list: [
        {
          title: '成人票',
          list: [
            {
              title: '成人五馆联票'
            },
            {
              title: '成人三馆联票'
            }
          ]
        },
        {
          title: '学生票'
        },
        {
          title: '特惠票'
        },
        {
          title: '儿童票'
        }
      ]
    }
  }
}
</script>

<style lang="stylus" scoped>
  .content
    height : 50rem
</style>
