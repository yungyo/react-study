import React from 'react';
import { NavLink, Route, Routes } from 'react-router-dom';
import Profile from './Profile';
import WithRouterSample from './WithRouterSample';

const Profiles = () => {
    // 스타일 추가
    const style = { background: "black", color: "white", textDecoration: "none" };
    return (
        <div>
            <h3>유저 목록:</h3>
            <ul>
                <li>
                    {/* Link를 NavLink 로 바꿔주기 */}
                    <NavLink 
                        to="/profiles/velopert"
                        style={({ isActive }) => (isActive ? style : undefined)}
                    >velopert</NavLink>
                </li>
                <li>
                     {/* Link를 NavLink 로 바꿔주기 */}
                    <NavLink 
                        to="/profiles/star"
                        style={({ isActive }) => (isActive ? style : undefined)}
                    >gildong</NavLink>
                </li>
            </ul>
            {/* Route는 Routes로 묶어 준다. */}
            <Routes>
                {/* 서브 Route를 설정할 땐, ‘/’ 만 적어준다. */}
                <Route path="/" element={<div>유저를 선택해주세요</div>} />
                {/* params를 전달받는 경우, ‘:username’ 처럼 param 만 적어준다. */}
                <Route path=":username" element={<Profile />} />
            </Routes>
            {/* 렌더링 */}
            <WithRouterSample />
        </div>
    );
};

export default Profiles;