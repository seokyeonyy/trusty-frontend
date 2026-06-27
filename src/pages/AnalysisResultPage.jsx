// src/pages/AnalysisResultPage.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom'; // 1. 이동 훅 가져오기
import Navbar from '../components/Navbar';       // 2. 공통 네비게이션 가져오기

function AnalysisResultPage() {
  const navigate = useNavigate(); // 3. 리모컨 활성화

  return (
    <div style={{ width: "1440px", height: "1024px", position: "relative", background: "white", overflow: "hidden" }}>
      
      {/* 4. 정밀 요약 대시보드로 이동하는 버튼 (화면 디자인에 맞춰 내부에 배치) */}
      <div 
        style={{ 
          width: "220px", 
          height: "50px", 
          left: "1118px", 
          top: "150px", 
          position: "absolute", 
          background: "#22D3EE", 
          color: "white", 
          borderRadius: "10px", 
          display: "flex", 
          justifyContent: "center", 
          alignItems: "center", 
          cursor: "pointer",
          fontSize: "18px",
          fontFamily: "Inter",
          fontWeight: 600,
          zIndex: 10
        }}
        onClick={() => navigate('/analysis/summary')} 
      >
        정밀 분석 요약 보기 →
      </div>

      {/* 정밀 분석 레이아웃 카드박스들 */}
      <div style={{ width: "400px", height: "300px", left: "600px", top: "265px", position: "absolute", background: "#F1F4F9", borderRadius: "40px", border: "1px #E2E8F0 solid" }}></div>
      <div style={{ width: "533px", height: "279px", left: "29px", top: "416px", position: "absolute", background: "#F1F4F9", borderRadius: "40px", border: "1px #E2E8F0 solid" }}></div>
      <div style={{ width: "400px", height: "300px", left: "1025px", top: "265px", position: "absolute", background: "#F1F4F9", borderRadius: "40px", border: "1px #E2E8F0 solid" }}></div>
      <div style={{ width: "400px", height: "300px", left: "604px", top: "624px", position: "absolute", background: "#F1F4F9", borderRadius: "40px", border: "1px #E2E8F0 solid" }}></div>
      <div style={{ width: "400px", height: "300px", left: "1029px", top: "624px", position: "absolute", background: "#F1F4F9", borderRadius: "40px", border: "1px #E2E8F0 solid" }}></div>
      
      {/* 타이틀 */}
      <div style={{ width: "536px", height: "59px", left: "469px", top: "145px", position: "absolute", color: "black", fontSize: "42px", fontFamily: "Anonymous Pro", fontWeight: 700 }}>
        피싱 위험도 정밀 분석
      </div>
      
      {/* 1. URL 위험도 */}
      <div style={{ width: "156px", height: "36px", left: "726px", top: "308px", position: "absolute", color: "#22D3EE", fontSize: "24px", fontFamily: "Inter", fontWeight: 600 }}>URL 위험도</div>
      <div style={{ width: "279px", height: "86px", left: "672px", top: "415px", position: "absolute", color: "#020617", fontSize: "22px", fontFamily: "Inter", fontWeight: 400 }}>
        비인가 도메인 및 유사 키워드('login', 'verify') 포함. 피싱 서버로 식별되었습니다.
      </div>
      
      {/* 2. 언어 패턴 */}
      <div style={{ width: "125px", height: "37px", left: "743.38px", top: "663px", position: "absolute", color: "#22D3EE", fontSize: "24px", fontFamily: "Inter", fontWeight: 600 }}>언어 패턴</div>
      <div style={{ width: "289px", height: "111px", left: "670.38px", top: "773px", position: "absolute", color: "#020617", fontSize: "22px", fontFamily: "Inter", fontWeight: 400 }}>
        기계적 번역 또는 사칭 기관 특유의 문구 패턴 분석 결과 사칭 시도 가능성 89%.
      </div>
      
      {/* 3. 제보 원문 */}
      <div style={{ width: "225px", height: "36px", left: "68px", top: "475px", position: "absolute", color: "rgba(0, 0, 0, 0.60)", fontSize: "22px", fontFamily: "Inter", fontWeight: 500 }}>
        제보된 텍스트 원문
      </div>
      
      {/* 4. 발신자 신뢰도 */}
      <div style={{ width: "182px", height: "36px", left: "1144px", top: "307px", position: "absolute", color: "#22D3EE", fontSize: "24px", fontFamily: "Inter", fontWeight: 600 }}>발신자 신뢰도</div>
      <div style={{ width: "294px", height: "89px", left: "1090px", top: "415px", position: "absolute", color: "#020617", fontSize: "22px", fontFamily: "Inter", fontWeight: 400 }}>
        블랙리스트 번호 또는 해외 발신 번호 확인. 신뢰할 수 없는 발신자입니다.
      </div>
      
      {/* 5. 긴급성 유도 */}
      <div style={{ width: "143px", height: "38px", left: "1151.25px", top: "663px", position: "absolute", color: "#22D3EE", fontSize: "24px", fontFamily: "Inter", fontWeight: 600 }}>긴급성 유도</div>
      <div style={{ width: "252px", height: "96px", left: "1104.25px", top: "773px", position: "absolute", color: "#020617", fontSize: "22px", fontFamily: "Inter", fontWeight: 400 }}>
        '즉시인증', '계정정지' 등 심리적 압박을 통한 행동 유도 수위가 매우 높음.
      </div>
      
      {/* 구분선 구조 스타일 */}
      <div style={{ width: "310px", height: "0px", left: "637px", top: "371px", position: "absolute", outline: "1px rgba(0, 0, 0, 0.30) solid" }}></div>
      <div style={{ width: "310px", height: "0px", left: "1077.73px", top: "371.41px", position: "absolute", outline: "1px rgba(0, 0, 0, 0.30) solid" }}></div>
      <div style={{ width: "310px", height: "0px", left: "655.98px", top: "729.08px", position: "absolute", outline: "1px rgba(0, 0, 0, 0.30) solid" }}></div>
      <div style={{ width: "310px", height: "0px", left: "1078.98px", top: "728.08px", position: "absolute", outline: "1px rgba(0, 0, 0, 0.30) solid" }}></div>
      
      {/* 5. 기존 하드코딩된 메뉴바는 싹 지우고 공통 컴포넌트 한 줄로 교체 완료! */}
      <Navbar />

    </div>
  );
}

export default AnalysisResultPage;