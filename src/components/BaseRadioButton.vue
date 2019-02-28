<template>
    <div class="radio-row">
        <label><slot></slot></label>
        <div class="radio-variants radio-row">
            <label class="variant-label">{{ firstVariant }}</label>
            <input type="radio" name="radio" checked/>
            <label class="variant-label">{{ secondVariant }}</label>
            <input type="radio" name="radio"/>
        </div>
    </div>
</template>

<script>
    export default {
        name: "BaseRadioButton",
        props: [ 'firstVariant', 'secondVariant' ],
    }
</script>

<style scoped>
    .radio-row {
        display: flex;
    }
    .variant-label {
        width: auto;
    }
    input {
        width: 2rem;
    }
</style>