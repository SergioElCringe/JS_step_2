<template>
  		<div class="menu trans_300" :class="{ active: sideMenuToggle }" v-if="sideMenuItems">
			<div class="menu_container">
				<div class="page_menu_content">

					<div class="page_menu_search">
						<form action="#">
							<input type="search" required="required" class="page_menu_search_input"
								placeholder="Search for products...">
						</form>
					</div>

					<ul class="page_menu_nav">
						<SideSubMenu v-for="item in sideMenuItems"
							:key="item.link"
							:subMenu="item"
						/>
					</ul>
				</div>
			</div>

			<CloseBtn
                :type="btnType"
                :key="btnType"
            />

            <Socials class="menu_social" />
		</div>
</template>

<script>
import SideSubMenu from './SideSubMenu.vue';
import CloseBtn from './CloseBtn.vue';
import Socials from '../Socials/Socials.vue'
import { mapState, mapGetters, mapActions } from "vuex";

export default {
    name: 'SideMenu',
    components: { CloseBtn, Socials, SideSubMenu },
    data: function() {
        return {
            btnType: 'menu_close',
        }
    },
	computed: {
		...mapGetters({
			sideMenuToggle: "SideMenu/sideMenuToggle",
			sideMenuItems: "Nav/navItems"
		}),
	},
}
</script>

<style>

.menu {
	position: fixed;
	top: 0;
	right: -400px;
	width: 400px;
	height: 100vh;
	background: #e4e4e4;
	z-index: 101;
}
.menu.active {
	right: 0;
}
.menu_container {
	width: 100%;
	height: 0px;
	padding-top: 130px;
}
.menu.active .menu_container {
	height: 500px;
}
.page_menu_content {
	padding-left: 30px;
	padding-right: 30px;
	overflow: hidden;
	text-align: right;
}
.page_menu_search {
	display: none;
	width: 100%;
	margin-top: 30px;
	margin-bottom: 30px;
}
.page_menu_search_input {
	width: 100%;
	height: 40px;
	background: #FFFFFF;
	border: none;
	outline: none;
	padding-left: 25px;
}
.page_menu_item {
	display: block;
	position: relative;
}
.page_menu_nav > li {
	border-bottom: solid 1px rgba(0,0,0,0.2);
}
.page_menu_item > a {
	display: flex;
	justify-content: space-between;
	color: #1b1b1b;
	font-weight: 700;
	line-height: 50px;
	height: 50px;
	font-size: 16px;
	-webkit-transition: all 200ms ease;
	-moz-transition: all 200ms ease;
	-ms-transition: all 200ms ease;
	-o-transition: all 200ms ease;
	transition: all 200ms ease;
}
.page_menu_item > a > span {
	width: 80%;
	text-align: left;
}

.page_menu_item > a > i {
	width: 20%;
	text-align: right;
}

.page_menu_item > a:hover {
	color: #c3c1cc;
}
.page_menu_item a i {
	display: none;
	line-height: 50px;
}
.page_menu_item.has-children > a > i {
	display: inline-block;
}
.page_menu_selection {
	margin: 0;
	width: 100%;
	overflow: hidden;
	z-index: 1;
}
.page_menu_selection li {
	padding-right: 15px;
	line-height: 40px;
}
.page_menu_selection li:last-child {
	padding-bottom: 20px;
}
.page_menu_selection li a {
	display: block;
	color: #1b1b1b;
	border-bottom: solid 1px rgba(0,0,0,0.2);
	font-size: 14px;
	-webkit-transition: opacity 0.3s ease;
	-moz-transition: opacity 0.3s ease;
	-ms-transition: opacity 0.3s ease;
	-o-transition: opacity 0.3s ease;
	transition: all 0.3s ease;
}
.page_menu_selection li a:hover {
	color: #c3c1cc;
}
.page_menu_selection li:last-child a {
	border-bottom: none;
}
.menu_social {
	position: absolute;
	right: 30px;
	bottom: 15px;
}
.menu_social ul li {
	display: inline-block;
}
.menu_social ul li:not(:last-child) {
	margin-right: 18px;
}
.menu_social ul li a i {
	font-size: 16px;
	color: #b5b5b5;
	padding: 5px;
	-webkit-transition: all 200ms ease;
	-moz-transition: all 200ms ease;
	-ms-transition: all 200ms ease;
	-o-transition: all 200ms ease;
	transition: all 200ms ease;
}
.menu_social ul li a i:hover {
	color: #1b1b1b;
}
.menu_close {
	position: absolute;
	top: 25px;
	right: 25px;
	cursor: pointer;
}
.menu_close i {
	font-size: 16px;
	color: #1b1b1b;
	padding: 5px;
}
@media only screen and (max-width: 575px) {
	.menu {
		width: 100vw;
		right: -100vw;
	}
	.menu_container {
		padding-top: 80px;
	}
	.page_menu_item > a,
	.page_menu_selection li a {
		font-size: 13px;
		height: 40px;
		line-height: 40px;
	}
}
</style>
