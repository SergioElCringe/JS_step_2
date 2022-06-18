<template>
  <li class="page_menu_item has-children">
    <router-link 
      :to="subMenu.link"
      v-if="!subMenu?.items"
    >
      {{ subMenu.text }}
    </router-link>
    <a 
      @click.prevent="openSubMenu"
      :href="subMenu.link"
      v-if="subMenu?.items"    
    >
      <span :class="clicked ? 'redirect' : ''">{{ subMenu.text }}</span>
      <i class="fa fa-angle-up" v-if="isVisible"></i>
      <i class="fa fa-angle-down" v-if="!isVisible"></i>
    </a>
    <ul class="page_menu_selection" 
      v-if="subMenu?.items"
      v-show="isVisible"
    >
      <SideMenuItem v-for="item in subMenu.items" 
        :key="item"
        :item="item"
      />
    </ul>

  </li>
</template>

<script>
import SideMenuItem from "./SideMenuItem.vue";

export default {
  name: "SideSubMenu",
  props: ["subMenu"],
  components: { SideMenuItem },
  data: function() {
    return {
      isVisible: false,
      clicked: false
    }
  },
  methods: {
    openSubMenu(e) {
      if (e.target.classList.contains("redirect")) {
        this.$router.push(this.subMenu.link);
      } 
      this.isVisible = !this.isVisible;
      this.clicked = !this.clicked;
    }
  }
}
</script>

<style>

</style>
