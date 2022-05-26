<template>
  <div class="super_container">
    <!-- Home -->

    <div class="home">
      <div class="home_container">
        <div class="home_background"></div>
        <div class="home_content_container">
          <div class="container">
            <div class="row">
              <div class="col">
                <div class="home_content">
                  <div class="breadcrumbs">
                    <ul>
                      <li><router-link to="/">Home</router-link></li>
                      <li>Contact</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Contact -->

    <div class="contact">
      <div class="container">
        <div class="row">
          <ComponentForm />
          <ContactInfo /> 
        </div>
        <MapGoogle />
      </div>
    </div>
  </div>
</template>

<script>
import ComponentForm from "../componentsPage/Contact/ComponentForm.vue";
import MapGoogle from '../componentsPage/Contact/MapGoogle.vue'
import ContactInfo from "../componentsPage/Contact/ContactInfo.vue";
export default {
  components: { ComponentForm, MapGoogle, ContactInfo},
  name: "Contact",
};
</script>

<style>
.home_background {
  background-image: url(https://raw.githubusercontent.com/SergioElCringe/JS_step_2/init/PROJECT/BASE__PROJECT/images/contact.jpg);
}
</style>