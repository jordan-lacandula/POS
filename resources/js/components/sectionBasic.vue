<template>
    <section>
        <h2>{{title}}</h2>
        <p>{{content}}</p>
    </section>
</template>

<script>
    export default {
        name: "sectionBasic",
        props: {
            title: String,
            content: String
        }
    }
</script>

<style scoped>
</style>