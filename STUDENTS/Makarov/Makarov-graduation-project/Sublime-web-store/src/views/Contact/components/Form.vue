<template>
    <form 
        id="contact_form" 
        class="contact_form"
        @submit.prevent="submit"
    >
        <div class="row">
            <div class="col-xl-6">
                <label for="contact_name">First Name*</label>
                <input 
                    type="text" 
                    id="contact_name" 
                    class="contact_input"
                    v-model="form.firstName"
                >
                <span class="form_error" 
                    v-if="v$.form.firstName.$invalid && v$.form.$dirty"
                >
                    First name should have from 2 to 20 latin characters and start with capital letter
                </span>

            </div>
            <div class="col-xl-6 last_name_col">
                <label for="contact_last_name">Last Name*</label>
                <input 
                    type="text" 
                    id="contact_last_name" 
                    class="contact_input"
                    v-model="form.lastName"
                >
                <span class="form_error"  
                    v-if="v$.form.lastName.$invalid && v$.form.$dirty"
                >
                    Last name should have from 2 to 20 latin characters and start with capital letter
                </span>
            </div>
        </div>
        <div>
            <label for="contact_company">Subject</label>
            <input 
                type="text" 
                id="contact_company" 
                class="contact_input"
            >
        </div>
        <div>
            <label for="contact_textarea">Message*</label>
            <textarea 
                id="contact_textarea" 
                class="contact_input contact_textarea" 
                v-model="form.message"
            >
            </textarea>
            <span class="form_error" 
                v-if="v$.form.lastName.$invalid && v$.form.$dirty"
            >
                Please enter your message. From 100 to 40000 symbols are required.
            </span>
        </div>
        <button type="submit" class="button contact_button">
            <span>Send</span>
        </button>
    </form>
</template>

<script>
import useVuelidate from '@vuelidate/core'
import { required, minLength, maxLength, alpha } from '@vuelidate/validators'

export default {
    setup () {
        return { 
            v$: useVuelidate()
        }
    },
    name: "Form",
    data () {
        return {
            form: {
                firstName: "",
                lastName: "",
                message: "",
            }
        }
    },
    validations () {
        return {
            form: {
                firstName: { 
                    required,
                    minLength: minLength(2),
                    maxLength: maxLength(20),
                    alpha,
                    firstUppercase: this.ifFirstUppercase,
                },
                lastName: { 
                    required, 
                    minLength: minLength(2),
                    maxLength: maxLength(20),
                    alpha,
                    firstUppercase: this.ifFirstUppercase,
                },
                message: { 
                    required,
                    minLength: minLength(100),
                    maxLength: maxLength(40000),
                },
                
            }
        }
    },
    methods: {
        submit() {
            this.v$.form.$touch();
            if (this.v$.form.$error) {
                return;
            }
           alert('Form has been sent');
        },
        //Custom validator
        ifFirstUppercase(value) {
            return value[0].toUpperCase() === value[0] ? true : false;
        }
    },
}
</script>

<style>
.contact_form > div:not(:last-child) {
    margin-bottom: 14px;
}
.contact_form label {
    font-size: 14px;
    font-weight: 400;
    color: #6c6a74;
}
.contact_input {
    width: 100%;
    height: 52px;
    background: #f2f4f8;
    border: none;
    outline: none;
    padding-left: 15px;
}
.contact_textarea {
    height: 197px;
    padding-top: 15px;
}
.contact_button {
    position: relative;
    margin-top: 10px;
}
.contact_button span {
    display: block;
    position: relative;
    color: #1b1b1b;
    z-index: 2;
    -webkit-transition: all 200ms ease;
    -moz-transition: all 200ms ease;
    -ms-transition: all 200ms ease;
    -o-transition: all 200ms ease;
    transition: all 200ms ease;
}
.contact_button:hover span {
    color: #FFFFFF;
}
.contact_button::after {
    background-color: #000;
}
.form_error {
    color: rgb(220, 53, 69);
}
</style>