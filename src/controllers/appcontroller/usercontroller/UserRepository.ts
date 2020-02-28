import {AppController} from "@/controllers/appcontroller/AppController";
import {Store} from "vuex";

export class UserRepository extends AppController {

    private subscription: () => void;

    constructor(name: string, private store: Store<any>) {
        super(name);
        this.store = store;
        this.subscription = this.db.collection('Users').doc(this.userName).onSnapshot(snapshot => {
            // @ts-ignore
            const request: string[] = snapshot.data().friends.requests;
            // @ts-ignore
            const friendList: string[] = snapshot.data().friends.list;

            if (this.checkIfListChanged(this.store.state.requests, request)) {
                this.store.commit('setRequests', request);
            }
            if (this.checkIfListChanged(this.store.state.friendList, friendList)) {
                this.store.commit('setFriendList', friendList);
            }
        })
    }

    private checkIfListChanged(actual: string[], upcoming: string[]): boolean {
        if (actual.length !== upcoming.length) {
            return true
        }

        let valuesChanged: boolean = false;

        actual.forEach(a => {
            upcoming.some(u => {
                if (u === a) {
                    return true;
                } else {
                    valuesChanged = true;
                    return false;
                }
            })
        });
        return valuesChanged;
    }

}
