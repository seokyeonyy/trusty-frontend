// src/routes/AppRouter.jsx
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainAnalysisPage from '../pages/MainAnalysisPage';
import AnalysisInputPage from '../pages/AnalysisInputPage';
import AnalysisResultPage from '../pages/AnalysisResultPage'; // 기존 결과창 유지!
import AnalysisDashboardPage from '../pages/AnalysisDashboardPage'; // 새로 만든 정밀 대시보드 추가!
import LookupPage from '../pages/LookupPage';
import LoginPage from '../pages/LoginPage';
import CommunityPage from '../pages/CommunityPage';
import ReportMainPage from '../pages/ReportMainPage';
import ReportPage from '../pages/ReportPage';

function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainAnalysisPage />} />
        <Route path="/input" element={<AnalysisInputPage />} />
        <Route path="/result" element={<AnalysisResultPage />} />
        <Route path="/dashboard" element={<AnalysisDashboardPage />} />
        <Route path="/lookup" element={<LookupPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/community" element={<CommunityPage />} />
        <Route path="/report" element={<ReportMainPage />} />
        <Route path="/report/detail" element={<ReportPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;