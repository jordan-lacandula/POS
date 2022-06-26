<template>
    <div>
        <h1 class="page-title">{{title}}</h1>
    </div>
</template>

<script>
    export default {
        name: "pageHeader",
        props: {
            title: String
        }
    }
</script>

<style scoped>
div {
    background-color: #f5f5f5;
}
</style>