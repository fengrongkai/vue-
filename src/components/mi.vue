<template>
    <div>
        <div v-if="showme">showme</div>
        <ul v-else>
            <li>ulli</li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "mi",
        props:['showme']
    }
</script>

<style scoped>

</style>