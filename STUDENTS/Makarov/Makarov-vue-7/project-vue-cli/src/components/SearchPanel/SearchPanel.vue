<template>
    <div class='search_panel trans_300' :class="{ active: searchToggle }">
        <div class='container'>
            <div class='row'>
                <div class='col'>
                    <div class='search_panel_content d-flex flex-row align-items-center justify-content-end'>
                        <form action='#'>
                            <input type='text' class='search_input' placeholder='Search' required='required'>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
    name: 'SearchPanel',
	computed: {
		...mapGetters({
			searchToggle: "Search/searchToggle"
		}),
	}
}
</script>

<style>
.search_panel {
	position: absolute;
	left: 0;
	bottom: 0;
	width: 100%;
	background: #e4e4e4;
	z-index: -1;
}
.search_panel.active {
	bottom: -80px;
}
.search_panel_content {
	height: 80px;
}
.search_input {
	width: 300px;
	height: 40px;
	border: none;
	outline: none;
	border-radius: 3px;
	padding-left: 20px;
}
.search_input::-webkit-input-placeholder {
	font-size: 14px !important;
	font-weight: 400 !important;
	font-style: italic;
	color: #767676 !important;
}
.search_input:-moz-placeholder {
	font-size: 14px !important;
	font-weight: 400 !important;
	font-style: italic;
	color: #767676 !important;
}
.search_input::-moz-placeholder {
	font-size: 14px !important;
	font-weight: 400 !important;
	font-style: italic;
	color: #767676 !important;
} 
.search_input:-ms-input-placeholder { 
	font-size: 14px !important;
	font-weight: 400 !important;
	font-style: italic;
	color: #767676 !important;
}
.search_input::input-placeholder {
	font-size: 14px !important;
	font-weight: 400 !important;
	font-style: italic;
	color: #767676 !important;
}
</style>