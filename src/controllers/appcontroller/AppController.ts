import firebase from 'firebase'
import Firestore = firebase.firestore.Firestore;

export abstract class AppController {
    protected db: Firestore;
    private userName: string;

    constructor(name: string) {
        this.db = firebase.firestore();
        this.userName = name;
    }
}
