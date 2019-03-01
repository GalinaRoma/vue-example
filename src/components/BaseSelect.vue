<template>
    <div>
        <label for="select"><slot></slot></label>
        <select :placeholder="placeholder" id="select" selected="selectedValue" @change="$emit('inputValueChange', $event.target.value)">
            <option v-for="option in data" :key="option.id" :value="option.id">{{option.name}}</option>
        </select>
    </div>
</template>

<script>
    export default {
        name: "BaseSelect",
        props: ['placeholder', 'data', 'selectedValue'],
    }
</script>

<style scoped>

</style>