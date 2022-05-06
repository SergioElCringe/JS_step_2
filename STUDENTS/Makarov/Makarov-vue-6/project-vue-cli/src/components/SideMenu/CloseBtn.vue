<template>
  <div :class="type"><i class="fa fa-times" aria-hidden="true"></i></div>
</template>

<script>
export default {
  name: "CloseBtn",
  props: ["type"],
};
</script>

<style>
</style>