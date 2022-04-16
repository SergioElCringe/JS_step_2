<template>
  <li :class="{ hassubs: item.subCategories }">
    <a :href="item.url">{{ item.name }}</a>
    <ul v-if="item.subCategories">
      <li v-for="subItem of item.subCategories" :key="subItem.id">
        <a :href="subItem.url">{{ subItem.name }}</a>
      </li>
    </ul>
  </li>
</template>

<script>
export default {
    name: 'menu-navigation-item',
    props: {
        item: {
            type: Object
        }
    },
};
</script>

<style>
</style>