<template>
    <div class="user-list">
        <div class="user-list-expandable">
            <p>Chats list <span><i class="fas fa-sort-down"></i></span></p>
                <div :class="[chatListExpanded?  'collapsed': '','user-list-expandable-items']"  id="chat-list">
                    asdasda
                </div>
        </div>
        <div class="user-list-expandable">
            <p>Friends list <span><i class="fas fa-sort-down"></i></span></p>
                <div class="user-list-expandable-items" id="friend-list">

                </div>
        </div>
    </div>
</template>

<script lang="ts">
    import { Component, Vue } from 'vue-property-decorator';

    @Component
    export default class UserList extends Vue {
        chatListExpanded: boolean = true;
        friendListExpanded: boolean = true;
    }
</script>

<style scoped lang="scss">

    .user-list {
        width: 20%;
        height: 100%;
        background-image: url("../../images/sidemenu.png");
        background-repeat: no-repeat;
        background-position: 10%, 70%;

        &-expandable {
            width: 100%;
            max-height: 80%;
            margin-block-start: 0.1em;
            margin-block-end: 0.1em;
            margin-inline-start: 0;
            margin-inline-end: 0;

            &-items {
                transition: all 12.5s; // to be replace, in component get current window height and do math for half screen and set it with pixels
                width: 90%;
                margin: auto;
                max-height: 0;
                opacity: 0;
            }

            p {
                margin-block-start: 0.1em;
                margin-block-end: 0.1em;
                margin-inline-start: 0;
                margin-inline-end: 0;
                padding: {
                    top: 15px;
                    left: 15%;
                }
                color: white;
                i {
                    transform: translateY(-2px);
                    padding-left: 3px;
                }
            }
        }
    }
    .collapsed {
        max-height: 500px;
        opacity: 1;
    }
</style>
