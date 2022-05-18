<template>
  <div class="col-lg-8 contact_col">
    <div class="get_in_touch">
      <div class="section_title">Get in Touch</div>
      <div class="section_subtitle">Say hello</div>
      <div class="contact_form_container">
        <form action="#" id="contact_form" class="contact_form">
          <div class="row">
            <div class="col-xl-6">
              <label for="contact_name">First Name*</label>
              <input
                type="text"
                id="contact_name"
                class="contact_input"
                required="required"
                v-model="name"
              />
            </div>
            <div class="col-xl-6 last_name_col">
              <label for="contact_last_name">Last Name*</label>
              <input
                type="text"
                id="contact_last_name"
                class="contact_input"
                required="required"
                v-model="surname"
              />
            </div>
          </div>
          <div>
            <label for="contact_company">Subject</label>
            <input 
              type="text" 
              id="contact_company" 
              class="contact_input"
              v-model="subject" 
            />
          </div>
          <div>
            <label for="contact_textarea">Message*</label>
            <textarea
              id="contact_textarea"
              class="contact_input contact_textarea"
              required="required"
              v-model="message"
            ></textarea>
          </div>
          <button 
            class="button contact_button" 
            @click.prevent="send({ name, surname, subject, message })"
          >
            <span>Send Message</span>
          </button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'GetInTouch',
  data() {
    return {
      name: '',
      surname: '',
      subject: '',
      message: '',
    };
  },

  methods: {
    sendMessage(val) {
      this.$emit('sendMessage', val);
    },

    send(val) {
      this.sendMessage(val);
      this.name = '';
      this.surname = '';
      this.subject = '';
      this.message = '';
    },
  },
};
</script>