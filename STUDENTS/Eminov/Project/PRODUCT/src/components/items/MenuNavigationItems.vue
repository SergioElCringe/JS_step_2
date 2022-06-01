<template>
  <li :class="{ hassubs: item.subCategories }">
    <router-link :to="item.url">{{ item.name }}</router-link>
    <ul v-if="item.subCategories">
      <li v-for="subItem of item.subCategories" :key="subItem.id">
        <router-link :to="subItem.url">{{ subItem.name }}</router-link>
      </li>
    </ul>
  </li>
</template>

<script>
export default {
  name: 'MenuNavigationItem',
  props: {
    item: {
      type: Object,
    },
  },
};
</script>