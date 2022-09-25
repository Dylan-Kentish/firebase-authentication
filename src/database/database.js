import {
    getFirestore,
    collection,
    setDoc,
    doc,
    getDoc
} from "firebase/firestore";

import { app } from '../app/app'

const db = getFirestore(app);

const addNewUser = async (uuid, username, email) => {
    const docRef = doc(collection(db, "users"), uuid)
    const docSnap = await getDoc(doc)
    
    if (!docSnap.exists()) {
        await setDoc(docRef, {
            userId: uuid,
            email,
            username,
        });
    }    
};

export {
    db,
    addNewUser
};