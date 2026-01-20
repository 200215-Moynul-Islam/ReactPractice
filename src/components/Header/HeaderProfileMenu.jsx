import { LogOut } from "lucide-react";

function HeaderProfileMenu(){
    return (
        <div className="header-profile-menu">
            <button className="logout"><LogOut />Logout</button>
        </div>
    );
}

export default HeaderProfileMenu;