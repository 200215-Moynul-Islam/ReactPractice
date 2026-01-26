import "./SignupModal.css";
import TextField from "../TextField/TextField";
import { Mail, Eye, EyeOff, ArrowRight, User, Lock } from "lucide-react";
import { useState } from "react";
import { VALIDATION_CONFIG } from "../../config/validation.config";

function SignupModalBody({formValues, setFormValues, errors, setErrors, onSignupSuccess}){
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);
    const [isConfirmPasswordVisible, setIsConfirmPasswordVisible] = useState(false);

    const handleChange = (field) => (e) => {
        setFormValues((prev) => ({...prev, [field]: e.target.value}));
    };
    
    const handleSubmit = (e) => {
        // TODO: Update the logic later for signup sucess and failure when backend is connected.
        e.preventDefault();
        onSignupSuccess();
    }

    return (
        <form className="signup-modal-body" onSubmit={handleSubmit}>
            <TextField label="Username" value={formValues.username} onChange = {handleChange("username")} placeholder= "e.g. Moynul Islam" error = {errors.username} maxLength={VALIDATION_CONFIG.AUTH.USERNAME.MAX_LENGTH} leftIcon={<User />}/>
            <TextField label="Email" value={formValues.email} onChange = {handleChange("email")} placeholder="name@example.com" error = {errors.email} maxLength={VALIDATION_CONFIG.AUTH.EMAIL.MAX_LENGTH} leftIcon={<Mail />} />
            <TextField label="Password" value={formValues.password} type={isPasswordVisible ? "text" : "password"} onChange={handleChange("password")} placeholder="Password" error={errors.password} maxLength={VALIDATION_CONFIG.AUTH.PASSWORD.MAX_LENGTH} leftIcon={<Lock />} rightIcon={<button className="eye-icon" onClick={(e) => {e.preventDefault(); setIsPasswordVisible((prev) => !prev);}}>{isPasswordVisible ? <EyeOff /> : <Eye />}</button>}/>
            <TextField label="Confirm Password" value={formValues.confirmPassword} type={isConfirmPasswordVisible ? "text" : "password"} onChange={handleChange("confirmPassword")} placeholder="Confirm Password" error={errors.confirmPassword} maxLength={VALIDATION_CONFIG.AUTH.PASSWORD.MAX_LENGTH} leftIcon={<Lock />} rightIcon={<button className="eye-icon" onClick={(e) => {e.preventDefault(); setIsConfirmPasswordVisible((prev) => !prev);}}>{isConfirmPasswordVisible ? <EyeOff/> : <Eye />}</button>}/>
            <button className="signup-button">Sign Up<ArrowRight/></button>
        </form>
    );
}

export default SignupModalBody;