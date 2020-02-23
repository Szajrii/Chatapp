<template>
    <div class="friend-list">
        <UserFriendItem/>
    </div>
</template>

<script lang="ts">
    import { Component, Vue } from 'vue-property-decorator';
    import UserFriendItem from '../UserFriendItem.vue'

    @Component({
        components: {
            UserFriendItem
        }
    })
    export default class FriendsList extends Vue {

    }
</script>

<style scoped lang="scss">
    .friend-list {
        width: 100%;
        height: 100%;
    }
</style>
