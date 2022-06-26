<template>
    <div class="basePage">
        <cheader/>
        <cmain></cmain>
        <footer></footer>
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