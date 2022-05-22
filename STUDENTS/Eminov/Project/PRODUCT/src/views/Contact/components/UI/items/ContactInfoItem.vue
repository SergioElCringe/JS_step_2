<template>
  <div class="contact_info_section">
    <div class="contact_info_title">{{ item.title }}</div>
    <ul>
      <li>
        Phone: <span>{{ item.phone }}</span>
      </li>
      <li>
        Email: <span>{{ item.email }}</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "ContactInfoItem",
  props: {
    item: {
      type: Object,
      default: () => {},
    },
  },
};
</script>

<style>
</style>