<template>
  <v-form v-model="valid">
    <v-container>
      <v-row>
        <v-col>
          <v-text-field v-model="formData.firtsName" label="First Name*" variant="filled" :rules="[rules.required, rules.cyrilic, rules.firstUpper]"/>
        </v-col>
        <v-col>
          <v-text-field v-model="formData.secondName" label="Lirst Name*" variant="filled" :rules="[rules.required, rules.cyrilic, rules.firstUpper]"/>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <v-text-field v-model="formData.subject" label="Subject" variant="filled" />
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <v-textarea
            counter
            label="Text"
            filled
          />
        </v-col>
      </v-row>
      <v-btn :disabled="!valid">
        Send Massege 
      </v-btn>
    </v-container>
  </v-form>
</template>

<script>
export default {
  name: 'ContactForm',
  data() {
    return {
      valid: true,
      formData: {
        firtsName: '',
        secondName: '',
        subject: '',
      },
      rules: {
        required: value => !!value || 'Заполните поле!',
        cyrilic: value => !/[a-z0-9]/i.test(value) || 'Используйте Кириллицу',
        firstUpper: value => /^[А-Я]{1}[а-я]{1,}$/.test(value) || 'Пишите с заглавной буквы',
      }
    }
  }
};
</script>

<style>
</style>