<template>
    <div>
        <!-- <div class="d-flex flex-column flex-shrink-0 p-3 bg-light" style="width: 280px;"> -->
        <sidebar></sidebar>
    </div>
</template>

<script>
    
    import sidebar from '../components/sidebar'
    export default {
        name: "finance",
        components: {
            sidebar
        }
    }
</script>

<style scoped>
</style>