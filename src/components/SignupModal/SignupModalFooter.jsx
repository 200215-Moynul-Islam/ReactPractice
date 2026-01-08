import "./SignupModal.css";

function SignupModalFooter({onClickLogin}){
    return (
        <div className="signup-modal-footer">
            <span>Already have an account?</span><button className="create-account-button" onClick={onClickLogin}>Log In</button>
        </div>
    )
}

export default SignupModalFooter;