import "./Header.css"

function HeaderProfile({avatarUrl}) {
    return (
        <button className="header-profile">
            <img src={avatarUrl} alt='Profile Picture' className="header-profile-avatar"/>
        </button>
    );
}

export default HeaderProfile;