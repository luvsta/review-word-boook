<template>
    <div>
        InputWordPage

        <form>
            <p>中文</p><input type="text" name="cn_word" v-model="cn_word"><br />
            <p>英文</p><input type="text" name="en_word" v-model="en_word"><br />
            <a href="javascript:;" @click="inputNewWordDB">Submit</a>
        </form>
    </div>
</template>

<script>
    export default {
        name: 'InputWordPage',
        data() {
            return {
                cn_word: '',
                en_word: ''
            }
        },
        methods: {
            inputNewWordDB() {
                let cn_word = this.cn_word;
                let en_word = this.en_word;
                // console.log(this)
                this.$axios.post('/web/api/user/inputNewWord', {
                    cn_word: cn_word,
                    en_word: en_word
                }).then((resobj) => {
                    console.log(resobj)
                })
            }
        }

    }
</script>

<style scoped>

</style>