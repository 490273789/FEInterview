<template>

    <div>
        <button @click="handleClick">{{ loginFlag ? "Login Out" : "Login" }}</button>
    </div>

</template>

<script>
export default {
    data () {
        return {
            loginFlag: false
        }
    },
    created () {
        console.log(this.loginFlag = this.$route.matched[0].meta.login);
       this.loginFlag = this.$route.matched[0].meta.login;
    },
    methods: {
        handleClick () {
            this.loginFlag = !this.loginFlag;
            this.$route.matched[0].meta.login = this.loginFlag;

        }
    }
}
</script>

<style scoped>

</style>