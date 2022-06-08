<template>
  <div :class="type" @click="toggleSideMenu">
    <i class="fa fa-times" aria-hidden="true"></i>
  </div>
</template>

<script>
import { mapState, mapGetters, mapActions } from "vuex";
export default {
  name: "CloseBtn",
  props: ["type"],
  methods: {
    ...mapActions({
      toggleSideMenu: "SideMenu/toggleSideMenu",
    }),
  }
};
</script>

<style>
</style>