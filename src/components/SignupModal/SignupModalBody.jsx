import "./SignupModal.css";
import TextField from "../TextField/TextField";
import { Mail, Eye, EyeOff, ArrowRight, User, Lock } from "lucide-react";
import { useState } from "react";

function SignupModalBody({formValues, onChange, errors}){
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);
    const [isConfirmPasswordVisible, setIsConfirmPasswordVisible] = useState(false);

    return (
        <form className="signup-modal-body">
            <TextField label="Username" value={formValues.username} onChange = {onChange("username")} placeholder= "e.g. Moynul Islam" error = {errors.username} leftIcon={<User />}/>
            <TextField label="Email" value={formValues.email} onChange = {onChange("email")} placeholder="name@example.com" error = {errors.email} leftIcon={<Mail />} />
            <TextField label="Password" value={formValues.password} type={isPasswordVisible ? "text" : "password"} onChange={onChange("password")} placeholder="Password" error={errors.password} leftIcon={<Lock />} rightIcon={<button className="eye-icon" onClick={(e) => {e.preventDefault(); setIsPasswordVisible((prev) => !prev);}}>{isPasswordVisible ? <EyeOff /> : <Eye />}</button>}/>
            <TextField label="Confirm Password" value={formValues.confirmPassword} type={isConfirmPasswordVisible ? "text" : "password"} onChange={onChange("confirmPassword")} placeholder="Confirm Password" error={errors.password} leftIcon={<Lock />} rightIcon={<button className="eye-icon" onClick={(e) => {e.preventDefault(); setIsConfirmPasswordVisible((prev) => !prev);}}>{isConfirmPasswordVisible ? <EyeOff/> : <Eye />}</button>}/>
            <button className="signup-button">Sign Up<ArrowRight/></button>
        </form>
    );
}

export default SignupModalBody;