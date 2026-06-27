import React from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';

function CommunityPage() {
  return (
    <div style={{ width: "1440px", height: "1024px", position: "relative", background: "white", overflow: "hidden" }}>
      <div style={{ width: "1456px", height: "1024px", left: "0px", top: "5px", position: "absolute" }}>
        {/* 상단 메인 비주얼 배너 이미지 */}
        <img style={{ width: "1456px", height: "376.55px", left: "0px", top: "-82px", position: "absolute" }} src="https://placehold.co/1456x377" alt="community banner" />
        
        {/* 하단 커뮤니티 본문 영역 */}
        <div style={{ width: "1456px", height: "683px", left: "0px", top: "341px", position: "absolute" }}>
          
          {/* 좌측 콘텐츠: 타이틀 및 탭 메뉴 */}
          <div style={{ width: "1052px", height: "107px", left: "28.50px", top: "0px", position: "absolute" }}>
            <div style={{ left: "0px", top: "0px", position: "absolute", color: "black", fontSize: "32px", fontFamily: "Inter", fontWeight: 600 }}>피싱 경험 공유방</div>
            
            {/* 내부 탭 서브 메뉴바 */}
            <div style={{ width: "1052px", height: "39px", left: "0px", top: "68px", position: "absolute" }}>
              <div style={{ left: "0px", top: "0px", position: "absolute", color: "black", fontSize: "24px", fontFamily: "Inter", fontWeight: 400, cursor: "pointer" }}>그룹 활동</div>
              <div style={{ left: "146px", top: "0px", position: "absolute", color: "black", fontSize: "24px", fontFamily: "Inter", fontWeight: 400, cursor: "pointer" }}>제보 내역</div>
              <div style={{ left: "298px", top: "0px", position: "absolute", color: "black", fontSize: "24px", fontFamily: "Inter", fontWeight: 400, cursor: "pointer" }}>뉴스창</div>
              <div style={{ left: "412px", top: "0px", position: "absolute", color: "black", fontSize: "24px", fontFamily: "Inter", fontWeight: 400, cursor: "pointer" }}>MY</div>
              <div style={{ width: "1052px", height: "0px", left: "0px", top: "39px", position: "absolute", outline: "1px black solid" }}></div>
            </div>
          </div>
          
          {/* 우측 사이드바 메뉴 구역 */}
          <div style={{ width: "313px", height: "563px", left: "1114.50px", top: "0px", position: "absolute", background: "white", border: "1px black solid" }}></div>
          
          {/* 사이드바 퀵 링크 리스트 */}
          <div style={{ left: "1136.36px", top: "210px", position: "absolute", color: "black", fontSize: "24px", fontFamily: "Inter", fontWeight: 400, cursor: "pointer" }}>제보창</div>
          <div style={{ left: "1136.36px", top: "290px", position: "absolute", color: "black", fontSize: "24px", fontFamily: "Inter", fontWeight: 400, cursor: "pointer" }}>뉴스</div>
          <div style={{ left: "1136.36px", top: "127px", position: "absolute", color: "black", fontSize: "24px", fontFamily: "Inter", fontWeight: 400, cursor: "pointer" }}>피싱경험 제보창</div>
          
          {/* 사이드바 상단 검색바 구역 */}
          <div style={{ left: "1178.94px", top: "54px", position: "absolute", color: "black", fontSize: "24px", fontFamily: "Inter", fontWeight: 400 }}>검색</div>
          <div style={{ width: "257.23px", height: "0px", left: "1128.65px", top: "109px", position: "absolute", outline: "1px black solid" }}></div>
          <img style={{ width: "42.88px", height: "42.88px", left: "1131.77px", top: "45.06px", position: "absolute" }} src="https://placehold.co/43x43" alt="search icon" />
          
        </div>
      </div>
    </div>
  );
}

export default CommunityPage;