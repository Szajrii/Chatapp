<template>
    <div class="chat-region">
        <div class="chat-region-toppanel">{{currentTab.toUpperCase()}}</div>
        <div class="chat-region-app">
            <router-view />
        </div>
    </div>
</template>

<script lang="ts">
    import { Component, Vue } from 'vue-property-decorator';

    @Component
    export default class ChatRegion extends Vue {
        get currentTab() {
            return this.$store.state.currentTab;
        }
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
            color: white;
            text-shadow: 1px 1px black, 1px 1px gray, 1px 1px gray, 1px 2px gray;
            padding-left: 15px;
            font-size: 23px;
            letter-spacing: 3px;
            font-family: Impact;
        }

        &-app {
            width: 100%;
            height: 93%;
            overflow-y: auto;
        }
    }

    @media only screen and (max-width: 1400px) {
        .chat-region {
            width: 75%;
            height: 100%;

            &-toppanel {
                height: 10%;
            }

            &-app {
                height: 90%;
            }
        }
    }
    @media only screen and (max-width: 1000px) {
        .chat-region {
            width: 70%;
            height: 100%;

            &-toppanel {
                height: 13%;
            }

            &-app {
                height: 87%;
            }
        }
    }

</style>
