<template>
  <div class="col-lg-6">
    <div class="billing checkout_section">
      <div class="section_title">Billing Address</div>
      <div class="section_subtitle">Enter your address info</div>
      <div class="checkout_form_container">
        <CheckoutForm 
          :formData="formData"
        />
      </div>
    </div>
  </div>
</template>

<script>
import CheckoutForm from './UI/CheckoutForm.vue';

export default {
  name: 'CheckoutInfo',
  components: { CheckoutForm },
  data() {
    return {
      formData: {
        firstName: '',
        secondName: '',
        company: '',
        country: '',
        address: '',
        zipCode: '',
        city: '',
        province: '',
        phone: '',
        email: '',
        termsAndCondition: true,
        createAnAcount: false,
        subcribe: false,
      },
    };
  },
};
</script>