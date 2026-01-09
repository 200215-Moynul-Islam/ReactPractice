import React, { useState } from 'react';
import './Header.css';
import defaultAvatar from '../../assets/images/default-avatar.png'
import Container from '../Container/Container'
import HeaderLogo from './HeaderLogo';
import HeaderNav from './HeaderNav';
import HeaderAuth from './HeaderAuth';
import HeaderProfile from './HeaderProfile';

function Header() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <header className="header">
      <Container className="header-container">
        <div className="header-left">
          <HeaderLogo />
          <HeaderNav />
        </div>
        <div className="header-right">
          {isLoggedIn ? <HeaderProfile avatarUrl={defaultAvatar} /> : <HeaderAuth onAuthSuccess={() => setIsLoggedIn(true)}/>}
        </div>
      </Container>
    </header>
  );
}

export default Header;
