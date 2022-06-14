<template>
  <div class="products">
    <div class="container">
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
                :class="item === pagination.num + 1 ? 'active' : ''"  
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
    };
  },

  methods: {
    ...mapActions({
      getCatalog: "Catalog/getCatalog",
      getHomeSuggestion: "Catalog/getHomeSuggestion",
      getPagination: "Catalog/getPagination",
      addItem: "Cart/addItem",
    }),
    redirect(i) {
      this.pagination.num = i - 1;
      this.getPagination(this.pagination);
    },
    goToPrev() {
      this.pagination.num > 0
        ? this.pagination.num--
        : (this.pagination.num = 0);
      this.getPagination(this.pagination);
    },
    goToNext() {
      if (this.pagination.num < this.numOfPages - 1) {
        this.pagination.num++;
      }
      this.getPagination(this.pagination);
    },
  },

  computed: {
    ...mapGetters({
      items: "Catalog/getItems",
      suggestionItems: "Catalog/getSuggestion",
      pageItems: "Catalog/getPage",
      stickerTypes: "Catalog/getStickers",
      numOfPages: "Catalog/getNumOfPages",
    }),
    paginationButtons() {
      if (this.numOfPages < 5) {
        const res = [];
        for (let i = 1; i <= this.numOfPages; i++) {
          res.push(i);
        }
        return res;
      } else if(this.pagination.num === 0) {
        return [
          this.pagination.num + 1,
          this.pagination.num + 2,
          this.pagination.num + 3,
          this.pagination.num + 4,
          this.pagination.num + 5,
        ];
      } else if (this.pagination.num === 1) {
        return [
          this.pagination.num,
          this.pagination.num + 1,
          this.pagination.num + 2,
          this.pagination.num + 3,
          this.pagination.num + 4,
        ];
      } else if (this.pagination.num === this.numOfPages - 1) {
        return [
          this.pagination.num - 3,
          this.pagination.num - 2,
          this.pagination.num - 1,
          this.pagination.num,
          this.pagination.num + 1,
        ];
      } else if (this.pagination.num === this.numOfPages - 2) {
        return [
          this.pagination.num - 2,
          this.pagination.num - 1,
          this.pagination.num,
          this.pagination.num + 1,
          this.pagination.num + 2,
        ];
      } else {
        return [
          this.pagination.num - 1,
          this.pagination.num,
          this.pagination.num + 1,
          this.pagination.num + 2,
          this.pagination.num + 3,
        ];
      }   
    }
  },
  async beforeCreated() {
    await this.getPagination(this.pagination);
  },
  async created() {
    try {
      if (this.suggestion) {
        await this.getHomeSuggestion();
      } else if (this.pagination) {
        await this.getPagination(this.pagination);
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

.button_add {
  width: 100%;
  height: 61px;
  border: 2px solid #1b1b1b;
  background-color: #fff;
  font-size: 16px;
  font-weight: 600;
  font-family: Poppins, sans-serif;
  color: #1b1b1b;
  cursor: pointer;
  transition: all 0.2s ease;
}

.button_add:hover {
  background-color: #1b1b1b;
  color: #fff;
}

.button_add:active {
  background-color: #fff;
  color: #1b1b1b;
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