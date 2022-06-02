<template>
  <div>
    <HomePageBanner :name="'contact'"/>
    <div class="contact">
      <div class="container">
        <div class="row">
            <GetInTouch />
            <ContactInfo />
        </div>
        <GoogleMap />
      </div>
    </div>
  </div>
</template>

<script>
import HomePageBanner from '../../components/pages/UI/HomePageBanner.vue';
import GetInTouch from '../../components/GetInTouch.vue';
import ContactInfo from './components/ContactInfo.vue';
import GoogleMap from './components/GoogleMap.vue';

export default {
  name: 'Contact',
  components: { GetInTouch, ContactInfo, HomePageBanner, GoogleMap },
};
</script>

<style>
</style>