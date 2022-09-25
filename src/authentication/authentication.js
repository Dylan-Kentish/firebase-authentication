import {
    getAuth,
    signOut,
} from "firebase/auth";

import { app } from '../app/app';

const auth = getAuth(app);

const logout = () => {
    signOut(auth);
};


const uniqueUsername = (email) => {
    let username = email.substring(0, email.lastIndexOf("@"));
    username += Math.round((Math.random() * 10)).toString()
    return username
}

export {
    auth,
    logout,
    uniqueUsername
};