<template>
    <form>
        <div class="form-group">
            <label for="exampleInputEmail1">Email address</label>
            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" v-model="login">
        </div>
        <div class="form-group">
            <label for="exampleInputPassword1">Password</label>
            <input type="password" class="form-control" id="exampleInputPassword1" v-model="password">
        </div>
        <button type="submit" class="btn btn-primary btn-lg chat-userhandler-button">Login</button>
    </form>
</template>

<script lang="ts">
    import { Component, Vue } from 'vue-property-decorator';
    @Component
    export default class Login extends Vue {
        private login: string = '';
        private password: string = '';

        private logIn() {
            this.$store.commit('setUser', this.login);
        }
    }
</script>

<style scoped>

</style>
