<template>
  <v-form>
    <v-row>
      <v-col>
        <v-text-field
          v-model="formData.firstName"
          label="First Name*"
          variant="filled"
          :rules="[rules.required, rules.cyrilic]"
        />
      </v-col>
      <v-col>
        <v-text-field
          v-model="formData.secondName"
          label="Second Name*"
          variant="filled"
          :rules="[rules.required, rules.cyrilic]"
        />
      </v-col>
    </v-row>
    <v-text-field
      v-model="formData.company"
      label="Company"
      variant="filled"
      :rules="[rules.cyrilic]"
    />
    <v-autocomplete
      v-model="formData.contry"
      label="Country*"
      variant="filled"
      :items="['Country1', 'Country2', 'Country3', 'Country4']"
      :rules="[rules.cyrilic, rules.required]"
    />
    <v-text-field
      v-model="formData.address"
      label="Address*"
      variant="filled"
      :rules="[rules.required]"
    />
    <v-text-field
      v-model="formData.zipCode"
      label="Zip Code*"
      variant="filled"
      :rules="[rules.numbers]"
    />
    <v-autocomplete
      v-model="formData.city"
      label="City/Town*"
      variant="filled"
      :items="['City1', 'City2', 'City3', 'City4']"
      :rules="[rules.required]"
    />
    <v-autocomplete
      v-model="formData.province"
      label="Province*"
      variant="filled"
      :items="['Province1', 'Province2', 'Province3', 'Province4']"
      :rules="[rules.required]"
    />
    <v-text-field
      v-model="formData.phone"
      label="Phone number*"
      variant="filled"
      :rules="[rules.phone]"
    />
    <v-text-field
      v-model="formData.email"
      label="Email*"
      variant="filled"
      :rules="[rules.email]"
    />
    <v-checkbox
      v-model="formData.termsAndCondition"
      :label="`Terms and Condition ${formData.termsAndCondition}`"
      :value="formData.termsAndCondition"
    />
    <v-checkbox
      v-model="formData.createAnAccount"
      :label="`Create an account`"
      :value="formData.createAnAccount"
    />
    <v-checkbox
      v-model="formData.subscribe"
      :label="`Subscribe for newsletter`"
      :value="formData.subscribe"
    />
  </v-form>
</template>

<script>
export default {
  name: "CheckoutForm",
  props: {
    formData: {
      type: Object,
      default: () => {},
    },
  },
  data() {
    return {
      valid: false,
      rules: {
        required: (value) => !!value || "This field must be filled in.",
        counter: (value) => value.length <= 100 || "Max 100 characters",
        email: (value) => {
          const pattern =
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
          return (
            pattern.test(value) ||
            'Invalid e-mail. For example: "example@gmail.com".'
          );
        },
        cyrilic: (value) => !/[а-я0-9]/i.test(value) || "Use Cyrillic.",
        numbers: (value) => !!/[0-9]/i.test(value) || "Use only numbers.",
        phone: (value) => {
          const pattern = /^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/;
          return (
            pattern.test(value) ||
            "Invalid prone number. For example: +7(982)000-00-00."
          );
        },
      },
    };
  },
};
</script>