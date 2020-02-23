<template>
    <div class="main-app">
        <UserList></UserList>
        <ChatRegion/>
    </div>
</template>

<script lang="ts">
    import UserList from '../regions/userlistregion/UserList.vue'
    import ChatRegion from '../regions/chatregion/ChatRegion.vue'
    import { Component, Vue } from 'vue-property-decorator';

    @Component({
        components: {
            UserList,
            ChatRegion
        }
    })
    export default class Main extends Vue {

    }
</script>

<style scoped lang="scss">

    .main-app {
        display: flex;
    }

</style>
