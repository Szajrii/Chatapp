<template>
    <div class="main-app">
        <UserList></UserList>
    </div>
</template>

<script lang="ts">
    import UserList from '../regions/userlistregion/UserList.vue'
    import { Component, Vue } from 'vue-property-decorator';

    @Component({
        components: {
            UserList
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
