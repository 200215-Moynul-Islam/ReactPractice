import "./LoginModal.css";

function LoginModalFooter({OnClickCreateAccount}){
    return (
        <div className="login-modal-footer">
            <span>Don't have an account?</span><button className="create-account-button" onClick={OnClickCreateAccount}>Create account</button>
        </div>
    )
}

export default LoginModalFooter;