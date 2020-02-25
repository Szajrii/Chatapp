<template>
    <div class="friends-management-element">
        <div class="friends-management-element-avatar" :style="{'background-color': bgColor}">{{userName.charAt(0).toUpperCase()}}</div>
        <div class="friends-management-element-user">
            <p>{{userName}}</p>
            <p>{{text}}</p>
        </div>
        <div class="friends-management-element-actions">
            <div><i :class="firstIcon.className" :style="{'color': firstIcon.color}" :title="firstIcon.title"></i></div>
            <div v-if="type !== 'finder'"><i :class="secondIcon.className" :style="{'color': secondIcon.color}" :title="secondIcon.title"></i></div>
        </div>
    </div>
</template>

<script lang="ts">
    import { Component, Vue, Prop } from 'vue-property-decorator';

    type Icon = {
        className: string,
        color: string
    }

    @Component
    export default class FriendManagementElement extends Vue {
        @Prop()
        userName: string | undefined;
        @Prop()
        type: string | undefined;

        get bgColor(): string {
            const colors = ['#6314b5', '#ffa415', '#61c23d', '#1652c2', '#c23448'];
            return colors[Math.floor(Math.random()* 5)];
        }

        get text() {
            switch (this.type) {
                case 'request':
                    return 'Has send you a friend request.';
                case 'management':
                    return 'Choose action to perform on this user.';
                case 'finder':
                    return 'This user was found.'
            }
        }

        get firstIcon() {
            switch (this.type) {
                case 'request':
                    return {
                        className: 'fas fa-check',
                        color: 'green',
                        title: 'Accept request.'
                    };
                case 'management':
                    return {
                        className: 'far fa-comment-alt',
                        color: 'blue',
                        title: 'Start conversation.'
                    };
                case 'finder':
                    return {
                        className: 'fas fa-user-plus',
                        color: 'orange',
                        title: 'Send friend request.'
                    }
            }
        }

        get secondIcon() {
            switch (this.type) {
                case 'request':
                    return {
                        className: 'far fa-times-circle',
                        color: 'red',
                        title: 'Decline request.'
                    };
                case 'management':
                    return {
                        className: 'fas fa-trash-alt',
                        color: 'red',
                        title: 'Remove user.'
                    };
            }
        }
    }
</script>

<style scoped lang="scss">
    .friends-management-element {
        width: 100%;
        height: 150px;
        background-color: #fbfdff;
        -webkit-box-shadow: 6px 7px 23px -3px rgba(194,194,194,1);
        -moz-box-shadow: 6px 7px 23px -3px rgba(194,194,194,1);
        box-shadow: 6px 7px 23px -3px rgba(194,194,194,1);
        border-top-right-radius: 25px;
        border-bottom-left-radius: 5px;
        display: flex;
        -webkit-box-align: center;
        align-items: center;
        margin: 10px 0;

        &-avatar {
            height: 75px;
            width: 75px;
            color: white;
            margin-left: 15px;
            text-align: center;
            line-height: 75px;
            font-size: 40px;
            -webkit-box-shadow: 6px 7px 23px -3px rgba(194,194,194,1);
            -moz-box-shadow: 6px 7px 23px -3px rgba(194,194,194,1);
            box-shadow: 6px 7px 23px -3px rgba(194,194,194,1);
        }

        &-user {
            width: 80%;
            padding-left: 20px;
            -webkit-box-align: center;
            align-items: center;
            font-size: 20px;
            font-family: Consolas;
        }

        &-actions {
            width: 15%;
            height: 80%;
            text-align: center;

            div {
                width: 100%;
                height: 45%;
                font-size: 25px;
                transform: translateY(5px);

                i {
                    cursor: pointer;
                }
            }
        }
    }
</style>
