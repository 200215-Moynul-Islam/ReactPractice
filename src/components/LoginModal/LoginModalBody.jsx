import "./LoginModal.css";
import TextField from "../TextField/TextField";
import { Mail, Eye, EyeOff, LogIn } from "lucide-react";
import { useState } from "react";

function LoginModalBody({formValues, onChange, errors}){
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);

    return (
        <form className="login-modal-body">
            <TextField label="Email Or Username" value={formValues.emailOrUsername} onChange = {onChange("emailOrUsername")} placeholder="name@example.com" error = {errors.emailOrUsername} rightIcon={<Mail />}/>
            <TextField label="Password" value={formValues.password} type={isPasswordVisible ? "text" : "password"} onChange={onChange("password")} placeholder="Password" error={errors.password} rightIcon={<button className="eye-icon" onClick={(e) => {e.preventDefault(); setIsPasswordVisible((prev) => !prev);}}>{isPasswordVisible ? <EyeOff/> : <Eye />}</button>}/>
            <button className="login-button"><LogIn/>Log In</button>
        </form>
    );
}

export default LoginModalBody;