<template>
    <div class="radio-row">
        <label><slot></slot></label>
        <div class="radio-variants radio-row">
            <label class="variant-label">{{ firstVariant }}</label>
            <input type="radio" name="radio" :value="firstVariant" checked="checkedFirst" @click="$emit('inputValueChange', $event.target.value)"/>
            <label class="variant-label">{{ secondVariant }}</label>
            <input type="radio" name="radio" :value="secondVariant" checked="checkedSecond" @click="$emit('inputValueChange', $event.target.value)"/>
        </div>
    </div>
</template>

<script>
    export default {
        name: "BaseRadioButton",
        props: [ 'firstVariant', 'secondVariant', 'checkedValue'],
        computed: {
            checkedFirst: function () {
                return this.checkedValue === 'firstVariant';
            },
            checkedSecond: function () {
                return this.checkedValue === 'secondVariant';
            }
        }
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