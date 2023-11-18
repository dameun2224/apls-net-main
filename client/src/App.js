import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import MainPage from './components/views/MainPage/MainPage';
import LoginPage from './components/views/LoginPage/LoginPage';
import RegisterPage from './components/views/RegisterPage/RegisterPage';
import CalendarPage from './components/views/CalendarPage/CalendarPage';
import NoticePage from './components/views/NoticePage/NoticePage';

function App() {
  // State나 로그인 상태 관리 등을 위한 필요한 Hook들을 여기에 선언할 수 있습니다.

  return (
    <Router>
      <div>
        {/* 네비게이션 바 등의 공통 컴포넌트들은 여기에 위치시킬 수 있습니다. */}
        <Switch>
          <Route exact path="/" component={MainPage} />
          <Route path="/login" component={LoginPage} />
          <Route path="/register" component={RegisterPage} />
          <Route path="/calendar" component={CalendarPage} />
          <Route path="/notice" component={NoticePage} />
        </Switch>
        {/* 푸터 등의 공통 컴포넌트들은 여기에 위치시킬 수 있습니다. */}
      </div>
    </Router>
  );
}

export default App;
