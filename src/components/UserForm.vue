<template>
    <form class="column-form">
        <base-input class="form-row" type="text" placeholder="Full name">Full Name</base-input>
        <base-radio-button class="form-row" firstVariant="Male" secondVariant="Female">Gender</base-radio-button>
        <base-input class="form-row" type="phone" placeholder="Phone">Phone</base-input>
        <base-input class="form-row" type="email" placeholder="Email">Email</base-input>
        <base-select class="form-row" data="cities">City</base-select>
        <base-textarea placeholder="Write your question here"></base-textarea>
    </form>
</template>

<script>
    import BaseInput from './BaseInput';
    import BaseSelect from './BaseSelect';
    import BaseTextarea from './BaseTextarea';
    import BaseRadioButton from './BaseRadioButton';

    export default {
        name: 'UserForm',
        components: {
            BaseInput,
            BaseSelect,
            BaseTextarea,
            BaseRadioButton,
        },
        data () {
            return {
                cities: null
            }
        },
        mounted () {
            const myRequest = new Request('https://vueproject-fd49b.firebaseio.com/', {
                method: 'GET',
                mode: 'no-cors',
            });
            fetch(myRequest)
                .then(response => {
                    // eslint-disable-next-line
                    console.log(response);
                    this.cities = response.cities;
                });
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
    label {
        display: inline-block;
        width: 8rem;
    }
    input,
    select {
        width: 16rem;
    }
    textarea {
        width: 24rem;
    }
</style>