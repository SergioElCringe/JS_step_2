<template>
  <div class="payment">
    <div class="payment_options">
      <v-radio-group v-model="active">
        <PaymentItem 
          v-for="method in payment" 
          :key="method.id"
          :method="method"
          @setMethod="setMethod" 
        />
      </v-radio-group>
    </div>
  </div>
</template>

<script>
import PaymentItem from "./items/PaymentItem.vue";

export default {
  name: "Payment",
  components: { PaymentItem },
  data() {
    return {
      active: 1,
      payment: [
        {
          id: 1,
          name: "Paypal",
        },
        {
          id: 2,
          name: "Cach on delivery",
        },
        {
          id: 3,
          name: "Credit card",
        },
        {
          id: 4,
          name: "Direct bank transfer",
        },
      ],
    };
  },

  methods: {
    setMethod(val) {
      console.log(val);
    },
  },
};
</script>