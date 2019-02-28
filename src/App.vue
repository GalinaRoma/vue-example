<template>
  <div id="app">
    <h1 class="page-title">User Form Page</h1>
    <hr/>
    <user-form></user-form>
  </div>
</template>

<script>
    import UserForm from './components/UserForm.vue'

    export default {
      name: 'app',
      components: {
        UserForm
      }
    }
</script>

<style>
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        color: #2c3e50;
        margin-top: 30px;
    }
    .page-title {
        text-align: center;
    }
</style>
