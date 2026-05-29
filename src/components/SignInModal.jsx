import { useState } from "react";

export default function ModalOne ({CloseModal, Signin}) {

    const [authMode, setAuthMode] = useState("login");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [username, setUsername] = useState ("")
    const [phoneNumber, setPhoneNumber] = useState ("")
    const [confirmPassword, setConfirmPassword] = useState ("")

    function handleSignin (e) {
        e.preventDefault()
        Signin (username);
        CloseModal();
    }

    return (
        <div className="modal-backdrop" onClick={CloseModal}>
            <form className="modal auth-modal" onClick={e => e.stopPropagation()} onSubmit={handleSignin} >
                <div className="auth-header">
                    <button
                        type="button"
                        className={authMode==='login' ? "auth-tab active" : "auth-tab"}
                        onClick={() => setAuthMode("login")}  
                    >
                        Login
                    </button>

                    <button
                        type="button"
                        className={authMode==='register' ? "auth-tab active" : "auth-tab"}
                        onClick={() => setAuthMode("register")}
                    >
                        Register
                    </button>                   
                </div>
                <div className="auth-form">
                    <div className="form-field">
                        <label for='username'>Username</label>
                        <input required
                            id="username"
                            type="text"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />

                        {authMode==='register' &&
                        <>
                        <label for='email'>Email</label>
                        <input required = {authMode ==='register'}
                            id="email"
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        </>}

                        <label for='password' >Password</label>
                        <input required
                            id="password"
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />

                        {authMode==='register' &&
                        <>
                        <label for='confirmPassword'>Confirm Password</label>
                        <input required = {authMode ==='register'}
                            id="confirmPassword"
                            type="password"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                        />
                        {confirmPassword!==password && <p className="pass-fail">Passwords do not match!</p>}
                        <label>Phone Number</label>
                        <input required = {authMode ==='register'}
                            type="tel"
                            value={phoneNumber}
                            onChange={(e) => setPhoneNumber(e.target.value)}
                        /> 
                        </>}
                    </div>
                    <div className="modal-actions auth-actions">
                        <button 
                            type="button"
                            className="btn btn-ghost"
                            onClick={CloseModal}
                        >
                            Cancel
                        </button>
                        <button 
                            type="submit"
                            className="btn btn-primary"
                            disabled={confirmPassword!==password && authMode === 'register'}
                        >
                            Submit
                        </button>
                    </div>
                </div>
            </form>
        </div>
    );}