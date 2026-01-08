import "./LoginModal.css";
import TextField from "../TextField/TextField";
import { Mail, Eye, EyeOff, LogIn } from "lucide-react";
import { useState } from "react";

function LoginModalBody({formValues, setFormValues, errors, setErrors, onLoginSuccess}){
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);

    const handleChange = (field) => (e) => {
        setFormValues((prev) => ({...prev, [field]: e.target.value}));
    };

    const handleSubmit = (e) => {
        // TODO: Update the logic later for login sucess and failure when backend is connected.
        e.preventDefault();
        onLoginSuccess();
    }

    return (
        <form className="login-modal-body" onSubmit={handleSubmit}>
            <TextField label="Email Or Username" value={formValues.emailOrUsername} onChange = {handleChange("emailOrUsername")} placeholder="name@example.com" error = {errors.emailOrUsername} rightIcon={<Mail />}/>
            <TextField label="Password" value={formValues.password} type={isPasswordVisible ? "text" : "password"} onChange={handleChange("password")} placeholder="Password" error={errors.password} rightIcon={<button className="eye-icon" onClick={(e) => {e.preventDefault(); setIsPasswordVisible((prev) => !prev);}}>{isPasswordVisible ? <EyeOff/> : <Eye />}</button>}/>
            <button className="login-button"><LogIn/>Log In</button>
        </form>
    );
}

export default LoginModalBody;