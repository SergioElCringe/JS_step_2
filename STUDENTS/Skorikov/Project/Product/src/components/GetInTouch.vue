<template>
  <div class="col-lg-8 contact_col">
    <div class="get_in_touch">
      <div class="section_title">Get in Touch</div>
      <div class="section_subtitle">Say hello</div>
      <div class="contact_form_container">
        <form action="#" id="contact_form" class="contact_form">
          <div class="row">
            <div class="col-xl-6">
              <!-- Name -->
              <label for="contact_name">First Name*</label>
              <input
                type="text"
                id="contact_name"
                class="contact_input"
                required="required"
              />
            </div>
            <div class="col-xl-6 last_name_col">
              <!-- Last Name -->
              <label for="contact_last_name">Last Name*</label>
              <input
                type="text"
                id="contact_last_name"
                class="contact_input"
                required="required"
              />
            </div>
          </div>
          <div>
            <!-- Subject -->
            <label for="contact_company">Subject</label>
            <input type="text" id="contact_company" class="contact_input" />
          </div>
          <div>
            <label for="contact_textarea">Message*</label>
            <textarea
              id="contact_textarea"
              class="contact_input contact_textarea"
              required="required"
            ></textarea>
          </div>
          <button class="button contact_button">Send Message</button>
        </form>
      </div>
    </div>
  </div>
</template>