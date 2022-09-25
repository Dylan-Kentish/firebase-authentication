import { useEffect } from "react";
import { tryLogInWithEmailLink } from "../authentication/email-link.js";
import { useLocation } from 'react-router-dom'


export const Root = ({ children }) => {
    const location = useLocation()
    useEffect(() => {
        console.log(`You changed the page to: ${location.pathname}`)
        tryLogInWithEmailLink(window.location.href)
    }, [location])

    return (children);
};