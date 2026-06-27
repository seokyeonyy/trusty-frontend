// src/components/Navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div style={{ width: "1439.98px", left: "0px", top: "16px", position: "absolute", flexDirection: "column", justifyContent: "flex-start", alignItems: "center", display: "inline-flex", zIndex: 9999 }}>
      <div style={{ width: "1280px", justifyContent: "flex-start", alignItems: "center", gap: "143px", display: "inline-flex" }}>
        
        {/* 로고: 기획에 맞게 일반 텍스트로 배치 (이동 기능 없음) */}
        <div style={{ width: "151px", height: "74px", color: "black", fontSize: "36px", fontFamily: "Inter", fontWeight: 400 }}>
          Trusty
        </div>
        
        {/* 홈 메뉴 */}
        <Link to="/" style={{ textDecoration: "none", color: "black", fontSize: "32px", fontFamily: "Inter", fontWeight: 400 }}>
          홈
        </Link>
        
        {/* 제보창 (안내 메인 페이지로 이동) */}
        <Link to="/report" style={{ textDecoration: "none", color: "black", width: "97px", height: "38px", fontSize: "32px", fontFamily: "Inter", fontWeight: 400 }}>
          제보창
        </Link>
        
        {/* 커뮤니티창 */}
        <Link to="/community" style={{ textDecoration: "none", color: "black", fontSize: "32px", fontFamily: "Inter", fontWeight: 400 }}>
          커뮤니티창
        </Link>
        
        {/* 로그인 */}
        <Link to="/login" style={{ textDecoration: "none", color: "black", fontSize: "32px", fontFamily: "Inter", fontWeight: 400 }}>
          로그인
        </Link>
        
        <img style={{ width: "50px", height: "50px" }} src="https://placehold.co/50x50" alt="profile" />
      </div>
      <div style={{ alignSelf: "stretch", height: "0px", outline: "1px black solid", outlineOffset: "-0.50px" }}></div>
    </div>
  );
}

export default Navbar;