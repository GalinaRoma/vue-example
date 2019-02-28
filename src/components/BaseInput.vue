<template>
    <div>
        <label for='input'><slot></slot></label>
        <input :type="type" :placeholder="placeholder" id="input"/>
    </div>
</template>

<script>
    export default {
        name: "BaseInput",
        props: ['type', 'placeholder'],
    }
</script>

<style scoped>

</style>