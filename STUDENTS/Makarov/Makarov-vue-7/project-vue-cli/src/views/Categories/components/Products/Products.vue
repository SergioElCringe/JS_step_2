<template>
  <div class="products">
    <div class="container">
      <div class="row">
        <div class="col">
          <div
            class="sorting_bar d-flex flex-md-row flex-column align-items-md-center justify-content-md-start">
            <div class="results">Showing <span>12</span> results</div>
            <div class="sorting_container ml-md-auto">
              <div class="sorting">
                <ul class="item_sorting">
                  <li>
                    <span class="sorting_text">Sort by</span>
                    <i class="fa fa-chevron-down" aria-hidden="true"></i>
                    <ul>
                      <li class="product_sorting_btn"
                        data-isotope-option='{ "sortBy": "original-order" }'>
                        <span>Default</span></li>
                      <li class="product_sorting_btn"
                        data-isotope-option='{ "sortBy": "price" }'><span>Price</span></li>
                      <li class="product_sorting_btn"
                        data-isotope-option='{ "sortBy": "stars" }'><span>Name</span></li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col">
          <Catalog :pagination="this.pagination"/>
          <div class="product_pagination">
            <ul>
              <li 
                v-for="i in numOfPages"
                :key="i"
                :class="i === pagination.num ? 'active' : ''"
              >
                <a href="" @click.prevent="redirect(i)">{{ `0${i}.` }}</a>
              </li>
            </ul>
          </div>
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
  methods: {
    ...mapActions({
      getPagination: "Catalog/getPagination"
    }),
    redirect(i) {
      this.pagination.num = i;
    }
  },
  computed: {
    ...mapGetters({
      numOfPages: "Catalog/getNumOfPages"
    }),
  },
  async beforeCreated() {
    await this.getPagination(this.pagination);
  },
  created() {
    console.log(this.pagination)
  }

}
</script>

<style>

</style>