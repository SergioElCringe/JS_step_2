<template>
  <li :class="{ hassubs: item.subCategories }">
    <router-link 
      :to="item.url" 
      v-slot="{ isActive }"
    >
      <span :class="isActive ? 'nav-active' : ''">{{ item.name }}</span>
    </router-link>
    <ul v-if="item.subCategories">
      <li 
        v-for="subItem of item.subCategories" 
        :key="subItem.id"
      >
        <router-link 
          :to="subItem.url"
          v-slot="{ isActive }"
        >
          <span :class="isActive ? 'nav-active' : ''">{{ subItem.name }}</span>
        </router-link>
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
      default: () => {},
    },
  },
};
</script>