<template>
  <router-view />
</template>

<script>
import RequestManager from "./plugins/api/RequestManager.js";
import Home from "./views/Home/Home.vue";

export default {
  data() {
    return {
      api: null,
    };
  },
  components: { Home },
  created() {
    this.api = new RequestManager();
  },
};
</script>


<style lang="scss">

</style>
