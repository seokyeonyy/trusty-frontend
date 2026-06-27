import React from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';

function AnalysisInputPage() {
  const navigate = useNavigate();

  return (
    <div style={{ width: "1440px", height: "1024px", position: "relative", background: "white", overflow: "hidden" }}>
      <div style={{ width: "1244px", height: "744px", left: "99px", top: "229px", position: "absolute", background: "rgba(218.36, 235.59, 254.02, 0.80)", borderRadius: "40px" }}></div>
      <div style={{ width: "984px", height: "94px", left: "207px", top: "383px", position: "absolute", color: "black", fontSize: "24px", fontFamily: "Anonymous Pro", fontWeight: 400 }}>입력하신 텍스트나 이메일 내용을 실시간으로 검토하여 위험도를 분석합니다.</div>
      
      {/* 텍스트 입력 구역 */}
      <div style={{ width: "1095px", height: "204px", left: "173px", top: "564px", position: "absolute", background: "white", borderRadius: "40px" }}></div>
      <div style={{ width: "503px", height: "94px", left: "207px", top: "506px", position: "absolute", color: "black", fontSize: "32px", fontFamily: "Anonymous Pro", fontWeight: 400 }}>분석할 내용을 입력하세요</div>
      
      {/* 분석하기 버튼 통합 및 라우트 연동 */}
      <div 
        style={{ width: "329px", height: "110px", left: "908px", top: "819px", position: "absolute", background: "#73ECFC", borderRadius: "40px", cursor: "pointer", display: "flex", justifyContent: "center", alignItems: "center" }}
        onClick={() => navigate('/analysis/result')}
      >
        <span style={{ color: "black", fontSize: "32px", fontFamily: "Inter", fontWeight: 400 }}>분석하기</span>
      </div>
      
      <div style={{ width: "503px", height: "93px", left: "207px", top: "330px", position: "absolute", color: "black", fontSize: "32px", fontFamily: "Anonymous Pro", fontWeight: 400 }}>피싱 분석 도구</div>
      
      {/* 공통 메뉴바로 교체 */}
      <Navbar />
    </div>
  );
}

export default AnalysisInputPage;