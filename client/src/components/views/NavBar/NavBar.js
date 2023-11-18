import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

const NavBar = ({ isLoggedIn, handleLoginClick }) => {
  return (
    <div className="navbar">
      <Link to="/" className="site-title-link">
        <img src="/alps.png" alt="Alps 동아리" className="site-title-image" />
      </Link>
      <nav className="navigation">
        <Link to="/notice" className="nav-link">
          공지사항
        </Link>
        <Link to="/calendar" className="nav-link">
          일정
        </Link>
      </nav>
      <div className="login-logout">
        {isLoggedIn ? (
          <button className="logout-btn">로그아웃</button>
        ) : (
          <button className="login-btn" onClick={handleLoginClick}>
            로그인
          </button>
        )}
      </div>
    </div>
  );
};

export default NavBar;
