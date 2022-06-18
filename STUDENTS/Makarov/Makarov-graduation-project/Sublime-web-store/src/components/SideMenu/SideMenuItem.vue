<template>
  <li class="page_menu_item menu_mm">
    <router-link :to="item.link">{{ item.text }}</router-link>
  </li>
</template>

<script>
export default {
  name: "SideMenuItem",
  props: ["item"]
}
</script>

<style>

</style>