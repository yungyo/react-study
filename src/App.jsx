import React from "react";
import { Route, Routes, Link, useLocation } from "react-router-dom";
import About from "./About";
import Home from "./Home";
import Profiles from "./Profiles";
import HistorySample from './HistorySample';

const App = () => {
  const {pathname} = useLocation(); //location 알려줄 것 추가
  return (
    <div>
      <ul>
        <li>
          <Link to="/">홈</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/profiles">프로필 목록</Link>
        </li>
        <li>
          <Link to="/history">history</Link>
        </li>
      </ul>
      <hr />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        {/* 서브 라우트가 있는 path의 경우, 끝에 ‘/*’ 를 추가해준다. */}
        <Route path="/profiles/*" element={<Profiles />} />
        <Route path="/history" element={<HistorySample />} />
        <Route
          path="/*"
          element={
            <div>
              <h2>이 페이지는 존재하지 않습니다. - {pathname}</h2>
            </div>
          }
        />
      </Routes>
    </div>
  );
};

export default App;