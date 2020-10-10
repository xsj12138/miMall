<template>
  <div>
    <OrderHeader></OrderHeader>
    <NavFooter></NavFooter>
  </div>
</template>

<script>
import NavFooter from '@/components/NavFooter'
import OrderHeader from '@/components/OrderHeader'
export default {
  name: 'cart',
  components: {
    OrderHeader,
    NavFooter
  },
  data () {
    return {
    }
  }
}
</script>

<style scoped>
</style>
