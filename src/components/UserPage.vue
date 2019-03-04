<template>
    <div>
        <h1 class="page-title">User Form Page</h1>
        <hr/>
        <user-form></user-form>
    </div>
</template>

<script>
    import UserForm from './UserForm.vue';

    export default {
        name: 'UserPage',
        components: {
            UserForm
        }
    }
</script>

<style>

</style>