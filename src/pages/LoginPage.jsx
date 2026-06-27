// src/pages/LoginPage.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';

function LoginPage() {
  return (
    <div style={{ width: "1440px", height: "1024px", position: "relative", background: "white", overflow: "hidden" }}>
      {/* 로그인 버튼 배경 */}
      <div style={{ width: "300px", height: "207px", left: "822px", top: "476px", position: "absolute", background: "#0088FF", borderRadius: "17px", cursor: "pointer" }}></div>
      
      {/* 타이틀 및 상단 텍스트 */}
      <div style={{ width: "222px", height: "71px", left: "603px", top: "247px", position: "absolute", color: "black", fontSize: "50px", fontFamily: "Inter", fontWeight: 400 }}>가입하기</div>
      
      {/* 아이디 입력창 배경 */}
      <div style={{ width: "526px", height: "126px", left: "233px", top: "442px", position: "absolute", background: "white", borderRadius: "17px", border: "2px #D9D9D9 solid" }}></div>
      <div style={{ width: "121px", height: "63px", left: "919px", top: "556px", position: "absolute", color: "white", fontSize: "36px", fontFamily: "Inter", fontWeight: 500, pointerEvents: "none" }}>로그인</div>
      <div style={{ width: "276px", height: "64px", left: "771px", top: "219px", position: "absolute", color: "white", fontSize: "28px", fontFamily: "Inter", fontWeight: 400 }}>Facebook으로 가입</div>
      
      {/* 비밀번호 입력창 배경 */}
      <div style={{ width: "526px", height: "126px", left: "231px", top: "596px", position: "absolute", background: "white", borderRadius: "17px", border: "2px #D9D9D9 solid" }}></div>
      <div style={{ width: "93px", height: "36px", left: "415px", top: "489px", position: "absolute", color: "black", fontSize: "32px", fontFamily: "Inter", fontWeight: 400 }}>아이디</div>
      <div style={{ width: "234px", height: "42px", left: "413px", top: "638px", position: "absolute", color: "black", fontSize: "32px", fontFamily: "Inter", fontWeight: 400 }}>비밀번호</div>
      
      {/* 비밀번호 아이콘 대체 구역 */}
      <div style={{ width: "40px", height: "52px", left: "350px", top: "628px", position: "absolute", background: "black" }}></div>
      
      {/* 하단 유틸리티 링크 (찾기 및 회원가입) */}
      <div style={{ width: "179px", height: "23px", left: "427px", top: "781px", position: "absolute", color: "black", fontSize: "24px", fontFamily: "Inter", fontWeight: 300, cursor: "pointer" }}>아이디 찾기</div>
      
      {/* 세로 구분선 1 */}
      <div style={{ width: "18.03px", height: "0px", left: "572px", top: "804.03px", position: "absolute", transform: "rotate(-90deg)", transformOrigin: "top left", outline: "1px black solid" }}></div>
      <div style={{ width: "158px", height: "49px", left: "594px", top: "781px", position: "absolute", color: "black", fontSize: "24px", fontFamily: "Inter", fontWeight: 300, cursor: "pointer" }}>비밀번호 찾기</div>
      
      {/* 회원가입 링크 */}
      <div style={{ width: "236px", height: "23px", left: "798px", top: "781px", position: "absolute", color: "#0088FF", fontSize: "24px", fontFamily: "Inter", fontWeight: 300, cursor: "pointer" }}>회원가입</div>
      
      {/* 세로 구분선 2 */}
      <div style={{ width: "18.03px", height: "0px", left: "749px", top: "804.03px", position: "absolute", transform: "rotate(-90deg)", transformOrigin: "top left", outline: "1px black solid" }}></div>
      
      {/* 상단 네비게이션 메뉴바 */}
      <div style={{ width: "1439.98px", left: "0px", top: "37px", position: "absolute", flexDirection: "column", justifyContent: "flex-start", alignItems: "center", display: "inline-flex" }}>
        <div style={{ width: "1280px", justifyContent: "flex-start", alignItems: "center", gap: "143px", display: "inline-flex" }}>
          <div style={{ width: "151px", height: "74px", color: "black", fontSize: "36px", fontFamily: "Inter", fontWeight: 400 }}>Trusty</div>
          <div style={{ color: "black", fontSize: "32px", fontFamily: "Inter", fontWeight: 400 }}>홈</div>
          <div style={{ width: "97px", height: "38px", color: "black", fontSize: "32px", fontFamily: "Inter", fontWeight: 400 }}>제보창</div>
          <div style={{ color: "black", fontSize: "32px", fontFamily: "Inter", fontWeight: 400 }}>커뮤니티창</div>
          <div style={{ color: "black", fontSize: "32px", fontFamily: "Inter", fontWeight: 400 }}>로그인</div>
          <img style={{ width: "50px", height: "50px" }} src="https://placehold.co/50x50" alt="profile" />
        </div>
        <div style={{ alignSelf: "stretch", height: "0px", outline: "1px black solid", outlineOffset: "-0.50px" }}></div>
      </div>
    </div>
  );
}

export default LoginPage;