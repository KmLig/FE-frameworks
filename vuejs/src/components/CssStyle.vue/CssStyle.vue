<template>
    <h1 class="title">I am red</h1>
    <button style="font-size: 10rem;">I am a button</button>
</template>

<script setup>

</script>

<style lang="scss" scoped>
$title-color: red;

.title {
    color: $title-color;

    &:hover {
        color: darken($title-color, 20%);
    }
}

</style>