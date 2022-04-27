<template>
  <li>
    <router-link :to='item.text'>{{ item.link }}</router-link>
  </li>
</template>

<script>
export default {
    name: 'NavSubMenuItem',
    props: ['item', 'ready'],
};
</script>

<style>
</style>