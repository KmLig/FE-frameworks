<template>
    <div>{{ doubleCount }}</div>
</template>

<script setup>
import { computed, ref } from 'vue';
const count = ref(10)
const doubleCount = computed(() => count.value * 2)
</script>

<style lang="scss" scoped>

</style>        