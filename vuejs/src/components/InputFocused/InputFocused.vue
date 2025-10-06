<template>
    <input type="text" ref="inputElement"/>
</template>

<script setup>
import { onMounted, useTemplateRef } from 'vue';
const inputElement = useTemplateRef("inputElement")

onMounted(() => {
    inputElement.value.focus()
})
</script>

<style lang="scss" scoped>

</style>