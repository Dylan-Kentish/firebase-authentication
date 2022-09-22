import {
    signInWithEmailLink,
    isSignInWithEmailLink,
    sendSignInLinkToEmail,
} from "firebase/auth";

import { auth } from './authentication'

function emailLinkActionCodeSettings() {
    return {
        url: 'https://***REMOVED***.web.app/dashboard',
        handleCodeInApp: true,
        dynamicLinkDomain: 'dylanauthentication.page.link'
    };
}

const logInWithEmail = async (email) => {
    try {
        await sendSignInLinkToEmail(auth, email, emailLinkActionCodeSettings());
        // Obtain emailLink from the user.
        const emailLink = ""
        if (isSignInWithEmailLink(auth, emailLink)) {
            await signInWithEmailLink(auth, email, emailLink);
        }
    } catch (err) {
        console.error(err);
        alert(err.message);
    }
};


export {
    logInWithEmail
};