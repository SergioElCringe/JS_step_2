<template>
  <v-form v-model="valid">
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
    <v-row>
      <v-col>
        <v-text-field
          v-model="formData.subject"
          label="Subject"
          variant="filled"
          suffix="@gmail.com"
          :rules="[rules.email]"
        />
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <v-textarea
          v-model="formData.message"
          label="Message"
          variant="filled"
          counter
          maxlength="100"
          :rules="[rules.counter, rules.cyrilic]"
        />
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <v-btn
          :disabled="!valid"
          @click="sendMessage"
        >
          Send Message
        </v-btn>
      </v-col>
    </v-row>
  </v-form>
</template>

<script>
export default {
  name: 'ContactForm',
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
        required: value => !!value || 'This field must be filled in.',
        counter: value => value.length <= 100 || 'Max 100 characters',
        email: value => {
            const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            return pattern.test(value) || 'Invalid e-mail. For example: "example@gmail.com".'
        },
        cyrilic: value => !/[а-я0-9]/i.test(value) || 'Use Cyrillic',
      },
    };
  },

  methods: {
    sendMessage() {
        this.$emit('sendMessage', this.formData);
    },
  },
};
</script>