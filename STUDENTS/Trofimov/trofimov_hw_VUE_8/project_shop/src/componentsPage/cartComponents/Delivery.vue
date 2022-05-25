<template>
          <Button/>
        <div class="row row_extra">
          <div class="col-lg-4">
            <!-- Delivery -->
            <Deli/>
            <!-- Coupon Code -->
            <Cupon/>
          </div>
        <Offset :money ="money" />
          
        </div>
</template>

<script>
import Button from './cartItem/button.vue'
import Deli from './cartItem/Deli.vue'
import Cupon from './cartItem/cupon.vue'
import Offset from './cartItem/offset.vue'
export default {
components: { Button , Deli, Cupon, Offset },
props: [ 'money' ]
}
</script>

<style>

</style>