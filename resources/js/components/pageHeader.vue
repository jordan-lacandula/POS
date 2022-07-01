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
    background-color: white;
    color: #49717a;
    padding: 15px 30px;
    margin-bottom: 30px;
}
.page-title {
    margin: 0px;
}
</style>