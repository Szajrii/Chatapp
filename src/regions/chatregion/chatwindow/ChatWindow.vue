<template>
    <div class="chat-window">
        <div class="chat-window-content">
            <div class="chat-window-content-wrapper" v-if="chatExist">
                <ChatElement v-for="(c, index) in chat" :sender="c.sender" :date="c.date" :message="c.message" :destinationUser="destinationUser" :key="'chatelement' + index"/>
            </div>
            <p v-else>Say hi to your friend</p>
        </div>
        <div class="chat-window-message">
            <textarea class="form-control" placeholder="Type your message" v-model="message" @keyup="sendMessage">
            </textarea>
        </div>
    </div>
</template>

<script lang="ts">
    import { Component, Vue, Watch} from 'vue-property-decorator';
    import ChatElement from './ChatElement.vue'
    import {SingleChatController} from "@/controllers/appcontroller/chatcontroller/SingleChatController";

    @Component({
        components: {
            ChatElement
        }
    })
    export default class ChatWindow extends Vue {

        message: string = '';

        private chatController: SingleChatController = new SingleChatController(this.$attrs.email);

        @Watch('chat')
        updateLastSeen() {
            this.chatController.updateSeenMessage(this.$attrs.user);
        }

        sendMessage(event: KeyboardEvent) {
            if (event.code === 'Enter' && !event.shiftKey && this.message !== '') {
                event.preventDefault();
                this.chatController.sendMessage(this.$attrs.user, this.message)
                    .then(() => {
                        const chatWindow = document.getElementsByClassName('chat-window-content')[0];
                        chatWindow.scrollTo(0, chatWindow.scrollHeight + 200);
                    });
                this.message = '';
            }
        }

        get destinationUser() {
            return this.$attrs.user;
        }
        get chat() {
            return this.$store.getters.getChat(this.$route.params.user).messages;
        }
        get chatExist() {
            return this.$store.getters.getChat(this.$route.params.user) != undefined
        }

        mounted(): void {
            const chatWindow = document.getElementsByClassName('chat-window-content')[0];
            chatWindow.scrollTo(0, chatWindow.scrollHeight + 200);
        }

        created(): void {
            this.chatController.updateSeenMessage(this.$attrs.user);
            this.$store.commit('changeTab', this.$attrs.user)
        }
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

            &-wrapper {
                width: 100%;
                height: 100%;
            }
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
        width: 7px;
        background-color: rgba(209, 251, 230, 0.54);
    }
    /* Track */
    ::-webkit-scrollbar-track {
        box-shadow: inset 0 0 5px grey;
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
