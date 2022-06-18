<template>
  <nav class="main_nav" id="main_nav" v-if="ready">
    <ul>
      <NavSubMenu
        v-for="item in items"
        :key="item.text"
        :item="item"
        :ready="ready"
      />
    </ul>
  </nav>
</template>

<script>
import NavSubMenu from "./NavSubMenu.vue";
import { nav } from "@api";
import { mapState, mapGetters, mapActions } from "vuex";


export default {
  name: "Nav",
  components: { NavSubMenu },
  data: function () {
    return {
      URL: "/api/menu",
      items: [],
      ready: false
    };
  },
  methods: {
    ...mapActions({
      getNav: "Nav/getNav",
    }),
  },
  computed: {
    ...mapGetters({
      navItems: "Nav/navItems",
    }),
  },
  async created() {
    try {
      await this.getNav();
      this.items = this.navItems;
    } catch (err) {
      throw err;
    }
    finally {
      this.ready = !!this.items.length;
    }
  },
};
</script>

<style>
.main_nav {
	margin-left: 156px;
}
.main_nav > ul > li {
	display: inline-block;
	position: relative;
}
.main_nav > ul > li:not(:last-child) {
	margin-right: 46px;
}
.main_nav > ul > li > a {
	font-size: 16px;
	font-weight: 600;
	color: #767676;
	-webkit-transition: all 200ms ease;
	-moz-transition: all 200ms ease;
	-ms-transition: all 200ms ease;
	-o-transition: all 200ms ease;
	transition: all 200ms ease;
}
.main_nav > ul > li > a:hover,
.main_nav > ul > li.active > a {
	color: #1b1b1b;
}
.main_nav ul li.hassubs::after {
	position: absolute;
	top: 50%;
	-webkit-transform: translateY(-50%);
	-moz-transform: translateY(-50%);
	-ms-transform: translateY(-50%);
	-o-transform: translateY(-50%);
	transform: translateY(-50%);
	left: calc(100% + 3px);
	font-family: "FontAwesome";
	font-size: 10px;
	content: "\f078";
	color: #767676;
}
.main_nav ul li:hover::after,
.main_nav ul li.active::after {
	color: #1b1b1b;
}
@media only screen and (max-width: 1199px) {
	.main_nav {
		margin-left: 50px;
	}
	.search {
		margin-left: 25px;
	}
	.main_nav > ul > li:not(:last-child) {
		margin-right: 40px;
	}
}

@media only screen and (max-width: 991px) {
	.main_nav	{
		display: none;
	}
}

</style>