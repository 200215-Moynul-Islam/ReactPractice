import { useState } from "react";
import "./Header.css"
import LoginModal from "../LoginModal/LoginModal";
import SignupModal from "../SignupModal/SignupModal"

function HeaderAuth({onAuthSuccess}){
    const [activeModal, setActiveModal] = useState(null);

    const openLoginModal = () => setActiveModal("login");
    const openSignupModal = () => setActiveModal("signup");
    const closeModal = () => setActiveModal(null);

    return (
        <div className="header-auth">
            <button className="login" onClick={openLoginModal}>Log In</button>
            <button className="signup" onClick={openSignupModal}>Sign Up</button>

            <LoginModal isOpen={activeModal === "login"} onClose={closeModal} onSwitchToSignup={openSignupModal} onLoginSuccess={onAuthSuccess}/>
            <SignupModal isOpen={activeModal === "signup"} onClose={closeModal} onSwitchToLogin={openLoginModal} onSignupSuccess={onAuthSuccess}/>
        </div>
    );
}

export default HeaderAuth;