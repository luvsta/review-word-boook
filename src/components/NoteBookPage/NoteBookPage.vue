<template>
    <div>
        NotebookPage
        <button href="javascript:;" @click="listAllWordDB">Submit</button>
    </div>
</template>

<script>
    export default {
        name: 'NoteBookPage',
        data() {
            return {}
        },
        methods: {
            listAllWordDB() {
                this.$axios.post('/web/api/user/listAllWord', {
                }).then((resobj) => {
                    console.log(resobj)
                });
            }
        }
    }
</script>

<style scoped>

</style>