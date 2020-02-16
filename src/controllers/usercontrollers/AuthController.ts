import firebase from 'firebase'
import UserCredential = firebase.auth.UserCredential;
import Auth = firebase.auth.Auth;
import Firestore = firebase.firestore.Firestore;

export class AuthController{
    static auth: Auth;
    static db: Firestore;

    static logInUser(email: string, password: string): Promise<UserCredential> {
        return AuthController.auth.signInWithEmailAndPassword(email, password);
    }

    static registerUser(email: string, password: string): Promise<UserCredential> {
        return AuthController.auth.createUserWithEmailAndPassword(email, password);
    }

    static async getUserName(email: string): Promise<string> {
        const users = await AuthController.db.collection('Users').get();
        const user = users.docs.find(u => u.data().email === email);
        // @ts-ignore
        return user.data().name;
    }

    static setDefaultDataBaseData(name: string, email: string) {
        AuthController.db.collection("UsersList").doc('Users').update({
            Users: firebase.firestore.FieldValue.arrayUnion(name)
        })
            .then(() => {
                AuthController.db.collection('Users').doc(email).set({
                    name,
                    email,
                    chats: [],
                    friends: {
                        list: [],
                        requests: []
                    }
                })
            })
    }

    static async checkIfUserExist(name: string): Promise<boolean> {
        const doc = await AuthController.db.collection('UsersList').doc('Users').get();
        // @ts-ignore
        return doc.data().Users.some(u => u === name);
    }
}
