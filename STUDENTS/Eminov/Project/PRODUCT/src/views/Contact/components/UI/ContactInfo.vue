<template>
  <div class="col-lg-3 offset-xl-1 contact_col">
    <div class="contact_info">
      <ContactInfoItem 
        v-for="item of contactOptions"
        :key="item.title"
        :item="item"
      />
    </div>
  </div>
</template>

<script>
import ContactInfoItem from "../items/ContactInfoItem.vue";

export default {
  name: "ContactInfo",
  components: { ContactInfoItem },
  data() {
    return {
      contactOptions: [
        {
          title: "Marketing",
          phone: "+53 345 7953 3245",
          email: "yourmail@gmail.com",
        },
        {
          title: "Shippiing & Returns",
          phone: "+53 345 7953 3245",
          email: "yourmail@gmail.com",
        },
        {
          title: "Information",
          phone: "+53 345 7953 3245",
          email: "yourmail@gmail.com",
        },
      ],
    };
  },
};
</script>