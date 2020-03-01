<template>
    <div class="chat-list">
        <UserChatItem
                v-for="(chat, index) in chats"
                :user="chat.user"
                :date="chat.date"
                :message="chat.message"
                :lastMessageSeen="chat.lastMessageSeen"
                :key="'chatitem' + index"
                @click.native="goToChat(chat.user)"
        />
    </div>
</template>

<script lang="ts">
    import { Component, Vue } from 'vue-property-decorator';
    import UserChatItem from '../UserChatItem.vue'

    @Component({
        components: {
            UserChatItem
        }
    })
    export default class ChatList extends Vue {

        goToChat(name: string) {
            this.$router.push({name: 'chat', params: {user: name}});
        }

        get chats() {
            const chats = this.$store.state.chats;
            chats[Symbol.iterator] = function* () {
            const keys: string[] = Object.keys(this);

            for(let i = 0; i < keys.length; i++) {
                const valueToReturn = {
                    user: keys[i],
                    lastMessageSeen: chats[keys[i]].lastMessageSeen,
                    message: chats[keys[i]].messages[chats[keys[i]].messages.length - 1].message,
                    date: chats[keys[i]].messages[chats[keys[i]].messages.length - 1].date.replace(",", "")
                };
                yield valueToReturn;
            }
            };
            return [...chats];
        }
    }
</script>

<style scoped lang="scss">
    .chat-list {
        width: 100%;
        height: 100%;
    }
</style>
