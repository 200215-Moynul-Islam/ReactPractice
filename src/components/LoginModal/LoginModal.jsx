import Modal from "../Modal/Modal"
import "./LoginModal.css"
import LoginModalHeader from "./LoginModalHeader";
import { useState } from "react";
import LoginModalBody from "./LoginModalBody";
import LoginModalFooter from "./LoginModalFooter"

function LoginModal({isOpen, onClose, onSwitchToSignup}){
    const [formValues, setFormValues] = useState({
        emailOrUsername: "",
        password: "",
    });
    const [errors, setErrors] = useState({
        emailOrUsername: "",
        password: "",
    });

    const handleChange = (field) => (e) => {
        setFormValues((prev) => ({...prev, [field]: e.target.value}));
    };

    //Implement submit handler

    if(!isOpen){
        return null;
    }
    return (
        <Modal isOpen={isOpen} onClose={onClose} className="login-modal">
            <LoginModalHeader />
            <LoginModalBody formValues={formValues} errors = {errors} onChange={handleChange} />
            <LoginModalFooter OnClickCreateAccount={onSwitchToSignup}/>
            <hr className="login-modal-bottom-strip" />
        </Modal>
    )
}

export default LoginModal;