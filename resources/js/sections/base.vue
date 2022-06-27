<template>
    <div class="basePage">
        <cheader/>
        <cmain></cmain>
        <cfooter></cfooter>
    </div>
</template>
<script>
    import cheader from "./cheader";
    import cfooter from "./cfooter";
    import cmain from "./cmain";
    export default {
        components: {
            cheader,
            cfooter,
            cmain
        }
    }
</script>

<style scoped>
</style>