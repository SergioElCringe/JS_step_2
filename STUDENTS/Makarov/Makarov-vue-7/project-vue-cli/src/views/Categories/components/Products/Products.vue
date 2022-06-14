<template>
  <div class="products">
    <div class="container">
      <div class="row">
        <div class="col">
          <div class="sorting_bar d-flex flex-md-row flex-column align-items-md-center justify-content-md-start">
            <div class="results">Showing <span>{{ pagination.size }}</span> results</div>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col">
          <Catalog :pagination="this.pagination"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Catalog from '@components/Catalog/Catalog.vue';
import { mapState, mapGetters, mapActions } from "vuex";

export default {
  name: 'Products',
  components: { Catalog },
  data() {
    return {
      pagination: {
        num: 0,
        size: 4
      },
    }
  },
}
</script>

<style>

</style>