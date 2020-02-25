<template>
    <div class="user-list">
        <div class="user-list-toppanel">
            <div class="user-list-toppanel-navitem" @click="changeTab('ChatList')">Chats</div>
            <div class="user-list-toppanel-navitem" @click="changeTab('FriendsList')">Friends</div>
        </div>
        <div class="user-list-items">
            <component :is="currentTab"/>
        </div>
    </div>
</template>

<script lang="ts">
    import { Component, Vue } from 'vue-property-decorator';
    import ChatList from './lists/ChatList.vue'

    @Component({
        components: {
            ChatList,
            FriendsList: () => import("@/regions/userlistregion/lists/FriendsList.vue")
        }
    })
    export default class UserList extends Vue {
        currentTab: string = 'ChatList';

        changeTab(tabName: string): void {

            this.currentTab = tabName
        }
    }
</script>

<style scoped lang="scss">

    .user-list {
        width: 20%;
        height: 100%;
        background-image: url("../../images/sidemenu.png");
        background-repeat: no-repeat;
        background-position: 10%, 70%;
        border-right: 1px solid gray;

        &-items {
            padding-top: 30px;
        }

        &-toppanel {
            width: 100%;
            height: 7%;
            background-color: rgba(203, 211, 255, 0.6);
            border-bottom: 2px solid #7b76b5;
            position: relative;
            -webkit-box-shadow: 4px 15px 29px -23px rgba(0,0,0,0.75);
            -moz-box-shadow: 4px 15px 29px -23px rgba(0,0,0,0.75);
            box-shadow: 4px 15px 29px -23px rgba(0,0,0,0.75);
            display: flex;
            justify-content: center;

            &-navitem {
                width: 30%;
                text-align: center;
                padding-top: 15px;
                color: white;
                cursor: pointer;
            }
        }

        &-items {
            height: 93%;
            width: 100%;
            overflow-y: auto;
        }
    }
</style>
