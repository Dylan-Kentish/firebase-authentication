import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import { db } from "../database/database";
import "./Dashboard.css";
import { auth, logout } from "../authentication/authentication";
import { doc, getDoc } from "firebase/firestore";

function Dashboard() {
    const [user, loading] = useAuthState(auth);
    const navigate = useNavigate();
    const [username, setUsername] = useState()

    useEffect(() => {
        const fetchUserName = async () => {
            try {
                const docRef = doc(db, "users", user.uid);
                const docSnap = await getDoc(docRef);
                if (docSnap.exists()) {
                    const data = docSnap.data()
                    setUsername(data.username);
                } else {
                    alert("An error occured while fetching user data" + user.uid);
                }
            } catch (err) {
                console.error(err);
                alert("An error occured while fetching user data");
            }
        };

        if (loading) return;

        if (!user) {
            navigate('/')
        } else {
            fetchUserName()
        }
    }, [user, loading, navigate, setUsername]);

    return (
        <div className="dashboard">
            <div className="dashboard__container">
                Logged in as
                <div>{username}</div>
                <button className="dashboard__btn" onClick={logout}>
                    Logout
                </button>
            </div>
        </div>
    );
}
export default Dashboard;