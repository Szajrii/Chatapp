import firebase from 'firebase'
import {AppController} from "@/controllers/appcontroller/AppController";

export class UserController extends AppController {

    constructor(name: string) {
        super(name);
    }

    async findUser(user: string) {
       const doc = await this.db.collection('UsersList').doc('Users').get();
       // @ts-ignore
       return doc.data().Users.find(u => u === user);
    }

    async sendFriendRequest(destination: string | null) {
        const collection = await this.db.collection('Users').get();
        let destinationEmail;
        collection.forEach(x =>  {
            if (x.data().name === destination) {
                destinationEmail = x.data().email;
            }
        });

        const userDestinationRequests = await this.db.collection('Users').doc(destinationEmail).get();
        // @ts-ignore
        const friendsList = userDestinationRequests.data().friends.list;
        // @ts-ignore
        if (!userDestinationRequests.data().friends.requests.some(r => r === destination)) {
            this.db.collection('Users').doc(destinationEmail).update({
                friends: {
                    list: friendsList,
                    requests: firebase.firestore.FieldValue.arrayUnion(this.userName),
                }
            })
        }
    }
}
