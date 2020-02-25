<template>
    <div class="friends-management">
        <div class="friends-management-finder">
            <ExpandableElement buttonName="Find User" identifier="collapse1">
                <div class="friends-management-finder-body">
                    <input type="text" class="form-control" v-model="userSearch">
                    <button class="btn btn-primary" @click="findUser">Search</button>
                </div>
                <div class="friends-management-finder-result">
                    <FriendsManagementElement :userName="userFound" type="finder" v-if="userFound"/>
                    <p v-else>Given user does not exist</p>
                </div>
            </ExpandableElement>
        </div>
        <div class="friends-management-request">
            <ExpandableElement buttonName="Friend requests(0)" identifier="collapse2">
                <div class="friends-management-request-list">
                    <FriendsManagementElement userName="Maciek" type="request"/>
                </div>
            </ExpandableElement>
        </div>
        <div class="friends-management-friendlist">
            <ExpandableElement buttonName="Friend list(0)" identifier="collapse3">
                <div class="friends-management-friendlist-users">
                    <FriendsManagementElement userName="Tomek" type="management"/>
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

        findUser() {
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
