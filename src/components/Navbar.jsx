import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { getMe, logout } from '../api/auth';
import './Navbar.css';

const MENU_ITEMS = [
  { label: '홈', to: '/' },
  { label: '제보창', to: '/report' },
  { label: '커뮤니티창', to: '/community', state: { fromNavbar: true } },
  { label: '피싱 이력 조회', to: '/lookup' },
];

function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();
  const [userEmail, setUserEmail] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem('access_token');
    if (!token) {
      setUserEmail(null);
      return;
    }
    getMe()
      .then((data) => setUserEmail(data.email))
      .catch(() => setUserEmail(null));
  }, [location.pathname]);

  const handleLogout = () => {
    logout();
    setUserEmail(null);
    navigate('/login');
  };

  return (
    <div className="navbar">
      <div className="navbar__row">
        <div className="navbar__logo" onClick={() => navigate('/')}>
          Trusty
        </div>

        {MENU_ITEMS.map((item) => (
          <div
            key={item.to}
            className={'navbar__menu-item' + (location.pathname === item.to ? ' navbar__menu-item--active' : '')}
            onClick={() => navigate(item.to, item.state ? { state: item.state } : undefined)}
          >
            {item.label}
          </div>
        ))}

        <div className="navbar__login" onClick={userEmail ? handleLogout : () => navigate('/login')}>
          <div>
            <span className="navbar__login-text">{userEmail ? '로그아웃' : '로그인'}</span>
            {!userEmail && <span className="navbar__login-arrow" aria-hidden="true">➔</span>}
            {userEmail && (
              <div style={{ fontSize: '11px', color: '#888', marginTop: '2px' }}>
                {userEmail}
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="navbar__divider" />
    </div>
  );
}

export default Navbar;