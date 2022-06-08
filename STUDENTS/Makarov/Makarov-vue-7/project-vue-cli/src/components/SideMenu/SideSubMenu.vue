<template>
    <li class="page_menu_item has-children">
        <a @click.prevent="openSubMenu" :href="subMenu.link">
            {{ subMenu.text }}
            <i class="fa fa-angle-down" v-if="subMenu?.items"></i>
        </a>
        <ul class="page_menu_selection" 
            v-if="subMenu?.items"
            v-show="isVisible"
        >
            <SideMenuItem v-for="item in subMenu.items" 
                :key="item"
                :item="item"
            />
        </ul>

    </li>
</template>

<script>
import SideMenuItem from './SideMenuItem.vue';

export default {
    name: "SideSubMenu",
    props: ["subMenu"],
    components: { SideMenuItem },
    data: function() {
        return {
            clicked: false,
            isVisible: false
        }
    },
    methods: {
        openSubMenu() {
            if(this.clicked) {
                this.$router.push(this.subMenu.link);
            }
            this.clicked = true;
            this.isVisible = !this.isVisible;
        }
    }
}
</script>

<style>

</style>
