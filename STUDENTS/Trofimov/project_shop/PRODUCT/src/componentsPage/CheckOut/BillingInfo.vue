<template>
    <div class="col-lg-6">
        <div class="billing checkout_section">
            <div class="section_title">Billing Address</div>
            <div class="section_subtitle">Enter your address info</div>
            <div class="checkout_form_container">
                <form action="#" id="checkout_form" class="checkout_form">
                    <div class="row">
                        <v-col cols="12" md="6">
                            <v-text-field
                                v-model="firstname"
                                :rules="nameRules"
                                :counter="50"
                                label="First name"
                                required
                            ></v-text-field>
                        </v-col>
                        <v-col cols="12" md="6">
                            <v-text-field
                                v-model="lastname"
                                :rules="nameRules"
                                :counter="50"
                                label="Last Name"
                                required
                            ></v-text-field>
                        </v-col>
                    </div>
                    <v-col cols="12" md="12">
                        <v-text-field
                        v-model="company"
                        :rules="nameRules"
                        :counter="50"
                        label="Company"
                        required
                        ></v-text-field>
                    </v-col>
                    <v-col cols="12" md="12">
                        <v-select
                        v-model="selectCountry"
                        :items="itemsCountry"
                        :rules="[(v) => !!v || 'Item is required']"
                        label="Country"
                        required
                        ></v-select>
                    </v-col>
                    <v-col cols="12" md="12">
                        <v-text-field
                        v-model="address"
                        :rules="nameRules"
                        :counter="50"
                        label="Address"
                        required
                        ></v-text-field>
                    </v-col>
                    <v-col cols="12" md="12">
                        <v-text-field
                        v-model="zipcode"
                        :rules="nameRules"
                        :counter="50"
                        label="Zipcode"
                        required
                        ></v-text-field>
                    </v-col>
                    <v-col cols="12" md="12">
                        <v-select
                        v-model="selectCityTown"
                        :items="itemsCityTown"
                        :rules="[(v) => !!v || 'Item is required']"
                        label="City / Town"
                        required
                        ></v-select>
                    </v-col>
                    <v-col cols="12" md="12">
                        <v-select
                        v-model="selectProvince"
                        :items="itemsProvince"
                        :rules="[(v) => !!v || 'Item is required']"
                        label="Province"
                        required
                        ></v-select>
                    </v-col>
                    <v-col cols="12" md="12">
                        <v-text-field
                        v-model="PhoneNo"
                        :rules="nameRules"
                        :counter="50"
                        label="Phone no"
                        required
                        ></v-text-field>
                    </v-col>
                    <v-col cols="12" md="12">
                        <v-text-field
                        v-model="Email"
                        :rules="nameRules"
                        :counter="50"
                        label="Email"
                        required
                        ></v-text-field>
                    </v-col>
                    <v-subheader>Speed dial direction</v-subheader>
                    <v-radio-group v-model="direction" hide-details>
                        <v-radio value="conditions" label="Terms and conditions"></v-radio>
                        <v-radio value="account" label="Create an account"></v-radio>
                        <v-radio value="newsletter" label="Subscribe to our newsletter"></v-radio>
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
        itemsCountry: ["Country 1", "Country 2", "Country 3", "Country 4"],
        itemsCityTown: [
            "City / Town 1",
            "City / Town 2",
            "City / Town 3",
            "City / Town 4",
        ],
        itemsProvince: ["Province 1", "Province 2", "Province 3", "Province 4"],
        selectCountry: null,
        selectCityTown: null,
        selectProvince: null,
    }),
    watch: {
        conditions(val) {
             this.conditions = !val;
        },
        account(val) {
            this.account = !val;
        },
        newsletter(val) {
            this.newsletter = !val;
        },
    },
};
</script>

<style>
</style> 