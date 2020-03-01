<template>
    <div class="friend-list">
        <div class="friend-list-managment" @click="goToFriendsList">Manage your friends list <i class="fas fa-angle-double-right"></i></div>
        <UserFriendItem v-for="(friend, index) in friendsList" :key="'userFriend' + index" :name="friend" @click.native="goToChat(friend)"/>
    </div>
</template>

<script lang="ts">
    import { Component, Vue } from 'vue-property-decorator';
    import UserFriendItem from '../UserFriendItem.vue'
    import router from '../../../router/index'

    @Component({
        components: {
            UserFriendItem
        }
    })
    export default class FriendsList extends Vue {

        goToFriendsList() {
            if(this.$route.name !== 'friends')
                router.push({name: 'friends'})
        }

        goToChat(name: string) {
            this.$router.push({name: 'chat', params: {user: name}});
        }

        get friendsList(): string[] {
            return this.$store.state.friendList;
        }

    }
</script>

<style scoped lang="scss">
    .friend-list {
        width: 100%;
        height: 100%;

        &-managment {
            width: 100%;
            height: 50px;
            text-align: center;
            cursor: pointer;
            transition: all 0.5s;

            &:hover {
                color: white;
                text-shadow: 2px 2px 2px #000000;
            }

            i {
                transform: translateY(1px);
            }
        }
    }
</style>
