<template>
    <div class="friends-management">
        <div class="friends-management-finder">
            <ExpandableElement buttonName="Find User" identifier="collapse1">
                <div class="friends-management-finder-body">
                    <input type="text" class="form-control" v-model="userSearch">
                    <button class="btn btn-primary" @click="findUser">Search</button>
                </div>
                <div class="friends-management-finder-result">
                    <FriendsManagementElement :userName="userFound" type="finder" v-if="userFound" @iconAction="performAction"/>
                    <p v-else>Given user does not exist</p>
                </div>
            </ExpandableElement>
        </div>
        <div class="friends-management-request">
            <ExpandableElement :buttonName="'Friend requests(' + requests.length + ')'" identifier="collapse2">
                <div class="friends-management-request-list">
                    <FriendsManagementElement :userName="request" type="request" v-for="(request, index) in requests" :key="'request number' + index" @iconAction="performAction"/>
                </div>
            </ExpandableElement>
        </div>
        <div class="friends-management-friendlist">
            <ExpandableElement :buttonName="'Friend list(' + friendsList.length +')'" identifier="collapse3">
                <div class="friends-management-friendlist-users">
                    <FriendsManagementElement :userName="friend" type="management" @iconAction="performAction" v-for="(friend, index) in friendsList" :key="'mangementfriend' + index"/>
                </div>
            </ExpandableElement>
        </div>
    </div>
</template>

<script lang="ts">
    import { Component, Vue } from 'vue-property-decorator';
    import ExpandableElement from "@/components/ExpandableElement.vue";
    import FriendsManagementElement from './FriendManagementElement.vue'
    import {UserController} from "@/controllers/appcontroller/usercontroller/UserController";
    import {AuthController} from "@/controllers/usercontrollers/AuthController";

    @Component({
        components: {
            ExpandableElement,
            FriendsManagementElement
        }
    })
    export default class FriendsManagement extends Vue {
        friendsController: UserController = new UserController(this.$store.state.user);
        userSearch: string = 'Type nick name here';
        userFound: string | null = null;

        get requests() {
            return this.$store.state.requests;
        }

        get friendsList() {
            return this.$store.state.friendList;
        }

        performAction({userName, icon, type}: FriendsManagementElementData): void {
            switch (type) {
                case 'finder':
                    this.sendUserRequest();
                    break;
                case 'request':
                    if (icon === 'firstIcon') {
                        this.acceptUser(userName);
                    } else {
                        this.declineUser(userName, this.$attrs.email);
                    }
                    break;
                case 'management':
                    if (icon === 'firstIcon') {
                        this.$router.push({name: 'chat', params: {user: userName}})
                    } else {
                        this.friendsController.deleteUser(userName, this.$attrs.email);
                    }
            }
        }

        findUser(): void {
            if (this.userFound === this.userSearch) {
                console.info('User already was found');
            } else {
                this.friendsController.findUser(this.userSearch)
                    .then(data => {
                        if (data) {
                            this.userFound = data;
                        } else {
                            this.userFound = null;
                        }
                    })
                    .catch(err => console.log(err));
            }
        }

        private sendUserRequest(): void {
            // @ts-ignore
            this.friendsController.sendFriendRequest(this.userFound);
        }

        private acceptUser(name: string): void {
            this.friendsController.acceptUserRequest(name, this.$attrs.email);
        }

        private declineUser(name: string, email: string): void {
            this.friendsController.declineUserRequest(name, email);
        }

        private deleteUser(name: string, email: string): void {

        }

    }

    type FriendsManagementElementData = {
        userName: string,
        icon: string,
        type: string
    }
</script>

<style scoped lang="scss">
    .friends-management {
        width: 100%;
        height: 100%;

        &-finder {
            width: 100%;

            &-result {
                width: 60%;
                margin: auto;
                display: block !important;
            }

            &-body {
                width: 70%;
                margin: auto;
                display: flex;

                input {
                    width: 80%;
                    border-top-right-radius: 0;
                    border-bottom-right-radius: 0;
                }

                button {
                    width: 20%;
                    border-top-left-radius: 0;
                    border-bottom-left-radius: 0;
                }
            }
        }

        &-request {
            width: 100%;

            &-list {
                width: 60%;
                margin: auto;
            }
        }

        &-friendlist {
            width: 100%;

            &-users {
                width: 60%;
                margin: auto;
            }
        }
    }
</style>
