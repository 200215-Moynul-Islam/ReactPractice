import "./LoginModal.css";
import {UserLock} from "lucide-react";

function LoginModalHeader(){
    return (
        <div className="login-modal-header">
            <UserLock size={45} color="#ff0000" className="user-lock-icon"/>
            <h2>Welcome to <span className="website-name">MovieHub</span></h2>
            <p className="login-modal-header-subtitle">Enter your credentials to access your account.</p>
        </div>
    );
}

export default LoginModalHeader;