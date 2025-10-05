<template>
  <h1>Hello World {{ name }}</h1>
</template>

<script setup>
import { ref } from 'vue'
const name = ref('John')
name.value = 'Jane'
</script>

<style lang="scss" scoped>

</style>