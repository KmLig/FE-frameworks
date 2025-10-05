<template>
  <h1>Hello World {{ name }}</h1>
</template>

<script setup>
import { ref } from 'vue';
const name = ref('John');
</script>

<style lang="scss" scoped>

</style>