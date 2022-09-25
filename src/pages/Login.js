import React, { useEffect, useState } from "react";
import Tabs from "../components/Tabs";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../authentication/authentication";
import { logInWithEmailAndPassword } from "../authentication/email-password";
import { logInWithEmail } from "../authentication/email-link";
import { useAuthState } from "react-firebase-hooks/auth";
import "./Login.css";
function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [user, loading] = useAuthState(auth);
    const navigate = useNavigate();
    useEffect(() => {
        if (loading) return
        if (user) navigate("/dashboard");
    }, [user, loading, navigate]);

    return (
        <div className="login">
            <Tabs>
                <div label="Email & Password">
                    <div className="login__container">
                        <input
                            type="text"
                            className="login__textBox"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="E-mail Address"
                        />
                        <input
                            type="password"
                            className="login__textBox"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Password"
                        />
                        <button
                            className="login__btn"
                            onClick={() => logInWithEmailAndPassword(email, password)}
                        >
                            Login
                        </button>
                        <div>
                            <Link to="/reset">Forgot Password</Link>
                        </div>
                        <div>
                            Don't have an account? <Link to="/register">Register</Link> now.
                        </div>
                    </div>
                </div>
                <div label="Email link">
                    <div className="login__container">
                        <input
                            type="text"
                            className="login__textBox"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="E-mail Address"
                        />
                        <button
                            className="login__btn"
                            onClick={() => logInWithEmail(email)}>
                            Login
                        </button>
                        <div>
                            Don't have an account? <Link to="/register">Register</Link> now.
                        </div>
                    </div>
                </div>
            </Tabs>
        </div>
    );
}
export default Login;