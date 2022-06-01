<template>
  <router-view />
</template>

<script>
import Home from "./views/Home/Home.vue";

export default {
  data() {
    return {
      api: null,
    };
  },
  components: { Home },
};
</script>


<style lang="scss">

</style>
