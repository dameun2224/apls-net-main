import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import NavBar from '../NavBar/NavBar';
import './NoticePage.css';

const ITEMS_PER_PAGE = 10;

const NoticePage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [notices, setNotices] = useState([]);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [selectedNotice, setSelectedNotice] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const storedNotices = JSON.parse(localStorage.getItem('notices')) || [];
    setNotices(storedNotices.reverse());
  }, []);

  const handleWriteClick = () => {
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
    resetForm();
  };

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleContentChange = (e) => {
    setContent(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title || !content) {
      alert("제목과 내용을 모두 입력해주세요.");
      return;
    }

    const newNotice = {
      id: notices.length + 1,
      title: title,
      content: content,
    };

    const updatedNotices = [newNotice, ...notices];
    setNotices(updatedNotices.reverse());
    localStorage.setItem('notices', JSON.stringify(updatedNotices));

    setIsModalOpen(false);
    resetForm();
  };

  const handleDelete = (id) => {
    const updatedNotices = notices.filter((notice) => notice.id !== id);
    setNotices(updatedNotices.reverse());
    localStorage.setItem('notices', JSON.stringify(updatedNotices));

    if (selectedNotice && selectedNotice.id === id) {
      setSelectedNotice(null);
    }
  };

  const resetForm = () => {
    setTitle('');
    setContent('');
  };

  const totalPages = Math.ceil(notices.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const visibleNotices = notices.slice(startIndex, endIndex);

  return (
    <div className="notice-container">
      <NavBar isLoggedIn={true} handleLoginClick={() => {}} />

      <div className="notice-list">
        <ul>
          {visibleNotices.map((notice, index) => {
            const noticeNumber = notices.length - startIndex - index;
            return (
              <li key={notice.id} className="notice-item">
                <div className="notice-info">
                  <div className="notice-number">{noticeNumber}</div>
                </div>
                <div className="notice-text">
                  <Link to={`/notice/${notice.id}`} className="notice-title">
                    {notice.title}
                  </Link>
                  <p className="notice-content-preview">
                    {notice.content.slice(0, 100)}
                  </p>
                </div>
                <button className="delete-btn" onClick={() => handleDelete(notice.id)}>
                  삭제
                </button>
              </li>
            );
          })}
        </ul>
      </div>

      <div className="pagination">
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index}
            className={`page-btn ${currentPage === index + 1 ? 'active' : ''}`}
            onClick={() => setCurrentPage(index + 1)}
          >
            {index + 1}
          </button>
        ))}
      </div>

      <button className="write-btn" onClick={handleWriteClick}>
        글쓰기
      </button>

      {isModalOpen && (
        <div className="modal-overlay">
          <div className="modal">
            <button className="close-btn" onClick={handleModalClose}>
              X
            </button>
            <h3>글쓰기</h3>
            <input
              type="text"
              placeholder="제목"
              value={title}
              onChange={handleTitleChange}
            />
            <textarea
              placeholder="내용"
              value={content}
              onChange={handleContentChange}
            ></textarea>
            <button className="submit-btn" onClick={handleSubmit}>
              작성
            </button>
          </div>
        </div>
      )}

      {selectedNotice && (
        <div className="modal-overlay">
          <div className="modal">
            <button className="close-btn" onClick={() => setSelectedNotice(null)}>
              X
            </button>
            <h3>{selectedNotice.title}</h3>
            <p>{selectedNotice.content}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default NoticePage;
