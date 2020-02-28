<template>
    <div class="main-app">
        <UserList></UserList>
        <ChatRegion/>
    </div>
</template>

<script lang="ts">
    import UserList from '../regions/userlistregion/UserList.vue'
    import ChatRegion from '../regions/chatregion/ChatRegion.vue'
    import {Component, Vue} from 'vue-property-decorator';
    import {AuthController} from "@/controllers/usercontrollers/AuthController";
    import {UserRepository} from '@/controllers/appcontroller/usercontroller/UserRepository'

    @Component({
        components: {
            UserList,
            ChatRegion
        }
    })
    export default class Main extends Vue {

        // @ts-ignore
        private userData: UserRepository = new UserRepository(this.$attrs.email, this.$store);


        beforeCreate(): void {
            const email: string = this.$attrs.email;
            AuthController.getUserName(email)
                .then(name => {
                    this.$store.commit('setUser', {
                        email: email,
                        user: name
                    });
                });
        }
    }
</script>

<style scoped lang="scss">

    .main-app {
        display: flex;
    }

</style>
