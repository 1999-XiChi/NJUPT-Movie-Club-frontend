<template>
  <div>
    <my-header :lightMode="false"></my-header>
    <div class="main">
      FAQ
    </div>
  </div>
</template>

<script>
import  myHeader  from "_c/common/Header";
export default {
  components: {
    myHeader
  }
}
</script>

<style lang="stylus" scoped>
.main
  padding-top 80px
  height 1200px
</style>