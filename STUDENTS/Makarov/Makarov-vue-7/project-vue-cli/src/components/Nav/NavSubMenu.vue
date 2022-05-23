<template>
  <li :class='item?.items ? `hassubs` : ``'>
    <router-link :to='item.link'>{{ item.text  }}</router-link>
    <ul v-if='item?.items'>
      <NavSubMenuItem
        v-for='item in items'
        :key='item.text'
        :item='item'
      />
    </ul>
  </li>
</template>

<script>
import NavSubMenuItem from './NavSubMenuItem.vue'
export default {
  name: 'NavSubMenu',
  props: ['item'],
  components: { NavSubMenuItem },
  data: function() {
    return {
      items: this.item.items,
    }
  },
};
</script>

<style>
.hassubs ul {
	position: absolute;
	right: -15px;
	top: calc(100% + 20px);
	text-align: right;
	background: #FFFFFF;
	padding-right: 25px;
	padding-left: 35px;
	padding-top: 25px;
	padding-bottom: 25px;
	visibility: hidden;
	opacity: 0;
	-webkit-transition: all 200ms ease;
	-moz-transition: all 200ms ease;
	-ms-transition: all 200ms ease;
	-o-transition: all 200ms ease;
	transition: all 200ms ease;
}
.hassubs:hover ul {
	visibility: visible;
	opacity: 1;
	top: calc(100% + 0px);
}
.hassubs ul li:not(:last-child) {
	margin-bottom: 11px;
}
.hassubs ul li a {
	font-size: 14px;
	font-weight: 600;
	color: #767676;
	-webkit-transition: all 200ms ease;
	-moz-transition: all 200ms ease;
	-ms-transition: all 200ms ease;
	-o-transition: all 200ms ease;
	transition: all 200ms ease;
}
.hassubs ul li a:hover {
	color: #1b1b1b;
}
</style>