<template>
    <div>
        <label for='input'><slot></slot></label>
        <input :class="{'not-valid-element': !valid, 'valid-element': valid}"
               @input="$emit('inputValueChange', $event.target.value)"
               :type="type"
               :placeholder="placeholder"
               :value="inputValue"
               id="input"/>
    </div>
</template>

<script>
    export default {
        name: "BaseInput",
        props: ['type', 'placeholder', 'valid', 'inputValue'],
    }
</script>

<style scoped>

</style>