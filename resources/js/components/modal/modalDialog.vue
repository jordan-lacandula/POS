<template>
    <div class="modal-dialog">
        <modal-header></modal-header>
        <modal-content></modal-content>
        <modal-footer></modal-footer>
    </div>
</template>

<script>
    import modalHeader from './modal/modalHeader.vue'
    import modalContent from './modal/modalContent.vue'
    import modalFooter from './modal/modalFooter.vue'
    export default {
        name: "modalDialog",
        components: {
            modalHeader,
            modalContent,
            modalFooter
        }
    }
</script>

<style scoped>
</style>