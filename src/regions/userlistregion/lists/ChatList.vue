<template>
    <div class="chat-list">
        <UserChatItem/>
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

    }
</script>

<style scoped lang="scss">
    .chat-list {
        width: 100%;
        height: 100%;
    }
</style>
