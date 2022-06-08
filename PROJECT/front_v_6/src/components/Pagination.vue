<!--template>
  <div class="product_pagination">
    <ul>
      <li class="active mr-3"><a href="#">1.</a></li>
      <li class="mr-3"><a href="#">2.</a></li>
      <li><a href="#">3.</a></li>
    </ul>
  </div>
</template-->
<template>
  <div class="text-center product_pagination">
    <v-pagination
      v-model="active"
      :length="pages"
      :total-visible="onPage"
    ></v-pagination>
  </div>
</template>

<script>
import { mapState } from 'vuex';
export default {
  name: 'Pagination',
  props: {
    onPage: {
      type: Number,
      default: 1,
    }
  },
  data() {
    return {
      active: 1,
    };
  },
  computed: {
    ...mapState({
      total: state => state.Pagination.total,
    }),
    pages() {
      if (!(this.total % this.onPage)) {
        return this.total / this.onPage;
      } else {
        return Math.floor(this.total / this.onPage) + 1;
      }
    }
  },
  watch: {
    active: {
      handler(newVal) {
        this.onPaginate(newVal);
      }
    }
  },
  methods: {
    onPaginate(n) {
      this.$emit('paginate', n);
    }
  },
}
</script>

<style>

</style>