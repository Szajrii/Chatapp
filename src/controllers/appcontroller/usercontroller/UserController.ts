import firebase from 'firebase'
import {AppController} from "@/controllers/appcontroller/AppController";
import QuerySnapshot = firebase.firestore.QuerySnapshot;

export class UserController extends AppController {

    constructor(name: string) {
        super(name);
    }

    private getUserDestinationEmail(destinationName: string, collection: QuerySnapshot): string {
        let destinationEmail;
        collection.docs.some(c => {
            if (c.data().name === destinationName) {
                destinationEmail = c.data().email;
                return;
            }
        });
        // @ts-ignore
        return destinationEmail;
    }

    async findUser(user: string): Promise<string> {
       const doc = await this.db.collection('UsersList').doc('Users').get();
       // @ts-ignore
       return doc.data().Users.find(u => u === user);
    }

    async sendFriendRequest(destination: string): Promise<void> {
        const collection: QuerySnapshot = await this.db.collection('Users').get();
        const destinationEmail = this.getUserDestinationEmail(destination, collection);

        const userDestinationFriends = await this.db.collection('Users').doc(destinationEmail).get();
        // @ts-ignore
        const destinationFriendsList = userDestinationFriends.data().friends.list;
        // @ts-ignore
        if (!userDestinationFriends.data().friends.requests.some(r => r === destination)) {
            this.db.collection('Users').doc(destinationEmail).update({
                friends: {
                    list: destinationFriendsList,
                    requests: firebase.firestore.FieldValue.arrayUnion(this.userName),
                }
            })
        }
    }

    async acceptUserRequest(name: string, sourceEmail: string): Promise<void> {
        const collection: QuerySnapshot = await this.db.collection('Users').get();
        const destinationEmail = this.getUserDestinationEmail(name, collection);
        const userDestinationFriends = await this.db.collection('Users').doc(destinationEmail).get();
        const userSourceFriends = await this.db.collection('Users').doc(sourceEmail).get();

        // @ts-ignore
        const diestinationFriendsList = userDestinationFriends.data().friends.list;
        // @ts-ignore
        const destinationRequest = userDestinationFriends.data().friends.requests;

        // @ts-ignore
        const sourceFriendsList = userSourceFriends.data().friends.list;
        // @ts-ignore
        const sourceRequest = userSourceFriends.data().friends.requests;

        diestinationFriendsList.push(this.userName);

        this.db.collection('Users').doc(destinationEmail).update({
            friends: {
                list: diestinationFriendsList,
                requests: destinationRequest,
            }
        });

        sourceFriendsList.push(name);
        sourceRequest.splice(sourceRequest.indexOf(name), 1);

        this.db.collection('Users').doc(sourceEmail).update({
            friends: {
                list: sourceFriendsList,
                requests: sourceRequest,
            }
        });
    }

    async declineUserRequest(name: string, sourceEmail: string): Promise<void> {
        const userSourceFriends = await this.db.collection('Users').doc(sourceEmail).get();
        // @ts-ignore
        const sourceFriendsList = userSourceFriends.data().friends.list;
        // @ts-ignore
        const sourceRequest = userSourceFriends.data().friends.requests;

        sourceRequest.splice(sourceRequest.indexOf(name), 1);

        this.db.collection('Users').doc(sourceEmail).update({
            friends: {
                list: sourceFriendsList,
                requests: sourceRequest,
            }
        });
    }

    async deleteUser(name: string, sourceEmail: string): Promise<void> {
        const collection: QuerySnapshot = await this.db.collection('Users').get();
        const userSourceFriends = await this.db.collection('Users').doc(sourceEmail).get();
        const destinationEmail = this.getUserDestinationEmail(name, collection);
        const userDestinationFriends = await this.db.collection('Users').doc(destinationEmail).get();
        // @ts-ignore
        const sourceFriendsList = userSourceFriends.data().friends.list;
        // @ts-ignore
        const sourceRequest = userSourceFriends.data().friends.requests;

        // @ts-ignore
        const diestinationFriendsList = userDestinationFriends.data().friends.list;
        // @ts-ignore
        const destinationRequest = userDestinationFriends.data().friends.requests;

        sourceFriendsList.splice(sourceFriendsList.indexOf(name), 1);

        this.db.collection('Users').doc(sourceEmail).update({
            friends: {
                list: sourceFriendsList,
                requests: sourceRequest,
            }
        });

        diestinationFriendsList.splice(diestinationFriendsList.indexOf(this.userName), 1);

        this.db.collection('Users').doc(destinationEmail).update({
            friends: {
                list: diestinationFriendsList,
                requests: destinationRequest,
            }
        });
    }

}
