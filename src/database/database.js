import {
    getFirestore,
    collection,
    addDoc,
} from "firebase/firestore";

import { app } from '../app/app'

const db = getFirestore(app);

const addNewUser = async (user, name, email, authProvider) => {
    await addDoc(collection(db, "users"), {
        uid: user.uid,
        name,
        authProvider: authProvider,
        email,
    });
};

export {
    db, 
    addNewUser
};