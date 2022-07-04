<template>
    <button class="btn btn-toggle align-items-center rounded collapsed" data-bs-toggle="collapse" data-bs-target="#home-collapse" aria-expanded="false">{{title}}</button>
</template>

<script>
    export default {
        name: "sidebarButton",
        props: {
            title: String
        }
    }
</script>

<style scoped>
</style>