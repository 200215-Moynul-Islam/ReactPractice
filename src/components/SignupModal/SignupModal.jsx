import Modal from "../Modal/Modal"
import "./SignupModal.css"
import SignupModalHeader from "./SignupModalHeader";
import { useState } from "react";
import SignupModalBody from "./SignupModalBody";
import SignupModalFooter from "./SignupModalFooter"

function SignupModal({isOpen, onClose, onSwitchToLogin, onSignupSuccess}){
    const [formValues, setFormValues] = useState({
        username: "",
        email: "",
        password: "",
        confirmPassword: "",
    });
    const [errors, setErrors] = useState({
        username: "",
        email: "",
        password: "",
        confirmPassword: "",
    });
    const handleSignupSuccess = () => {
        onSignupSuccess();
        onClose();
    }

    if(!isOpen){
        return null;
    }
    return (
        <Modal isOpen={isOpen} onClose={onClose} className="signup-modal">
            <SignupModalHeader />
            <SignupModalBody formValues={formValues} setFormValues={setFormValues} errors = {errors} setErrors={setErrors} onSignupSuccess={handleSignupSuccess}/>
            <SignupModalFooter onClickLogin={onSwitchToLogin}/>
            <hr className="signup-modal-bottom-strip" />
        </Modal>
    )
}

export default SignupModal;