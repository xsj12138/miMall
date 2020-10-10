<template>
  <div>
    xx
    <OrderHeader></OrderHeader>
    <router-view></router-view>
    <NavFooter></NavFooter>
  </div>
</template>

<script>
import NavFooter from '@/components/NavFooter'
import OrderHeader from '@/components/OrderHeader'
export default {
  name: 'order',
  components: {
    NavFooter,
    OrderHeader
  },
  data () {
    return {
    }
  }
}
</script>

<style scoped>
</style>
