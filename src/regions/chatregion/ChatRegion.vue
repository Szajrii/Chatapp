<template>
    <div class="chat-region">
        <div class="chat-region-toppanel"></div>
        <div class="chat-region-app">
            <router-view />
        </div>
    </div>
</template>

<script lang="ts">
    import { Component, Vue } from 'vue-property-decorator';

    @Component
    export default class ChatRegion extends Vue {

    }
</script>

<style scoped lang="scss">

    .chat-region {
        width: 80%;
        height: 100%;

        &-toppanel {
            width: 100%;
            height: 7%;
            background-color: rgba(203, 211, 255, 0.6);
            //border-bottom: 1px solid #7b76b5;
            -webkit-box-shadow: 4px 15px 29px -23px rgba(0,0,0,0.75);
            -moz-box-shadow: 4px 15px 29px -23px rgba(0,0,0,0.75);
            box-shadow: 4px 15px 29px -23px rgba(0,0,0,0.75);
        }

        &-app {
            width: 100%;
            height: 93%;
            overflow-y: auto;
        }
    }

</style>
