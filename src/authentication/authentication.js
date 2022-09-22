import {
    getAuth,
    signOut,
} from "firebase/auth";

import { app } from '../app/app'

const auth = getAuth(app);

const logout = () => {
    signOut(auth);
};

export {
    app,
    auth,
    logout,
};