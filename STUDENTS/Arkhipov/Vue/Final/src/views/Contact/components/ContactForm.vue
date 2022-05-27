<template>
  <v-form v-model="valid" class="contact_form">
    <div class="row">
      <div class="col-xl-6">
        <v-text-field
          v-model="formData.firstName"
          label="First Name*"
          variant="filled"
          :rules="[rules.required, rules.cyrilic, rules.firstUpper]"
        />
      </div>
      <div class="col-xl-6">
        <v-text-field
          v-model="formData.secondName"
          label="Last Name*"
          variant="filled"
          :rules="[rules.required, rules.cyrilic, rules.firstUpper]"
        />
      </div>
    </div>
      <v-text-field
        v-model="formData.subject"
        label="Subject"
        variant="filled"
        :rules="[]"
      />
      <v-textarea
        counter
        label="Message"
        :rules="[]"
        filled
      />
      <v-btn
        :disabled="!valid"
				>
        Send Message
      </v-btn>
  </v-form>
</template>

<script>
export default {
  name: 'ContactForm',
  data() {
    return {
      valid: true,
      formData: {
        firstName: '',
        secondName: '',
        subject: '',
      },
      rules: {
        required: value => !!value || 'Обязатльное поле.',
        cyrilic: value => !/[a-z0-9]/i.test(value) || 'Используйте Кириллицу',
      }
    };
  }
}
</script>

<style>

</style>