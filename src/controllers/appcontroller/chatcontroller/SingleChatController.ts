import {AppController} from "@/controllers/appcontroller/AppController";
import firebase from 'firebase'
import QuerySnapshot = firebase.firestore.QuerySnapshot;

type Chats = {
    [name: string]: Chat
}

type Chat = {
    lastMessageSeen: boolean
    messages: Message[]
}

type Message = {
    message: string,
    date: string,
    sender: string
}
export class SingleChatController extends AppController{

    constructor(name: string) {
        super(name);
    }

    public async sendMessage(destination: string, message: string): Promise<void> {
        const collection: QuerySnapshot = await this.db.collection('Users').get();
        const destinationEmail = this.getUserDestinationEmail(destination, collection);
        const date = SingleChatController.getDate();
        const userCollection = await this.db.collection('Users').doc(this.userName).get();
        // @ts-ignore
        const chat = userCollection.data().chats[destination];
        const dateString = `${date.day}.${date.month}.${date.year}, ${date.hour}:${date.minutes}`;
        // @ts-ignore
        const messageToUpload = {message, date: dateString, sender: userCollection.data().name};
        if (chat) {
            // @ts-ignore
            this.performSending(destination, destinationEmail, userCollection.data().name, [...chat.messages, messageToUpload]);
        } else {
            // @ts-ignore
            this.performSending(destination, destinationEmail, userCollection.data().name, [messageToUpload]);
        }
    }

    private async performSending(destination: string, destinationEmail: string, sender: string, messages: any[]): Promise<void> {
        const sourceData = await this.db.collection('Users').doc(this.userName).get();
        // @ts-ignore
        const sourceChats = sourceData.data().chats;

        const destinationData = await this.db.collection('Users').doc(destinationEmail).get();
        // @ts-ignore
        const destinationChats = destinationData.data().chats;

        this.db.collection('Users').doc(this.userName).update({
            chats: {
                ...sourceChats,
                [destination]: {
                    lastMessageSeen: true,
                    messages: messages
                }
            }
        });

        this.db.collection('Users').doc(destinationEmail).update({
            chats: {
                ...destinationChats,
                [sender]: {
                    lastMessageSeen: false,
                    messages: messages
                }
            }
        });
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

    private static getDate() {
        const dateObj = new Date();
        return {
            day: (dateObj.getDay() + 1).toString().length < 2? '0' + (dateObj.getDay() + 1): dateObj.getDay() + 1,
            month: (dateObj.getMonth() + 1).toString().length < 2? '0' + (dateObj.getMonth()+ 1): dateObj.getMonth() + 1,
            year: dateObj.getFullYear(),
            hour: dateObj.getHours().toString().length < 2? '0' + dateObj.getHours(): dateObj.getHours(),
            minutes: dateObj.getMinutes().toString().length < 2? '0' + dateObj.getMinutes(): dateObj.getMinutes()
        }
    }
}
