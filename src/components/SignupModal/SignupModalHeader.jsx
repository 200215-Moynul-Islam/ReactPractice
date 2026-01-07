import "./SignupModal.css";
import {Film} from "lucide-react";

function SignupModalHeader(){
    return (
        <div className="signup-modal-header">
            <Film size={45} color="#ff0000" className="film-icon"/>
            <h2>Join <span className="website-name">MovieHub</span></h2>
            <p className="signup-modal-header-subtitle">Book tickets, skip the lines, and save time.</p>
        </div>
    );
}

export default SignupModalHeader;