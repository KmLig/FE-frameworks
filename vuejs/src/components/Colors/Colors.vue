<template>
   <ul>
    <li v-for="color in colors" :key="color">
        {{ color }}
    </li>
   </ul>
</template>

<script setup>
const colors = ['red', 'green', 'blue']

</script>

<style lang="scss" scoped>

</style>