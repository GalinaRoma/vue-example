<template>
    <form class="column-form" @submit="sendUser">
        <base-input
                class="form-row"
                :valid="valid.fullName"
                type="text"
                placeholder="Full name"
                :inputValue="fullName"
                @inputValueChange="setFullName">Full Name</base-input>
        <base-radio-button
                class="form-row"
                firstVariant="Male"
                secondVariant="Female"
                :checkedValue="gender"
                @inputValueChange="setGender">Gender</base-radio-button>
        <base-input
                class="form-row"
                :valid="valid.phone"
                type="tel"
                placeholder="Phone"
                :inputValue="phone"
                @inputValueChange="setPhone">Phone</base-input>
        <base-input
                class="form-row"
                :valid="valid.email"
                type="email"
                placeholder="Email"
                :inputValue="email"
                @inputValueChange="setEmail">Email</base-input>
        <base-select
                class="form-row"
                :data="cities"
                :selectedValue="selectedCityId"
                @inputValueChange="setCityId">City</base-select>
        <button type="submit">Save</button>
    </form>
</template>

<script>
    import BaseInput from './BaseInput';
    import BaseSelect from './BaseSelect';
    import BaseRadioButton from './BaseRadioButton';
    import { mapState } from 'vuex'

    export default {
        name: 'UserForm',
        components: {
            BaseInput,
            BaseSelect,
            BaseRadioButton,
        },
        computed: {
            ...mapState({
                cities: state => state.userForm.cities,
                fullName: state => state.userForm.fullName,
                gender: state => state.userForm.gender,
                phone: state => state.userForm.phone,
                email: state => state.userForm.email,
                selectedCityId: state => state.userForm.cityId,
            }),
        },
        data () {
            return {
                valid: {
                    fullName: true,
                    phone: true,
                    email: true,
                }
            }
        },
        methods:{
            sendUser: function (e) {
                e.preventDefault();
                if (!this.checkForm(e)) {
                    return;
                }
                // eslint-disable-next-line
                console.log({
                    fullName: this.fullName,
                    phone: this.phone,
                    email: this.email,
                    gender: this.gender,
                    cityId: this.selectedCityId,
                });
            },
            checkForm: function () {
                this.valid.fullName = this.fullName;
                this.valid.phone = this.phone && /\d{11}/.test(this.phone);
                this.valid.email = this.email && /.+@.+/.test(this.email);
                return this.valid.email && this.valid.fullName && this.valid.phone;
            },
            setFullName: function(newValue) {
                this.$store.commit('userForm/setFullName', newValue);
            },
            setPhone: function(newValue) {
                this.$store.commit('userForm/setPhone', newValue);
            },
            setEmail: function(newValue) {
                this.$store.commit('userForm/setEmail', newValue);
            },
            setGender: function(newValue) {
                this.$store.commit('userForm/setGender', newValue);
            },
            setCityId: function(newValue) {
                this.$store.commit('userForm/setCityId', newValue);
            },
            loadCities: function() {
                this.$store.dispatch('userForm/loadCities');
            }
        },
        mounted () {
            this.loadCities();
        }
    }
</script>

<style>
    .column-form {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        font-size: 20px;
        margin-top: 2rem;
    }

    .form-row {
        margin-bottom: 1rem;
    }
    .radio-variants {
        width: 16rem;
    }
    .not-valid-element {
        border: 1px solid #ff1a2b;
    }
    .valid-element {
        border: 1px solid #c8c8c8;
    }
    label {
        display: inline-block;
        width: 8rem;
    }
    input,
    select {
        width: 16rem;
    }
    button {
        width: 24rem;
        margin-top: 1rem;
    }
</style>