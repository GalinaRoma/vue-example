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
                :checkedValue="checkedGender"
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
                @inputValueChange="setSelectedCity">City</base-select>
        <button type="submit">Save</button>
    </form>
</template>

<script>
    import BaseInput from './BaseInput';
    import BaseSelect from './BaseSelect';
    import BaseRadioButton from './BaseRadioButton';

    export default {
        name: 'UserForm',
        components: {
            BaseInput,
            BaseSelect,
            BaseRadioButton,
        },
        data () {
            return {
                cities: null,
                fullName: null,
                checkedGender: 'firstVariant',
                phone: null,
                email: null,
                selectedCityId: 1,
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
                const [firstName, lastName] = this.fullName.split(" ");
                const data = {
                    firstName: firstName,
                    lastName: lastName,
                    phone: this.phone,
                    email: this.email,
                    gender: this.checkedGender,
                    cityId: this.selectedCityId,
                };
                fetch('https://api.myjson.com/bins/amtzq', {
                    method: 'POST',
                    data: JSON.stringify(data),
                }).then(response => {
                    // eslint-disable-next-line
                    console.log(response)
                });
                },
            checkForm: function () {
                this.valid.fullName = this.fullName && this.fullName.split(" ").length > 1;
                this.valid.phone = this.phone && /\d{11}/.test(this.phone);
                this.valid.email = this.email && /.+@.+/.test(this.email);
                return this.valid.email && this.valid.fullName && this.valid.phone;
            },
            setFullName: function(newValue) {
                this.fullName = newValue;
            },
            setPhone: function(newValue) {
                this.phone = newValue;
            },
            setEmail: function(newValue) {
                this.email = newValue;
            },
            setGender: function(newValue) {
                this.checkedGender = newValue;
            },
            setSelectedCity: function(newValue) {
                this.selectedCityId = newValue;
            }
        },
        mounted () {
            fetch('https://api.myjson.com/bins/amtzq', {
                method: 'GET',
            })
                .then(response => response.json())
                .then(data => this.cities = data.cities);
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