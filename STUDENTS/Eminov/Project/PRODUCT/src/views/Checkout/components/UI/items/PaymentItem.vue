<template>
  <v-radio
    color="red darken-3"
    :label="method.name"
    :value="method.id"
    @click="setMethod(method.name)"
  />
</template>

<script>
export default {
  name: "PaymentItem",
  props: {
    method: {
      type: Object,
      default: () => {},
    },
  },

  methods: {
    setMethod(val) {
      this.$emit("setMethod", val);
    },
  },
};
</script>