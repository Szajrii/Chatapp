<template>
    <form @submit="registerUser">
        <div class="form-group position-relative">
            <label for="register-email">Email address</label>
            <input type="email" class="form-control" id="register-email" aria-describedby="emailHelp" v-model="email">
        </div>
        <div class="form-group">
            <label for="register-nickname">Nickname</label>
            <input type="text" class="form-control" id="register-nickname" v-model="nickname">
        </div>
        <div class="form-group">
            <label for="register-password">Password</label>
            <input type="password" class="form-control" id="register-password" v-model="password">
        </div>
        <button type="submit" class="btn btn-primary btn-lg chat-userhandler-button">Register</button>
        <div class="redirect-to-login" @click="redirectToLogin">
            <span class="text-primary">Back to login</span>
        </div>
        <p v-if="showerrormsg" class="text-danger p-md-2">{{errormsg}}</p>
    </form>
</template>

<script lang="ts">
    import router from '../router'
    import { Component, Vue } from 'vue-property-decorator';
    import {AuthController} from "@/controllers/usercontrollers/AuthController";

    @Component
    export default class Register extends Vue {
        private email: string = '';
        private password: string = '';
        private nickname: string = '';
        errormsg: string = '';
        showerrormsg: boolean = false;

        registerUser(e: Event): void {
            e.preventDefault();
            AuthController.checkIfUserExist(this.nickname)
                .then(verdict => {
                    if (!verdict) {
                        AuthController.registerUser(this.email, this.password)
                            .then(() => {
                                this.$store.commit('setUser', {
                                    email: this.email,
                                    user: this.nickname
                                });
                                AuthController.setDefaultDataBaseData(this.nickname, this.email);
                                router.push({path: '/app'});
                            })
                            .catch(err => {
                                this.errormsg = err;
                                this.showerrormsg = true;
                                setTimeout(() => this.showerrormsg = false, 7000);
                            })
                    } else {
                        this.errormsg = "Error: User already exist";
                        this.showerrormsg = true;
                        setTimeout(() => this.showerrormsg = false, 7000);
                    }
                })

        }
        redirectToLogin(): void {
            router.push({path: '/'});
        }
    }
</script>

<style scoped lang="scss">
    .redirect-to-login {
        position: absolute;
        right: 5%;
        bottom: 5%;
        cursor: pointer;

        span:hover {
            color: #6314b5 !important;
        }
    }
</style>
