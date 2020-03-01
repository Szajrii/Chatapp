<template>
    <div class="user-list-friend-item">
        <div class="user-list-friend-item-content">
            <div class="user-list-friend-item-content-avatar">
                {{name.charAt(0).toUpperCase()}}
            </div>
            <div class="user-list-friend-item-content-name">{{name}}</div>
        </div>
    </div>
</template>

<script lang="ts">
    import { Component, Vue, Prop } from 'vue-property-decorator';

    @Component
    export default class UserFriendItem extends Vue {
        @Prop()
        name: string | undefined;
    }
</script>

<style scoped lang="scss">

    .user-list-friend-item {
        width: 100%;
        height: 50px;
        border-bottom: 1px solid gray;
        cursor: pointer;

        &-content {
            width: 90%;
            margin: auto;
            display: flex;
            font-size: 15px;
            font-family: "Book Antiqua";

            &-name {
                line-height: 50px;
                padding-left: 15px;
                font-weight: bold;
            }

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
        }
    }
</style>
