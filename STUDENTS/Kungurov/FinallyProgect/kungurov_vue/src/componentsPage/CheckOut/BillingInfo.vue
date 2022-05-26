<template>
  <div class="col-lg-6">
    <div class="billing checkout_section">
      <div class="section_title">Billing Address</div>
      <div class="section_subtitle">Enter your address info</div>
      <div class="checkout_form_container">
        <form action="#" id="checkout_form" class="checkout_form">
          <div class="row">
            <div class="col-xl-6">
              <!-- Name -->
              <label for="checkout_name">First Name*</label>
              <input
                type="text"
                id="checkout_name"
                class="checkout_input"
                required="required"
              />
            </div>
            <div class="col-xl-6 last_name_col">
              <!-- Last Name -->
              <label for="checkout_last_name">Last Name*</label>
              <input
                type="text"
                id="checkout_last_name"
                class="checkout_input"
                required="required"
              />
            </div>
          </div>
          <div>
            <!-- Company -->
            <label for="checkout_company">Company</label>
            <input type="text" id="checkout_company" class="checkout_input" />
          </div>
          <div>
            <!-- Country -->
            <label for="checkout_country">Country*</label>
            <select
              name="checkout_country"
              id="checkout_country"
              class="dropdown_item_select checkout_input"
              require="required"
            >
              <option></option>
              <option>Lithuania</option>
              <option>Sweden</option>
              <option>UK</option>
              <option>Italy</option>
            </select>
          </div>
          <div>
            <!-- Address -->
            <label for="checkout_address">Address*</label>
            <input
              type="text"
              id="checkout_address"
              class="checkout_input"
              required="required"
            />
            <input
              type="text"
              id="checkout_address_2"
              class="checkout_input checkout_address_2"
              required="required"
            />
          </div>
          <div>
            <!-- Zipcode -->
            <label for="checkout_zipcode">Zipcode*</label>
            <input
              type="text"
              id="checkout_zipcode"
              class="checkout_input"
              required="required"
            />
          </div>
          <div>
            <!-- City / Town -->
            <label for="checkout_city">City/Town*</label>
            <select
              name="checkout_city"
              id="checkout_city"
              class="dropdown_item_select checkout_input"
              require="required"
            >
              <option></option>
              <option>City</option>
              <option>City</option>
              <option>City</option>
              <option>City</option>
            </select>
          </div>
          <div>
            <!-- Province -->
            <label for="checkout_province">Province*</label>
            <select
              name="checkout_province"
              id="checkout_province"
              class="dropdown_item_select checkout_input"
              require="required"
            >
              <option></option>
              <option>Province</option>
              <option>Province</option>
              <option>Province</option>
              <option>Province</option>
            </select>
          </div>
          <div>
            <!-- Phone no -->
            <label for="checkout_phone">Phone no*</label>
            <input
              type="phone"
              id="checkout_phone"
              class="checkout_input"
              required="required"
            />
          </div>
          <div>
            <!-- Email -->
            <label for="checkout_email">Email Address*</label>
            <input
              type="phone"
              id="checkout_email"
              class="checkout_input"
              required="required"
            />
          </div>
          <v-subheader>Speed dial direction</v-subheader>
          <v-radio-group v-model="direction" hide-details>
            <v-radio 
            value="conditions" 
            label="Terms and conditions"
            ></v-radio>
            <v-radio 
            value="account" 
            label="Create an account"
            ></v-radio>
            <v-radio 
            value="newsletter" 
            label="Subscribe to our newsletter"
            ></v-radio>
          </v-radio-group>
          <v-col cols="12" sm="6" md="4" />
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    data: () => ({
      conditions: false,
      account: false,
      newsletter: false,
    }),

    watch: {
      conditions (val) {
        this.conditions = !val
      },
      account (val) {
        this.account = !val
      },
      newsletter (val) {
        this.newsletter = !val
      },
    },
  }
</script>

<style>
</style>