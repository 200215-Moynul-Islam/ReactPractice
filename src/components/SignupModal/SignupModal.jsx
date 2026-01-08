import Modal from "../Modal/Modal"
import "./SignupModal.css"
import SignupModalHeader from "./SignupModalHeader";
import { useState } from "react";
import SignupModalBody from "./SignupModalBody";
import SignupModalFooter from "./SignupModalFooter"

function SignupModal({isOpen, onClose, onSwitchToLogin}){
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

    const handleChange = (field) => (e) => {
        setFormValues((prev) => ({...prev, [field]: e.target.value}));
    };

    //Implement submit handler

    if(!isOpen){
        return null;
    }
    return (
        <Modal isOpen={isOpen} onClose={onClose} className="signup-modal">
            <SignupModalHeader />
            <SignupModalBody formValues={formValues} errors = {errors} onChange={handleChange} />
            <SignupModalFooter onClickLogin={onSwitchToLogin}/>
            <hr className="signup-modal-bottom-strip" />
        </Modal>
    )
}

export default SignupModal;