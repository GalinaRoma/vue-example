<template>
    <div>
        <label for="select"><slot></slot></label>
        <select :placeholder="placeholder" id="select">
            <option v-for="option in data" :key="option.id">{{option.name}}</option>
        </select>
    </div>
</template>

<script>
    export default {
        name: "BaseSelect",
        props: ['placeholder', 'data'],
    }
</script>

<style scoped>

</style>