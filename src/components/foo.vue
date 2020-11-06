<template>
    <div>
        fffff
        {{id}}
        {{query}}
        {{fll}}
    </div>
</template>

<script>
    export default {
        name: "foo",
        props:['id','query'],
        data(){
            return {
                fll:'my name is'
            }
        },
        created(){
            console.log(999)
            // this.$store.commit('a');
            // this.$store.commit('b');
            this.$store.dispatch('c');
        }
    }
</script>

<style scoped>

</style>