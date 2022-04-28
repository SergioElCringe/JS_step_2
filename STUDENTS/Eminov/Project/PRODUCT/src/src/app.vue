<template>
  <div class="super_container">

        <!-- Header -->
        <header class="header">
            <div class="header_container">
                <div class="container">
                    <div class="row">
                        <div class="col">
                            <div class="header_content d-flex flex-row align-items-center justify-content-start">
                                <div class="logo"><a href="#">Sublime.</a></div>
                                <nav class="main_nav">
                                    <MenuNavigation />
                                </nav>
                                <div class="header_extra ml-auto">
                                    <Cart ref="cart" />
                                    <div class="search">
                                        <div class="search_icon">
                                            <img src="https://raw.githack.com/SergioElCringe/JS_step_1/main/students/Eminov/Project/Eminov-hw-8/src/assets/img/glass.svg">
                                        </div>
                                    </div>
                                    <div class="hamburger"><i class="fa fa-bars" aria-hidden="true"></i></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Search Panel -->
            <div class="search_panel trans_300">
                <div class="container">
                    <div class="row">
                        <div class="col">
                            <div class="search_panel_content d-flex flex-row align-items-center justify-content-end">
                                <form action="#">
                                    <input type="text" class="search_input" placeholder="Search" required="required">
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Social -->
            <div class="header_social">
                <ul>
                    <li><a href="#"><i class="fa fa-pinterest" aria-hidden="true"></i></a></li>
                    <li><a href="#"><i class="fa fa-instagram" aria-hidden="true"></i></a></li>
                    <li><a href="#"><i class="fa fa-facebook" aria-hidden="true"></i></a></li>
                    <li><a href="#"><i class="fa fa-twitter" aria-hidden="true"></i></a></li>
                </ul>
            </div>
        </header>

        <!-- Menu -->

        <div class="menu menu_mm trans_300">
            <div class="menu_container menu_mm">
                <div class="page_menu_content">
                    <div class="page_menu_search menu_mm">
                        <form action="#">
                            <input type="search" required="required" class="page_menu_search_input menu_mm" placeholder="Search for products...">
                        </form>
                    </div>
                    <ul class="page_menu_nav menu_mm">
                        <li class="page_menu_item has-children menu_mm">
                            <a href="index.html">Home<i class="fa fa-angle-down"></i></a>
                            <ul class="page_menu_selection menu_mm">
                                <li class="page_menu_item menu_mm"><a href="categoies.html">Categories<i class="fa fa-angle-down"></i></a></li>
                                <li class="page_menu_item menu_mm"><a href="product.html">Product<i class="fa fa-angle-down"></i></a></li>
                                <li class="page_menu_item menu_mm"><a href="cart.html">Cart<i class="fa fa-angle-down"></i></a></li>
                                <li class="page_menu_item menu_mm"><a href="checkout.html">Checkout<i class="fa fa-angle-down"></i></a></li>
                                <li class="page_menu_item menu_mm"><a href="contact.html">Contact<i class="fa fa-angle-down"></i></a></li>
                            </ul>
                        </li>
                        <li class="page_menu_item has-children menu_mm">
                            <a href="categoies.html">Categories<i class="fa fa-angle-down"></i></a>
                            <ul class="page_menu_selection menu_mm">
                                <li class="page_menu_item menu_mm"><a href="categoies.html">Category<i class="fa fa-angle-down"></i></a></li>
                                <li class="page_menu_item menu_mm"><a href="categoies.html">Category<i class="fa fa-angle-down"></i></a></li>
                                <li class="page_menu_item menu_mm"><a href="categoies.html">Category<i class="fa fa-angle-down"></i></a></li>
                                <li class="page_menu_item menu_mm"><a href="categoies.html">Category<i class="fa fa-angle-down"></i></a></li>
                            </ul>
                        </li>
                        <li class="page_menu_item menu_mm"><a href="index.html">Accessories<i class="fa fa-angle-down"></i></a></li>
                        <li class="page_menu_item menu_mm"><a href="#">Offers<i class="fa fa-angle-down"></i></a></li>
                        <li class="page_menu_item menu_mm"><a href="contact.html">Contact<i class="fa fa-angle-down"></i></a></li>
                    </ul>
                </div>
            </div>
            <div class="menu_close"><i class="fa fa-times" aria-hidden="true"></i></div>
            <div class="menu_social">
                <ul>
                    <li><a href="#"><i class="fa fa-pinterest" aria-hidden="true"></i></a></li>
                    <li><a href="#"><i class="fa fa-instagram" aria-hidden="true"></i></a></li>
                    <li><a href="#"><i class="fa fa-facebook" aria-hidden="true"></i></a></li>
                    <li><a href="#"><i class="fa fa-twitter" aria-hidden="true"></i></a></li>
                </ul>
            </div>
        </div>

        <!-- Home -->
        <div class="home">
            <div class="home_slider_container">
                <!-- Home Slider -->
                <div class="owl-carousel owl-theme home_slider">
                    <!-- Slider Item -->
                    <div class="owl-item home_slider_item">
                        <div class="home_slider_background" style="background-image:url(https://raw.githubusercontent.com/SergioElCringe/JS_step_1/main/TEST_FTP/static/home_slider_1.jpg)">
                        </div>
                        <div class="home_slider_content_container">
                            <div class="container">
                                <div class="row">
                                    <div class="col">
                                        <div class="home_slider_content" data-animation-in="fadeIn" data-animation-out="animate-out fadeOut">
                                            <div class="home_slider_title">A new Online Shop experience.</div>
                                            <div class="home_slider_subtitle">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam a ultricies metus. Sed nec molestie eros. Sed viverra velit venenatis fermentum luctus.</div>
                                            <div class="button button_light home_button"><a href="#">Shop Now</a></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Slider Item -->
                    <div class="owl-item home_slider_item">
                        <div class="home_slider_background" style="background-image:url(https://raw.githubusercontent.com/SergioElCringe/JS_step_1/main/TEST_FTP/static/home_slider_1.jpg)">
                        </div>
                        <div class="home_slider_content_container">
                            <div class="container">
                                <div class="row">
                                    <div class="col">
                                        <div class="home_slider_content" data-animation-in="fadeIn" data-animation-out="animate-out fadeOut">
                                            <div class="home_slider_title">A new Online Shop experience.</div>
                                            <div class="home_slider_subtitle">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam a ultricies metus. Sed nec molestie eros. Sed viverra velit venenatis fermentum luctus.</div>
                                            <div class="button button_light home_button"><a href="#">Shop Now</a></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Slider Item -->
                    <div class="owl-item home_slider_item">
                        <div class="home_slider_background" style="background-image:url(https://raw.githubusercontent.com/SergioElCringe/JS_step_1/main/TEST_FTP/static/home_slider_1.jpg)">
                        </div>
                        <div class="home_slider_content_container">
                            <div class="container">
                                <div class="row">
                                    <div class="col">
                                        <div class="home_slider_content" data-animation-in="fadeIn" data-animation-out="animate-out fadeOut">
                                            <div class="home_slider_title">A new Online Shop experience.</div>
                                            <div class="home_slider_subtitle">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam a ultricies metus. Sed nec molestie eros. Sed viverra velit venenatis fermentum luctus.</div>
                                            <div class="button button_light home_button"><a href="#">Shop Now</a></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Home Slider Dots -->
                <div class="home_slider_dots_container">
                    <div class="container">
                        <div class="row">
                            <div class="col">
                                <div class="home_slider_dots">
                                    <ul id="home_slider_custom_dots" class="home_slider_custom_dots">
                                        <li class="home_slider_custom_dot active">01.</li>
                                        <li class="home_slider_custom_dot">02.</li>
                                        <li class="home_slider_custom_dot">03.</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Ads -->

        <div class="avds">
            <div class="avds_container d-flex flex-lg-row flex-column align-items-start justify-content-between">
                <div class="avds_small">
                    <div class="avds_background" style="background-image:url(https://raw.githack.com/SergioElCringe/JS_step_2/init/PROJECT/BASE__PROJECT/images/avds_small.jpg)">
                    </div>
                    <div class="avds_small_inner">
                        <div class="avds_discount_container">
                            <img src="https://raw.githack.com/SergioElCringe/JS_step_2/init/PROJECT/BASE__PROJECT/images/discount.png" alt="">
                            <div>
                                <div class="avds_discount">
                                    <div>20<span>%</span></div>
                                    <div>Discount</div>
                                </div>
                            </div>
                        </div>
                        <div class="avds_small_content">
                            <div class="avds_title">Smart Phones</div>
                            <div class="avds_link"><a href="categoies.html">See More</a></div>
                        </div>
                    </div>
                </div>
                <div class="avds_large">
                    <div class="avds_background" style="background-image:url(https://raw.githack.com/SergioElCringe/JS_step_2/init/PROJECT/BASE__PROJECT/images/avds_large.jpg)">
                    </div>
                    <div class="avds_large_container">
                        <div class="avds_large_content">
                            <div class="avds_title">Professional Cameras</div>
                            <div class="avds_text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam a ultricies metus. Sed nec molestie eros. Sed viver ra velit venenatis fermentum luctus.
                            </div>
                            <div class="avds_link avds_link_large"><a href="categoies.html">See More</a></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Products -->
        <div class="products">
            <div class="container">
                <Catalog />
            </div>
        </div>

        <!-- Ad -->
        <div class="avds_xl">
            <div class="container">
                <div class="row">
                    <div class="col">
                        <div class="avds_xl_container clearfix">
                            <div class="avds_xl_background" style="background-image:url(https://raw.githack.com/SergioElCringe/JS_step_2/init/PROJECT/BASE__PROJECT/images/avds_xl.jpg)">
                            </div>
                            <div class="avds_xl_content">
                                <div class="avds_title">Amazing Devices</div>
                                <div class="avds_text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam a ultricies metus.</div>
                                <div class="avds_link avds_xl_link"><a href="categoies.html">See More</a></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Icon Boxes -->
        <div class="icon_boxes">
            <div class="container">
                <div class="row icon_box_row">
                    <!-- Icon Box -->
                    <div class="col-lg-4 icon_box_col">
                        <div class="icon_box">
                            <div class="icon_box_image"><img src="https://raw.githack.com/SergioElCringe/JS_step_2/init/PROJECT/BASE__PROJECT/images/icon_1.svg" alt=""></div>
                            <div class="icon_box_title">Free Shipping Worldwide</div>
                            <div class="icon_box_text">
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam a ultricies metus. Sed nec molestie.</p>
                            </div>
                        </div>
                    </div>

                    <!-- Icon Box -->
                    <div class="col-lg-4 icon_box_col">
                        <div class="icon_box">
                            <div class="icon_box_image"><img src="https://raw.githack.com/SergioElCringe/JS_step_2/init/PROJECT/BASE__PROJECT/images/icon_2.svg" alt=""></div>
                            <div class="icon_box_title">Free Returns</div>
                            <div class="icon_box_text">
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam a ultricies metus. Sed nec molestie.</p>
                            </div>
                        </div>
                    </div>

                    <!-- Icon Box -->
                    <div class="col-lg-4 icon_box_col">
                        <div class="icon_box">
                            <div class="icon_box_image"><img src="https://raw.githack.com/SergioElCringe/JS_step_2/init/PROJECT/BASE__PROJECT/images/icon_3.svg" alt=""></div>
                            <div class="icon_box_title">24h Fast Support</div>
                            <div class="icon_box_text">
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam a ultricies metus. Sed nec molestie.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Newsletter -->

        <div class="newsletter">
            <div class="container">
                <div class="row">
                    <div class="col">
                        <div class="newsletter_border"></div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-lg-8 offset-lg-2">
                        <div class="newsletter_content text-center">
                            <div class="newsletter_title">Subscribe to our newsletter</div>
                            <div class="newsletter_text">
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam a ultricies metus. Sed nec molestie eros</p>
                            </div>
                            <div class="newsletter_form_container">
                                <form action="#" id="newsletter_form" class="newsletter_form">
                                    <input type="email" class="newsletter_input" required="required">
                                    <button class="newsletter_button trans_200"><span>Subscribe</span></button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Footer -->
        <div class="footer_overlay"></div>
        <footer class="footer">
            <div class="footer_background" style="background-image:url(https://raw.githack.com/SergioElCringe/JS_step_2/init/PROJECT/BASE__PROJECT/images/footer.jpg)">
            </div>
            <div class="container">
                <div class="row">
                    <div class="col">
                        <div class="footer_content d-flex flex-lg-row flex-column align-items-center justify-content-lg-start justify-content-center">
                            <div class="footer_logo"><a href="#">Sublime.</a></div>
                            <div class="footer_social ml-lg-auto">
                                <ul>
                                    <li><a href="#"><i class="fa fa-pinterest" aria-hidden="true"></i></a></li>
                                    <li><a href="#"><i class="fa fa-instagram" aria-hidden="true"></i></a></li>
                                    <li><a href="#"><i class="fa fa-facebook" aria-hidden="true"></i></a></li>
                                    <li><a href="#"><i class="fa fa-twitter" aria-hidden="true"></i></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    </div>
</template>

<script>
import Catalog from './components/Catalog.vue';
import MenuNavigation from './components/Menu.vue';
import Cart from './components/Cart.vue';
export default {
    name: 'app',
    components: { Catalog, MenuNavigation, Cart }
}
</script>

<style>

</style>