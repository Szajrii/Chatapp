<template>
    <div class="chat-window">
        <div class="chat-window-content">
            <ChatElement />
            <ChatElement />
            <ChatElement />
            <ChatElement />
            <ChatElement />
            <ChatElement />
            <ChatElement />
            <ChatElement />
            <ChatElement />
            <ChatElement />
            <ChatElement />
            <ChatElement />
            <ChatElement />
            <ChatElement />
            <ChatElement />
            <ChatElement />
        </div>
        <div class="chat-window-message">
            <textarea class="form-control" placeholder="Type your message">
            </textarea>
        </div>
    </div>
</template>

<script lang="ts">
    import { Component, Vue } from 'vue-property-decorator';
    import ChatElement from './ChatElement.vue'

    @Component({
        components: {
            ChatElement
        }
    })
    export default class ChatWindow extends Vue {

    }
</script>

<style scoped lang="scss">
    .chat-window {
        width: 100%;
        height: 100%;

        &-content {
            width: 100%;
            height: 80%;
            overflow-y: auto;
        }

        &-message {
            width: 100%;
            height: 20%;

            textarea {
                width: 100% !important;
                height: 100% !important;
                resize: none;
            }
        }

    }
    ::-webkit-scrollbar {
        width: 10px;
        background-color: rgba(99, 225, 251, 0.54);
    }
    /* Track */
    ::-webkit-scrollbar-track {
        box-shadow: inset 0 0 5px grey;
        border-radius: 10px;
    }

    /* Handle */
    ::-webkit-scrollbar-thumb {
        background: #5666ff;
        border-radius: 3px;
    }

    /* Handle on hover */
    ::-webkit-scrollbar-thumb:hover {
        background: #1652c2;
    }
</style>
