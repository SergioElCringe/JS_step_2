<template>
  <div>
    <div class="footer_overlay"></div>
    <footer class="footer">
        <div class="footer_background">
        </div>
        <div class="container">
            <div class="row">
                <div class="col">
                    <div class="footer_content d-flex flex-lg-row flex-column align-items-center justify-content-lg-start justify-content-center">
                        <div class="footer_logo"><a href="#">Sublime.</a></div>
                        <Social class="footer_social ml-lg-auto" />
                    </div>
                </div>
            </div>
        </div>
    </footer>
 </div>
</template>

<script>
import Social from './UI/Social.vue';

export default {
    name: 'Footer',
    components: { Social },    
};
</script>