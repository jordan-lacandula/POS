<template>
    <section>
        <h2>{{title}}</h2>
        <p>{{content}}</p>
        <div v-for="s in subcontent">
            <h3 v-if="s.hasHeader">{{s.t}}</h3>
            <span v-else>{{s.t}}</span>
            <p v-if="s.isHtml" v-html="s.c"></p>
            <p v-else="s.isHtml">{{s.c}}</p>
        </div>
    </section>
</template>

<script>
    export default {
        name: "sectionBasic",
        props: {
            title: String,
            content: String,
            subcontent: Array
        }
    }
</script>

<style scoped>
    section {
        padding: 0px 30px
    }
</style>