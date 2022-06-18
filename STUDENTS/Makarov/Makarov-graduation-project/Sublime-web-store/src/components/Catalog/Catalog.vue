<template>
  <div class="products">
    <div class="container">
      <div class="row" v-if="pagination">
        <div class="col">
          <div class="sorting_bar d-flex flex-md-row flex-column align-items-md-center justify-content-md-start">
            <div class="results">Showing {{ pageItems?.length }} out of {{ total }} results</div>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col">
          <div class="catalog" v-if="suggestion">
            <CatalogItem
              v-for="(item, i) in suggestionItems"
              :key="i"
              :item="item"
              :stickerTypes="stickerTypes"
              :imgURLTemplate="imgURLTemplate"
              @addItem="addItem"
            />
          </div>
          <div class="catalog" v-else-if="pagination">
            <CatalogItem
              v-for="(item, i) in pageItems"
              :key="i"
              :item="item"
              :stickerTypes="stickerTypes"
              :imgURLTemplate="imgURLTemplate"
              @addItem="addItem"
            />
          </div>
          <div class="catalog" v-else>
            <CatalogItem
              v-for="(item, i) in items"
              :key="i"
              :item="item"
              :stickerTypes="stickerTypes"
              :imgURLTemplate="imgURLTemplate"
              @addItem="addItem"
            />
          </div>
          <div class="product_pagination" v-if="pagination">
            <ul>
              <li>
                <a href="" @click.prevent="redirect(1)">First</a>
              </li>
              <li>
                <a href="" @click.prevent="goToPrev">Prev</a>
              </li>
              <li 
                v-for="(item, index) in paginationButtons" 
                :key="index"
                :class="item === pages.num + 1 ? 'active' : ''"  
              >
                <a href="" @click.prevent="redirect(item)">{{ `0${item}.` }}</a>
              </li>
              <li>
                <a href="" @click.prevent="goToNext">Next</a>
              </li>
              <li>
                <a href="" @click.prevent="redirect(numOfPages)">Last</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CatalogItem from "./CatalogItem.vue";
import { mapState, mapGetters, mapActions } from "vuex";

export default {
  name: "Catalog",
  components: { CatalogItem },
  props: ["suggestion", "pagination"],
  data: function () {
    return {
      ready: false,
      URL: "/api/catalog",
      imgURLTemplate:
        "https://raw.githubusercontent.com/MikhailErnstovich/my-ftp/master/img/",
      pages: {
        num: 0,
        size: 4,
        category: this.$route.params.category
      },
    };
  },
  watch: {
    async $route(to, from) {
      this.pages.category = to.params.category;
      await this.getPagination(this.pages);
    }
  },
  methods: {
    ...mapActions({
      getCatalog: "Catalog/getCatalog",
      getHomeSuggestion: "Catalog/getHomeSuggestion",
      getPagination: "Catalog/getPagination",
      addItem: "Cart/addItem",
    }),
    redirect(i) {
      this.pages.num = i - 1;
      this.getPagination(this.pages);
    },
    goToPrev() {
      this.pages.num > 0
        ? this.pages.num--
        : (this.pages.num = 0);
      this.getPagination(this.pages);
    },
    goToNext() {
      if (this.pages.num < this.numOfPages - 1) {
        this.pages.num++;
      }
      this.getPagination(this.pages);
    },
  },

  computed: {
    ...mapGetters({
      items: "Catalog/getItems",
      suggestionItems: "Catalog/getSuggestion",
      pageItems: "Catalog/getPage",
      stickerTypes: "Catalog/getStickers",
      numOfPages: "Catalog/getNumOfPages",
      total: "Catalog/getTotal",
    }),
    paginationButtons() {
      if (this.numOfPages < 5) {
        const res = [];
        for (let i = 1; i <= this.numOfPages; i++) {
          res.push(i);
        }
        return res;
      } else if(this.pages.num === 0) {
        return [
          this.pages.num + 1,
          this.pages.num + 2,
          this.pages.num + 3,
          this.pages.num + 4,
          this.pages.num + 5,
        ];
      } else if (this.pages.num === 1) {
        return [
          this.pages.num,
          this.pages.num + 1,
          this.pages.num + 2,
          this.pages.num + 3,
          this.pages.num + 4,
        ];
      } else if (this.pages.num === this.numOfPages - 1) {
        return [
          this.pages.num - 3,
          this.pages.num - 2,
          this.pages.num - 1,
          this.pages.num,
          this.pages.num + 1,
        ];
      } else if (this.pages.num === this.numOfPages - 2) {
        return [
          this.pages.num - 2,
          this.pages.num - 1,
          this.pages.num,
          this.pages.num + 1,
          this.pages.num + 2,
        ];
      } else {
        return [
          this.pages.num - 1,
          this.pages.num,
          this.pages.num + 1,
          this.pages.num + 2,
          this.pages.num + 3,
        ];
      }   
    },
  },
  async beforeCreated() {
    await this.getPagination(this.pages);
  },
  async created() {
    try {
      if (this.suggestion) {
        await this.getHomeSuggestion();
      } else if (this.pagination) {
        await this.getPagination(this.pages);
      } else {
        await this.getCatalog();
      }
    } catch (err) {
      throw err;
    }
  },
};
</script>

<style>
.products {
  width: 100%;
  background: #ffffff;
  padding-top: 99px;
  z-index: 2;
}
.catalog {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
.product_pagination {
  width: 100%;
  margin-top: 3px;
  text-align: center;
}
.product_pagination ul li {
  display: inline-block;
}
.product_pagination ul li:not(:last-child) {
  margin-right: 3px;
}
.product_pagination ul li a {
  font-size: 14px;
  font-weight: 400;
  color: #6c6a74;
  -webkit-transition: all 200ms ease;
  -moz-transition: all 200ms ease;
  -ms-transition: all 200ms ease;
  -o-transition: all 200ms ease;
  transition: all 200ms ease;
}
.product_pagination ul li.active a,
.product_pagination ul li:hover a {
  color: #ff6347;
}

@media only screen and (max-width: 575px) {
  .products {
    padding-top: 30px;
  }
}
</style>