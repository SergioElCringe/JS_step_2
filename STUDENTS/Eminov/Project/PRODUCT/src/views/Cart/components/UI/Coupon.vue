<template>
  <div class="coupon">
    <div class="section_title">Coupon code</div>
    <div class="section_subtitle">Enter your coupon code</div>
    <div class="coupon_form_container">
      <form action="#" id="coupon_form" class="coupon_form">
        <input 
          type="text" 
          class="coupon_input" 
          required="required"
          v-model="coupon"
        />
        <button 
          class="button coupon_button"
          @click.prevent="checkCoupon"
        >
        <span>Apply</span></button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Coupon',
  data() {
    return {
      coupon: '',
      coupons: ['Sergio', 'El', 'Cringe'],
    }
  },

  methods: {
    checkCoupon() {
      if (this.coupons.includes(this.coupon)) {
        console.log(true)
      }
    }
  }
}
</script>