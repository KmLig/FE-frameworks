<template>
    <p>Page title: {{ pageTitle }}</p>
</template>

<script setup>
import { onMounted, ref } from 'vue';

const pageTitle = ref('')

onMounted(() => {
    pageTitle.value = document.title || 'Hi'
})

</script>

<style lang="scss" scoped>

</style>        