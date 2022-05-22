<template>
  <div class="col-lg-8 contact_col">
    <div class="get_in_touch">
      <div class="section_title">Get in Touch</div>
      <div class="section_subtitle">Say hello</div>
      <div class="contact_form_container">
        <ContactForm 
          :formData="formData"
          @sendMessage="sendForm"
        />  
      </div>
    </div>
  </div>
</template>

<script>
import ContactForm from './UI/ContactForm.vue';
import { mapActions } from 'vuex';

export default {
  name: 'GetInTouch',
  components: { ContactForm },
  data() {
    return {
      formData: {
        firstName: '',
        secondName: '',
        subject: '',
        message: '',
      },
    };
  },

  methods: {
    ...mapActions({
      sendMessage: 'Contact/sendMessage'
    }),

    async sendForm(value) {
      await this.sendMessage(value);
      this.formData = {
        firstName: '',
        secondName: '',
        subject: '',
        message: '',
      };
    },
  },
};
</script>