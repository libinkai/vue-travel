<template>
  <div class="show">
    <h1>{{text}}</h1>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'LazyTestSwiperItem',
  props: {
    query: ''
  },
  data () {
    return {
      text: 'lazy'
    }
  },
  mounted () {
    this.getData()
  },
  methods: {
    getData () {
      axios.get('https://www.equator8848.xyz/mentor/api/user/test', {
        params: {
          query: this.query
        }
      }).then(this.handel)
    },
    handel (res) {
      res = res.data
      if (res.data) {
        const data = res.data
        this.text = data
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
  .show {
    text-align : center
  }
</style>
