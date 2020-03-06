<template>
    <div class="user-list">
        <div class="user-list-toppanel">
            <div class="user-list-toppanel-navitem" @click="changeTab('ChatList')" :class="{'active': currentTab === 'ChatList'}">Chats</div>
            <div class="user-list-toppanel-navitem" @click="changeTab('FriendsList')" :class="{'active': currentTab === 'FriendsList'}">Friends</div>
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

    .active {
        font-size: 20px;

        &:after {
            content: '';
            display: block;
            width: 100%;
            height: 4px;
            -webkit-box-shadow: 2px 16px 151px -34px rgba(252,101,0,1);
            -moz-box-shadow: 2px 16px 151px -34px rgba(252,101,0,1);
            box-shadow: 2px 16px 151px -34px rgba(252,101,0,1);
            background-color: white;
        }
    }
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

    @media only screen and (max-width: 1400px) {
        .user-list {
            width: 25%;
            height: 100%;

            &-toppanel {
                height: 10%;
            }

            &-items {
                height: 90%;
            }
        }
    }

    @media only screen and (max-width: 1000px) {
        .user-list {
            width: 30%;
            height: 100%;

            &-toppanel {
                height: 13%;
            }

            &-items {
                height: 87%;
            }
        }
    }

    @media only screen and (max-width: 750px) {
        .user-list-toppanel-navitem {
            margin-right: 10px;
            margin-left: 10px;
        }
    }
</style>
