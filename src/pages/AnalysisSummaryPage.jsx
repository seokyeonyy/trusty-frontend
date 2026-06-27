import React from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';

function AnalysisSummaryPage() {
  const navigate = useNavigate();

  return (
    <div style={{ width: "1440px", height: "1024px", position: "relative", background: "white", overflow: "hidden" }}>
      
      {/* 상단 4개 지표 가로 배치 구역 */}
      <div style={{ position: "absolute", left: "98px", top: "186px", display: "flex", gap: "45px" }}>
        <div style={{ width: "260px", height: "190px", background: "#F1F4F9", borderRadius: "40px", border: "1px #E2E8F0 solid", display: "flex", justifyContent: "center", paddingTop: "25px", boxSizing: "border-box" }}>
          <span style={{ color: "#22D3EE", fontSize: "24px", fontFamily: "Inter", fontWeight: 600 }}>URL 위험도</span>
        </div>
        <div style={{ width: "260px", height: "190px", background: "#F1F4F9", borderRadius: "40px", border: "1px #E2E8F0 solid", display: "flex", justifyContent: "center", paddingTop: "25px", boxSizing: "border-box" }}>
          <span style={{ color: "#22D3EE", fontSize: "24px", fontFamily: "Inter", fontWeight: 600 }}>언어 패턴</span>
        </div>
        <div style={{ width: "260px", height: "190px", background: "#F1F4F9", borderRadius: "40px", border: "1px #E2E8F0 solid", display: "flex", justifyContent: "center", paddingTop: "25px", boxSizing: "border-box" }}>
          <span style={{ color: "#22D3EE", fontSize: "24px", fontFamily: "Inter", fontWeight: 600 }}>발신자 신뢰도</span>
        </div>
        <div style={{ width: "260px", height: "190px", background: "#F1F4F9", borderRadius: "40px", border: "1px #E2E8F0 solid", display: "flex", justifyContent: "center", paddingTop: "25px", boxSizing: "border-box" }}>
          <span style={{ color: "#22D3EE", fontSize: "24px", fontFamily: "Inter", fontWeight: 600 }}>긴급성 유도</span>
        </div>
      </div>

      {/* 하단 거대 통합 분석 결과 섹션 박스 */}
      <div style={{ width: "1176px", height: "519px", left: "98px", top: "417px", position: "absolute", background: "#F1F4F9", borderRadius: "50px", border: "1px #E2E8F0 solid" }}>
        <div style={{ left: "45px", top: "35px", position: "absolute", color: "black", fontSize: "32px", fontFamily: "Anonymous Pro", fontWeight: 700 }}>
          피싱 위험도 분석 결과
        </div>

        {/* 이전 창 복귀를 지원하는 서브 액션 링크 버튼 */}
        <div 
          style={{ right: "45px", top: "35px", position: "absolute", color: "#64748B", fontSize: "18px", fontWeight: 600, cursor: "pointer" }}
          onClick={() => navigate('/analysis/result')}
        >
          ← 기본 분석 창으로
        </div>

        <div style={{ width: "232px", height: "0px", left: "527px", top: "140px", position: "absolute", transform: "rotate(90deg)", transformOrigin: "top left", outline: "1px #D9D9D9 solid" }}></div>
        
        <div style={{ left: "569px", top: "115px", position: "absolute" }}>
          <div style={{ color: "#22D3EE", fontSize: "27px", fontFamily: "Inter", fontWeight: 600, marginBottom: "15px" }}>상세 분석 요약</div>
        </div>

        <div style={{ left: "569px", top: "315px", position: "absolute" }}>
          <div style={{ color: "#FFCC33", fontSize: "27px", fontFamily: "Inter", fontWeight: 600, marginBottom: "15px" }}>권장 조치 사항</div>
        </div>
      </div>
      
      {/* 공통 메뉴바로 교체 */}
      <Navbar />
    </div>
  );
}

export default AnalysisSummaryPage;