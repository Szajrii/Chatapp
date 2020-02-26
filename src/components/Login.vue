<template>
    <form @submit="logIn">
        <div class="form-group">
            <label for="login-email">Email address</label>
            <input type="email" class="form-control" id="login-email" aria-describedby="emailHelp" v-model="email">
        </div>
        <div class="form-group">
            <label for="login-password">Password</label>
            <input type="password" class="form-control" id="login-password" v-model="password">
        </div>
        <button type="submit" class="btn btn-primary btn-lg chat-userhandler-button">Login</button>
        <p class="text-primary redirect-to-register">If don't have account, do not wait any longer. <span class="sign-in" @click="redirectToRegister">Sign In Now!</span></p>
        <p v-if="showerrormsg" class="text-danger p-md-2">{{errormsg}}</p>
    </form>
</template>

<script lang="ts">
    import router from '../router'
    import { Component, Vue } from 'vue-property-decorator';
    import {AuthController} from '../controllers/usercontrollers/AuthController';

    @Component
    export default class Login extends Vue {
        private email: string = '';
        private password: string = '';
        errormsg: string = '';
        showerrormsg: boolean = false;

        logIn(e: Event) {
            e.preventDefault();
            AuthController.logInUser(this.email, this.password)
                .then(() => {
                    router.push({name: 'main', params: {'email': this.email} });
                })
                .catch(err => {
                    this.errormsg = err;
                    this.showerrormsg = true;
                    setTimeout(() => this.showerrormsg = false, 7000);
                })
        }

        redirectToRegister(): void {
            router.push({path: '/Register'})
        }

        created(): void {
            console.log(AuthController.auth)
        }
    }
</script>

<style scoped lang="scss">

    .redirect-to-register {
        padding-top: 15px;
    }

    .sign-in {
        cursor: pointer;
        &:hover {
            color: #6314b5;
        }
    }
</style>
