<template>
  <li>
    <router-link :to="item.link">{{ item.text }}</router-link>
  </li>
</template>

<script>
export default {
    name: "NavSubMenuItem",
    props: ["item", "ready"],
};
</script>

<style>
</style>