<template>
    <header class="header">
        <div class="header_container">
            <div class="container">
                <div class="row">
                    <div class="col">
                        <div id="header" class="header_content d-flex flex-row align-items-center justify-content-start">
                            <Logo/>
                            <Nav/>
                            <div class="header_extra ml-auto">
                                <Cart/>
                                <SearchIcon/>
                                <Hamburger/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <SearchPanel/>
        <Socials class="header_social" />
    </header>
</template>

<script>
import Nav from '../Nav/Nav.vue';
import Cart from '../Cart/Cart.vue';
import SearchIcon from '../SearchIcon/SearchIcon.vue';
import Hamburger from '../Hamburger/Hamburger.vue';
import Socials from '../Socials/Socials.vue';
import Logo from '../Logo/Logo.vue';
import SearchPanel from '../SearchPanel/SearchPanel.vue';

export default {
    name: 'Header',
    components: { Nav, Cart, SearchIcon, Hamburger, Socials, Logo, SearchPanel}
}
</script>

<style>

</style>