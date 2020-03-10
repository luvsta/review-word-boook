<template>
    <div>
        InputWordPage

        <button href="javascript:;" @click="rewiewWordDB">Submit</button>
    </div>
</template>

<script>
    export default {
        name: 'InputWordPage',
        data() {
            return {
                name: '',
                age: ''
            }
        },
        methods: {
            rewiewWordDB() {
                this.$axios.post('/web/api/user/rewiewWord', {
                }).then((resobj) => {
                    console.log(resobj)
                })
            }
        }

    }
</script>

<style scoped>

</style>