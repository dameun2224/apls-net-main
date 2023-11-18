import React from 'react';
import './LoginPage.css';
import { Link } from 'react-router-dom';

const LoginPage = () => {
  const clientId = '009393601adf190d1582'; // GitHub에서 발급받은 클라이언트 ID를 입력해주세요.
  const redirectUrl = 'http://localhost:3000'; // GitHub 로그인 후 리다이렉트할 URL을 입력해주세요.
  const githubURL = `https://github.com/login/oauth/authorize?client_id=${clientId}&redirect_uri=${redirectUrl}`;

  const handleLogin = () => {
    window.location.href = githubURL;
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h2 className="login-title">Alps 동아리 로그인</h2>
        <input type="text" placeholder="아이디" className="login-input" />
        <input type="password" placeholder="비밀번호" className="login-input" />
        <button className="login-btn">로그인</button>
        {/* Github 로그인 버튼 */}
        <button className="github-login-btn" onClick={handleLogin}>
          깃허브 로그인
        </button>
        {/* 회원가입 버튼 */}
        <Link to="/register" className="register-link">
          회원가입
        </Link>
      </div>
    </div>
  );
};

export default LoginPage;
