<template>
    <div class="user-list-chat-item">
        <div class="user-list-chat-item-content">
            <div class="user-list-chat-item-content-avatar">M</div>
            <div class="user-list-chat-item-content-text">
                <div class="user-list-chat-item-content-text-username">
                    <span class="text-black-50">Maciek</span>
                </div>
                <div class="user-list-chat-item-content-text-message">
                    <span>Siema idziesz na piwo?</span>
                </div>
            </div>
            <div class="user-list-chat-item-content-date">
                20:23
            </div>
        </div>
    </div>
</template>

<script lang="ts">
    import { Component, Vue } from 'vue-property-decorator';

    @Component
    export default class UserChatItem extends Vue {

    }
</script>

<style scoped lang="scss">
    .user-list-chat-item {
        width: 100%;
        height: 50px;
        border-bottom: 1px solid gray;

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
                width: 75%;
                padding-left: 5px;
            }
            &-date {
                width: 15%;
                text-align: right;
            }
        }
    }
</style>
