<template>
    <div class="chat-element">
        <div class="chat-element-wrapper" :class="[isSenderDestinationUser? 'seconduser-message': 'your-message']">
            <div class="chat-element-header">
                <div class="chat-element-header-name">{{sender}}</div>
                <div class="chat-element-header-date">{{date}}</div>
            </div>
            <div class="chat-element-content">{{message}}</div>
        </div>
    </div>
</template>

<script lang="ts">
    import { Component, Vue, Prop } from 'vue-property-decorator';

    @Component
    export default class ChatElement extends Vue {
        @Prop()
        sender: string | undefined;
        @Prop()
        date: string | undefined;
        @Prop()
        message: string | undefined;
        @Prop()
        destinationUser: string | undefined;

        get isSenderDestinationUser() {
            return this.sender === this.destinationUser;
        }
    }
</script>

<style scoped lang="scss">
    .chat-element {
        width: 100%;

        &-wrapper {
            width: 30%;
            margin: 15px 15px;
            padding: 5px 10px;
            font-size: 15px;
            color: white;
            border-radius: 25px;

            .chat-element-content {
                word-wrap: break-word;
            }
        }

        &-header {
            width: 100%;
            display: flex;
            justify-content: space-between;
            color: orange;

            &-name {
                font-size: 13px;
            }
        }

    }

    .your-message {
        margin-left: 67%;
        background: rgb(58,108,180);
        background: linear-gradient(196deg, rgba(58,108,180,0.7931547619047619) 0%, rgba(29,45,253,0.6895133053221288) 42%, rgba(17,23,191,0.5522584033613445) 100%);
    }

    .seconduser-message {
        background: rgb(119,58,180);
        background: linear-gradient(196deg, rgba(119,58,180,0.8407738095238095) 0%, rgba(141,29,253,0.7287289915966386) 42%, rgba(101,17,191,0.6138830532212884) 100%);
    }
</style>
