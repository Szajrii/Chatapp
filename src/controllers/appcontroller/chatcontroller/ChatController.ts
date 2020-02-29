import {AppController} from "@/controllers/appcontroller/AppController";
import {Store} from "vuex";

export class ChatController extends AppController{

    private subscription: () => void;

    constructor(name: string, private store: Store<any>) {
        super(name);
        this.setChats();
        this.subscription = this.db.collection('Users').doc(this.userName).onSnapshot(snapshot => {

        })
    }

    private async setChats(): Promise<void> {
        const chats = await this.db.collection('Users').doc(this.userName).get();
        // @ts-ignore
        this.store.commit('setChats', chats.data().chats);
    }
}
