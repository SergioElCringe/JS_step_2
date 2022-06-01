<template>
  <div class="hamburger" @click="toggleSideMenu">
	  <i class="fa fa-bars" aria-hidden="true"></i>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
    name: 'Hamburger',
	methods: {
		...mapActions({
			toggleSideMenu: "SideMenu/toggleSideMenu"
		}),
	}
}
</script>

<style>
.hamburger {
	display: none;
	margin-left: 30px;
	cursor: pointer;
	margin-right: 4px;
	-webkit-transform: translateY(2px);
	-moz-transform: translateY(2px);
	-ms-transform: translateY(2px);
	-o-transform: translateY(2px);
	transform: translateY(2px);
}
.hamburger i {
	font-size: 18px;
	color: #1b1b1b;
}
@media only screen and (max-width: 991px) {
	.hamburger	{
		display: inline-block;
	}
}
</style>