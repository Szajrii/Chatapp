<template>
    <div class="chat-element">
        <div class="chat-element-wrapper">
            <div class="chat-element-header">
                <div class="chat-element-header-name">asdasd</div>
                <div class="chat-element-header-date">asdasdas</div>
            </div>
            <div class="chat-element-content">asdasda</div>
        </div>
    </div>
</template>

<script lang="ts">
    import { Component, Vue } from 'vue-property-decorator';

    @Component
    export default class ChatElement extends Vue {

    }
</script>

<style scoped lang="scss">
    .chat-element {

        width: 100%;

        &-wrapper {
            width: 30%;
            background: rgb(58,180,160);
            background: linear-gradient(196deg, rgba(58,180,160,1) 0%, rgba(29,180,253,1) 42%, rgba(17,132,191,1) 100%);
            margin: 15px 15px;
            padding: 5px 10px;
            font-size: 15px;
            color: white;
            border-radius: 25px;
        }

        &-header {
            width: 100%;
            display: flex;
            justify-content: space-between;
            color: orange;

            &-name {

            }
        }
    }
</style>
