// MainPage.js
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import NavBar from '../NavBar/NavBar';
import { useHistory } from 'react-router-dom';
import CalendarPage from '../CalendarPage/CalendarPage'; // 파일 경로를 적절히 수정하세요.
import './MainPage.css';

const MainPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [notices, setNotices] = useState([]);
  const history = useHistory();

  useEffect(() => {
    const storedNotices = JSON.parse(localStorage.getItem('notices')) || [];
    setNotices(storedNotices);
  }, []);

  const handleLoginClick = () => {
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  const handleLogin = () => {
    setIsLoggedIn(true);
    setIsModalOpen(false);
  };

  const handleSignupClick = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="main-container">
      <NavBar isLoggedIn={isLoggedIn} handleLoginClick={handleLoginClick} />

      <div className="content sepa">
        <div className="description-container">
          <p className='title'>APLS</p>
          <p className='about-title'>전북대학교 컴퓨터인공지능공학부<br></br><br></br>알고리즘 동아리</p><br></br>
          <p>우리 동아리는 [동아리 목적 또는 활동 내용]을 중심으로 활동하고 있습니다. 함께 [동아리의 특징적인 활동이나 목표]을 추구하며 멋진 시간을 만들어봅시다.</p>
          <p>지금 바로 가입하고 우리 동아리의 멤버가 되어보세요! 우리와 함께 [동아리의 장점 또는 멤버들이 함께할 수 있는 재미있는 경험]을 나눠보세요.</p>
        </div>
      </div>

      {/* 최근 공지사항 카드 뉴스 */}
      <p className="sepa no">공지사항</p>
      <div className="notice-card-container">
        {notices.slice(-3).reverse().map((notice) => (
          <div
            key={notice.id}
            className="notice-card"
            onClick={() => history.push(`/notice/${notice.id}`)} // 클릭 시 해당 공지사항 페이지로 이동
          >
            <div className="notice-card-content">
              <h3>{notice.title}</h3>
              <p>{notice.content}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="calendar-container-mini sepa">
      <p className="no">캘린더</p>
      <CalendarPage />
    </div>

      <div className="sepa">
        <p>
          전북대학교 공과대학 7호관 지하 1층
        </p>
        <p>
          ju2007mic@naver.com  /  010 - 2366 - 6802 
        </p>
      </div>

      {isModalOpen && (
        <div className="modal-overlay">
          <div className="modal">
            <input
              type="text"
              placeholder="아이디"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <input
              type="password"
              placeholder="비밀번호"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <div className="modal-btn-container">
              <button className="modal-login-btn" onClick={handleLogin}>
                로그인
              </button>
              <Link
                to="/signup"
                className="modal-signup-btn"
                onClick={handleSignupClick}
              >
                회원가입
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MainPage;
