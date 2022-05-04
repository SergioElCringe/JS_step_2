<template>
  <div class="col-lg-6">
    <div class="details_content">
      <div class="details_name">{{ product.name }}</div>
      <div 
        class="details_discount" 
        v-if="product.prevPrice"
      >
        ${{ product.prevPrice }}
      </div>
      <div class="details_price">${{ product.price }}</div>

      <div class="in_stock_container">
        <div class="availability">Availability:</div>
        <span>{{ product.availability }}</span>
      </div>
      <div class="details_text">
        <p class="text-justify">{{ product.description }}</p>
      </div>

      <div class="product_quantity_container">
        <div class="product_quantity clearfix">
          <span>Qty</span>
          <input
            id="quantity_input"
            type="text"
            pattern="[0-9]*"
            :value="product.amount"
          />
          <div class="quantity_buttons">
            <div
              id="quantity_inc_button"
              class="quantity_inc quantity_control"
              @click="incrementAmount(1)"
            >
              <i class="fa fa-chevron-up" aria-hidden="true"></i>
            </div>
            <div
              id="quantity_dec_button"
              class="quantity_dec quantity_control"
              :class="product.amount == 1 ? 'unavailable' : ''"
              @click="incrementAmount(-1)"
            >
              <i class="fa fa-chevron-down" aria-hidden="true"></i>
            </div>
          </div>
        </div>
        <div class="button cart_button">
          <button @click="addItem({ item: this.product })">Add to cart</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProductContent',
  props: {
    product: {
      type: Object,
      default: () => {},
    },
  },
  
  methods: {
    addItem(val) {
      this.$emit('addItem', val);
    },

    incrementAmount(val) {
      this.$emit('incrementAmount', val);
    },
  },
};
</script>