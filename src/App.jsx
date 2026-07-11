import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import ScrollToTop from './components/ScrollToTop'
import Navbar from './components/Navbar'

import MainAnalysisPage from './pages/MainAnalysisPage'
import AnalysisInputPage from './pages/AnalysisInputPage'
import AnalysisResultPage from './pages/AnalysisResultPage'
import AnalysisSummaryPage from './pages/AnalysisSummaryPage'
import LookupPage from './pages/LookupPage'
import ReportMainPage from './pages/ReportMainPage'
import ReportPage from './pages/ReportPage'
import CommunityPage from './pages/CommunityPage'
import LoginPage from './pages/LoginPage'
import SignupPage from './pages/SignupPage'

import './styles/index.css';
import './styles/Layouts.css';
import './App.css'

function App() {
  return (
    <Router>
      <ScrollToTop />

      <Routes>
        {/* 1. 메인 홈 화면: LLM 기반 최첨단 피싱 감지 시스템 */}
        <Route path="/" element={<MainAnalysisPage />} />

        {/* 2. 피싱 분석 관련 주소 매핑 */}
        <Route path="/analysis/input" element={<AnalysisInputPage />} />
        <Route path="/analysis/result" element={<AnalysisResultPage />} />
        <Route path="/analysis/summary" element={<AnalysisSummaryPage />} />

        {/* 3. 피싱 이력 조회 및 제보창 매핑 */}
        <Route path="/lookup" element={<LookupPage />} />
        <Route path="/report" element={<ReportMainPage />} />
        <Route path="/report/detail" element={<ReportPage />} />

        {/* 4. 커뮤니티 및 로그인 */}
        <Route path="/community" element={<CommunityPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />

        <Route path="/main" element={<MainAnalysisPage />} />
      </Routes>
    </Router>
  )
}

export default App;