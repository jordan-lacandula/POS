<template>
    <div>
        <page-header title="Refund and Returns Policy"></page-header>
        <section-basic v-for="section in sections" :key="section.id" :title="section.t" :content="section.c" :subcontent="section.subcontent"></section-basic>
    </div>
</template>

<script>
    import pageHeader from '../components/pageHeader'
    import sectionBasic from "../components/sectionBasic";
    export default {
        name: "refunds",
        components: {
            pageHeader,
            sectionBasic
        },
        data: function() {
            return {
                sections: [
                    {
                        id: 1, t: "Overview", c: "Our refund and returns policy lasts 15 days. If 15 days have passed since your purchase, we can’t offer you a refund or exchange.To be eligible for a return, your item must be unused and in the same condition that you received it. It must also be in the original packaging.Several types of goods are exempt from being returned. We do not accept products that are intimate or sanitary goods, hazardous materials, or flammable liquids or gases.",
                    }
                ]
            }
        }
    }
</script>

<style scoped>

</style>
