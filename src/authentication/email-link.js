import {
    signInWithEmailLink,
    isSignInWithEmailLink,
    sendSignInLinkToEmail,
} from "firebase/auth";

import { auth } from './authentication'

import { addNewUser } from '../database/database'

function emailLinkActionCodeSettings() {
    return {
        url: 'https://dylanauthentication.page.link/dashboard',
        handleCodeInApp: true,
        dynamicLinkDomain: 'dylanauthentication.page.link'
    };
}

const logInWithEmail = async (email) => {
    try {
        await sendSignInLinkToEmail(auth, email, emailLinkActionCodeSettings());
        window.localStorage.setItem('emailForSignIn', email);
    } catch (err) {
        console.error(err);
        alert(err.message);
    }
};

const tryLogInWithEmailLink = async (emailLink) => {
    try {
        if (isSignInWithEmailLink(auth, emailLink)) {
            let email = window.localStorage.getItem('emailForSignIn');
            if (!email) {
                // User opened the link on a different device. To prevent session fixation
                // attacks, ask the user to provide the associated email again. For example:
                email = window.prompt('Please provide your email for confirmation');
            }

            const res = await signInWithEmailLink(auth, email, emailLink);
            const user = res.user;
            const username = uniqueUsername(email)
            await addNewUser(user.uid, username, email, 'email-link');
            window.localStorage.removeItem('emailForSignIn');
        }
    } catch (err) {
        console.error(err);
        alert(err.message);
    }
}

const uniqueUsername = (email) => {
    const username = email.substring(0, email.lastIndexOf("@"));
    username += (Math.random() * 10).toString()
}


export {
    logInWithEmail,
    tryLogInWithEmailLink
};