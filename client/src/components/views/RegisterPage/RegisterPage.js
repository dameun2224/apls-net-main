import React from 'react';
import './RegisterPage.css';

const RegisterPage = () => {
  const clientId = '009393601adf190d1582'; // GitHub에서 발급받은 클라이언트 ID를 입력해주세요.
  const redirectUrl = 'http://localhost:3000'; // GitHub 로그인 후 리다이렉트할 URL을 입력해주세요.
  const githubURL = `https://github.com/login/oauth/authorize?client_id=${clientId}&redirect_uri=${redirectUrl}`;

  return (
    <div className="register-container">
      <div className="register-box">
        <h2 className="register-title">회원가입</h2>
        <input type="text" placeholder="아이디" className="register-input" />
        <input
          type="password"
          placeholder="비밀번호"
          className="register-input"
        />
        <input
          type="password"
          placeholder="비밀번호 확인"
          className="register-input"
        />
        <button className="register-btn">가입하기</button>
        {/* Github 로그인 버튼 */}
        <a href={githubURL} className="github-register-btn">
          Github 회원가입
        </a>
      </div>
    </div>
  );
};

export default RegisterPage;
