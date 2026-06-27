import React from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';

function ReportMainPage() {
  const navigate = useNavigate();

  return (
    <div style={{ width: "1440px", height: "1024px", position: "relative", background: "white", overflow: "hidden" }}>
      <div style={{ width: "492px", height: "82px", left: "159px", top: "164px", position: "absolute", color: "black", fontSize: "40px", fontFamily: "Playfair Display", fontWeight: 400 }}>
        사용자 제보 및 피싱 경험담
      </div>
      <div style={{ width: "781px", height: "71px", left: "123px", top: "268px", position: "absolute", color: "black", fontSize: "20px", fontFamily: "Playfair Display", fontWeight: 400 }}>
        사용자 여러분의 실제 피싱 경험담을 공유해 주세요. Trusty의 AI 모델이 더 정확하게 위험을 감지할 수 있도록 도와드립니다.
      </div>

      <div style={{ width: "363px", height: "334px", left: "123px", top: "367px", position: "absolute", background: "rgba(217, 217, 217, 0.50)", borderRadius: "50px" }}></div>
      <div style={{ width: "363px", height: "334px", left: "543px", top: "367px", position: "absolute", background: "rgba(217, 217, 217, 0.50)", borderRadius: "50px" }}></div>
      <div style={{ width: "363px", height: "334px", left: "1025px", top: "367px", position: "absolute", background: "rgba(217, 217, 217, 0.50)", borderRadius: "50px" }}></div>

      {/* 제보 접수하기 액션 버튼 연동 및 가독성 개선 */}
      <div 
        style={{ width: "434px", height: "110px", left: "503px", top: "782px", position: "absolute", background: "#73ECFC", borderRadius: "10px", cursor: "pointer", display: "flex", justifyContent: "center", alignItems: "center" }}
        onClick={() => navigate('/report/detail')}
      >
        <span style={{ color: "black", fontSize: "35px", fontFamily: "Caveat", fontWeight: 400 }}>제보 접수하기</span>
      </div>

      <div style={{ width: "88px", height: "49px", left: "234px", top: "465px", position: "absolute", color: "black", fontSize: "24px", fontFamily: "Inter", fontWeight: 400 }}>전화</div>
      <div style={{ width: "266px", height: "63px", left: "186px", top: "544px", position: "absolute", color: "rgba(0, 0, 0, 0.65)", fontSize: "20px", fontFamily: "Inter", fontWeight: 400 }}>
        전화통화, ARS 통하로 기관/대출/수사 등을 받은 경우
      </div>
      <div style={{ width: "41px", height: "50px", left: "186px", top: "460px", position: "absolute", overflow: "hidden" }}>
        <div style={{ width: "33.32px", height: "38.54px", left: "5.55px", top: "2.61px", position: "absolute", background: "black" }}></div>
      </div>

      <div style={{ width: "190px", height: "35px", left: "660px", top: "462px", position: "absolute", color: "black", fontSize: "24px", fontFamily: "Inter", fontWeight: 400 }}>문자(URL 포함)</div>
      <div style={{ width: "265px", height: "95px", left: "609px", top: "541px", position: "absolute", color: "rgba(0, 0, 0, 0.65)", fontSize: "20px", fontFamily: "Inter", fontWeight: 400 }}>
        문자로 인증번호 및 결제 안내를 받거나 URL이 포함된 경우
      </div>
      <div style={{ width: "42px", height: "42px", left: "603px", top: "452px", position: "absolute", overflow: "hidden" }}>
        <div style={{ width: "35px", height: "34.99px", left: "3.50px", top: "3.51px", position: "absolute", background: "black" }}></div>
      </div>

      <div style={{ width: "222px", height: "35px", left: "1136px", top: "458px", position: "absolute", color: "black", fontSize: "24px", fontFamily: "Inter", fontWeight: 400 }}>이메일(URL 포함)</div>
      <div style={{ width: "266px", height: "95px", left: "1084px", top: "537px", position: "absolute", color: "rgba(0, 0, 0, 0.65)", fontSize: "20px", fontFamily: "Inter", fontWeight: 400 }}>
        이메일로 인증번호 및 결제 안내를 받거나 URL이 포함된 경우
      </div>
      <div style={{ width: "46px", height: "55px", left: "1080px", top: "446px", position: "absolute", overflow: "hidden" }}>
        <div style={{ width: "38.33px", height: "36.67px", left: "3.83px", top: "9.17px", position: "absolute", background: "black" }}></div>
      </div>

      <Navbar />
    </div>
  );
}

export default ReportMainPage;