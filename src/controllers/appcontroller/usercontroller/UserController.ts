import {AppController} from "@/controllers/appcontroller/AppController";

export class UserController extends AppController {

    constructor(name: string) {
        super(name);
    }

    async findUser(user: string) {
       const doc = await this.db.collection('UsersList').doc('Users').get();
       console.log(doc.data())
       // @ts-ignore
       return doc.data().Users.find(u => u === user);
    }
}
