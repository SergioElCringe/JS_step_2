<template>
 <v-form class="col-lg-8 contact_col" v-model="valid">
     <v-container>
        <v-row>
            <v-col>
                <v-text-field
                    v-model="formData.firstName"
                    label="First Name*"
                    variant="filled"
                    :rules="[rules.required, rules.cyrilic , rules.firstUpper]"
                />
            </v-col>
            <v-col>
                <v-text-field
                    v-model="formData.secondName"
                    label="Last Name*"
                    variant="filled"
                    :rules="[rules.required, rules.cyrilic , rules.firstUpper]"
                />
            </v-col>
        </v-row>
        <v-row>
            <v-col>
                <v-text-field
                    v-model="formData.subjec"
                    label="Subject*"
                    variant="filled"
                />
            </v-col>
        </v-row>
        <v-row>
            <v-col>
                <v-textarea
                    counter
                    label="Messege"
                    filled
                />
            </v-col>
        </v-row>
     </v-container>
    <v-btn
        :disabled="!valid"
    >
    SEND MESSAGE</v-btn>
 </v-form>

</template>

<script>
export default {
name: 'ContactForm',
data() {
    return{
        valid: true,
        formData: {
            firstName: '',
            secondName: '',
            subjec: ''
        },
        rules: {
            required: value => !!value || 'Заполните поле.',
            cyrilic: value => !/[a-z0-9]/i.test(value) || 'используйте Кириллицу.',
            firstUpper: v => /^[А-Я]{1,1}[а-я]{1,}$/.test(v) || 'Пишите с заглавной буквы'
        }
    };
}
}
</script>

<style>

</style>