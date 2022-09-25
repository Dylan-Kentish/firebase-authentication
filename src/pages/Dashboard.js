import React, { useEffect } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import "./Dashboard.css";
import { auth, logout } from "../authentication/authentication";
function Dashboard() {
    const [user, loading] = useAuthState(auth);
    const navigate = useNavigate();
    useEffect(() => {
        console.error(loading);
        if (loading) return;

        if (!user) {
            navigate('/')
        }
    }, [user, loading, navigate]);

    return (
        <div className="dashboard">
            <div className="dashboard__container">
                Logged in as
                <div>{user?.displayName}</div>
                <button className="dashboard__btn" onClick={logout}>
                    Logout
                </button>
            </div>
        </div>
    );
}
export default Dashboard;