<template>
  <div>
    <details-banner :sigthName="sigthName" :bannerImg="bannerImg" :galleryImgs="galleryImgs"></details-banner>
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
import axios from 'axios'

export default {
  name: 'Details',
  components: {
    DetailsBanner,
    DetailsHeader,
    DetailsList
  },
  data () {
    return {
      sigthName: '',
      bannerImg: '',
      galleryImgs: [],
      list: []
    }
  },
  mounted () {
    this.getDetailsData()
  },
  methods: {
    getDetailsData () {
      // axios.get('/api/detail.json?' + this.$route.params.id)
      axios.get('/api/detail.json', {
        params: {
          id: this.$route.params.id
        }
      }).then(this.handelGetDataSuccess)
    },
    handelGetDataSuccess (res) {
      res = res.data
      if (res.ret && res.data) {
        const data = res.data
        // console.log(data)
        this.sigthName = data.sigthName
        this.bannerImg = data.bannerImg
        this.galleryImgs = data.galleryImgs
        this.list = data.categoryList
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
  .content
    height : 50rem
</style>
