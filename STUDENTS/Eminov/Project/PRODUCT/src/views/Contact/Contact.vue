<template>
  <div>
    <HomePageBanner 
      :name="'contact'"
    />
    <div class="contact">
      <div class="container">
        <div class="row">
            <GetInTouch 
              @sendMessage="sendMessage"
            />
            <ContactInfo />
        </div>
        <GoogleMap />
      </div>
    </div>
  </div>
</template>

<script>
import HomePageBanner from '@components/pages/UI/HomePageBanner.vue';
import GetInTouch from './components/GetInTouch.vue';
import ContactInfo from './components/UI/ContactInfo.vue';
import GoogleMap from './components/UI/GoogleMap.vue';
import { mapActions } from 'vuex';

export default {
  name: 'Contact',
  components: { GetInTouch, ContactInfo, HomePageBanner, GoogleMap },
  methods: {
    ...mapActions({
      sendMessage: 'Contact/sendMessage',
    }),
  },
};
</script>