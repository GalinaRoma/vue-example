<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
    import Vue from 'vue';
    import Router from 'vue-router';
    import store from './store/index';
    import TablePage from './components/TablePage.vue';
    import UserPage from './components/UserPage.vue';

    Vue.use(Router);

    const router = new Router({
        routes: [
            { path: '', component: UserPage },
            { path: '/user', name: 'user',component: UserPage },
            { path: '/table', name: 'table', component: TablePage },
        ],
    });

    export default {
        name: 'app',
        router,
        store,
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
