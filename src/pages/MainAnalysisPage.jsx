import React from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';

function MainAnalysisPage() {
  const navigate = useNavigate();

  return (
    <div style={{ width: "1440px", height: "1024px", position: "relative", background: "white", overflow: "hidden" }}>
      <div style={{ width: "1359px", height: "671px", left: "42px", top: "216px", position: "absolute", background: "rgba(218.36, 235.59, 254.02, 0.80)", borderRadius: "40px" }}></div>
      
      {/* 분석 시작하기 버튼 영역 통합 및 클릭 이벤트 연동 */}
      <div 
        style={{ width: "293px", height: "82px", left: "98px", top: "727px", position: "absolute", background: "#73ECFC", borderRadius: "40px", cursor: "pointer", display: "flex", justifyContent: "center", alignItems: "center" }}
        onClick={() => navigate('/analysis/input')}
      >
        <span style={{ color: "black", fontSize: "28px", fontFamily: "Inter", fontWeight: 400 }}>분석 시작하기</span>
      </div>
      
      <div style={{ width: "405px", height: "94px", left: "97px", top: "551px", position: "absolute", color: "black", fontSize: "20px", fontFamily: "Anonymous Pro", fontWeight: 400 }}>텍스트와 이메일 내용을 입력하면, URL 위험도, 언어 패턴, 발신자 신뢰도, 긴급성까지 종합적으로 분석하여 24/7 실시간 피싱 위험도를 평가합니다.</div>
      <div style={{ width: "448px", height: "118px", left: "97px", top: "370px", position: "absolute", color: "black", fontSize: "40px", fontFamily: "IBM Plex Mono", fontWeight: 400 }}>LLM 기반 최첨단 피싱 감지 시스템</div>
      <img style={{ width: "704px", height: "469px", left: "616px", top: "333px", position: "absolute", borderRadius: "40px" }} src="https://placehold.co/704x469" alt="main" />
      
      {/* 공통 메뉴바로 교체 */}
      <Navbar />
    </div>
  );
}

export default MainAnalysisPage;