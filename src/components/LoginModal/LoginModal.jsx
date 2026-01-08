import Modal from "../Modal/Modal"
import "./LoginModal.css"
import LoginModalHeader from "./LoginModalHeader";
import { useState } from "react";
import LoginModalBody from "./LoginModalBody";
import LoginModalFooter from "./LoginModalFooter"

function LoginModal({isOpen, onClose, onSwitchToSignup, onLoginSuccess}){
    const [formValues, setFormValues] = useState({
        emailOrUsername: "",
        password: "",
    });
    const [errors, setErrors] = useState({
        emailOrUsername: "",
        password: "",
    });

    const handleLoginSuccess = () => {
        onLoginSuccess();
        onClose();
    }

    if(!isOpen){
        return null;
    }
    return (
        <Modal isOpen={isOpen} onClose={onClose} className="login-modal">
            <LoginModalHeader />
            <LoginModalBody formValues={formValues} setFormValues = {setFormValues} errors = {errors} setErrors={setErrors} onLoginSuccess={handleLoginSuccess}/>
            <LoginModalFooter OnClickCreateAccount={onSwitchToSignup}/>
            <hr className="login-modal-bottom-strip" />
        </Modal>
    )
}

export default LoginModal;