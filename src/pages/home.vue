<template>
  <div>
      <NavHeader></NavHeader>
      <router-view></router-view>
      <NavFooter></NavFooter>
  </div>
</template>

<script>
import NavHeader from '@/components/NavHeader'
// const NavHeader = require('@/components/NavHeader').default
// import NavHeader from './../components/NavHeader'
import NavFooter from '@/components/NavFooter'

require(['@/components/NavHeader'], (x) => {
  console.log(x)
})
export default {
  name: 'home',
  components: {
    NavHeader,
    NavFooter
  }
}
</script>

<style scoped>

</style>
