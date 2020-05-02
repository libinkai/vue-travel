<template>
  <div id="app">
    <!--通过exclude排除keep-alive组件-->
    <keep-alive exclude="Details">
      <router-view/>
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
</style>
