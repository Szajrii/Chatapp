<template>
    <div class="user-list-chat-item" :class="[user === activeUser? 'active': '']">
        <div class="user-list-chat-item-content">
            <div class="user-list-chat-item-content-avatar">{{user.charAt(0).toUpperCase()}}</div>
            <div class="user-list-chat-item-content-text">
                <div class="user-list-chat-item-content-text-username">
                    <span class="text-black-50">{{user}}</span>
                </div>
                <div class="user-list-chat-item-content-text-message">
                    <span :class="[!lastMessageSeen? 'message-notseen': '']">{{messageToDisplay}}</span>
                </div>
            </div>
            <div class="user-list-chat-item-content-date" :class="[!lastMessageSeen? 'message-notseen': '']">
                {{date}}
            </div>
        </div>
    </div>
</template>

<script lang="ts">
    import { Component, Vue, Prop } from 'vue-property-decorator';

    @Component
    export default class UserChatItem extends Vue {

        @Prop()
        // @ts-ignore
        user: string;
        @Prop()
        // @ts-ignore
        date: string;
        @Prop()
        // @ts-ignore
        message: string;
        @Prop()
        // @ts-ignore
        lastMessageSeen: boolean;

        get activeUser() {
            return this.$route.params.user;
        }

        get messageToDisplay() {
            if (this.message.length > 15) {
                return this.message.slice(0, 15) + '...'
            } else {
                return this.message;
            }
        }

    }
</script>

<style scoped lang="scss">

    .active {
        background-color: rgba(0, 36, 255, 0.11);
    }
    .message-notseen {
        font-weight: bold;
    }

    .user-list-chat-item {
        width: 100%;
        height: 50px;
        border-bottom: 1px solid gray;
        cursor: pointer;

        &-content {
            width: 90%;
            margin: auto;
            display: flex;
            justify-content: space-between;
            font-size: 15px;
            font-family: "Book Antiqua";

            &-avatar {
                width: 25px;
                height: 25px;
                border-radius: 50%;
                background-color: green;
                text-align: center;
                color: white;
                font-size: 15px;
                position: relative;
                top: 13px;
            }

            &-text {
                width: 70%;
                padding-left: 5px;
            }
            &-date {
                width: 20%;
                text-align: right;
            }
        }
    }

    @media only screen and (max-width: 1000px) {
        .user-list-chat-item-content {
            width: 95%;
            font-size: 11px;

            &-date {
                padding-right: 5px;
                text-align: left;
                min-width: 27%;
            }
        }
    }
</style>
