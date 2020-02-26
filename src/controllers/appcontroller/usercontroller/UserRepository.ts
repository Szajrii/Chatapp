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

            this.store.commit('setRequests', request);
        })
    }

}
