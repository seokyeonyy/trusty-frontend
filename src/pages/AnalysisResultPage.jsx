import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import './AnalysisResultPage.css';

function AnalysisResultPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const result = location.state?.result;

  if (!result) {
    return (
      <div className="page-viewport page-viewport--page-bg">
        <div className="page-canvas analysis-result-page">
          <Navbar />
          <div className="analysis-result-page__source-panel">
            <div className="analysis-result-page__source-label">분석 데이터가 없습니다.</div>
          </div>
        </div>
      </div>
    );
  }

  const isDanger = result.risk_level === 'HIGH';

  const cards = [
    { title: '위험 등급', value: result.risk_level, danger: isDanger },
    { title: '위험도 점수', value: `${result.score}점`, danger: isDanger },
    { title: '사기 유형', value: result.scam_type, danger: isDanger },
    { title: '판단 근거', value: result.reason, danger: isDanger },
  ];

  return (
    <div className="page-viewport page-viewport--page-bg">
      <div className="page-canvas analysis-result-page">
        <Navbar />

        <div className="analysis-result-page__header">
          <div>
            <h2 className="analysis-result-page__title">피싱 위험도 정밀 분석 결과</h2>
            <p className="analysis-result-page__subtitle">
              인공지능 모델이 수신 텍스트의 악성 사기 기법 리스크를 심층 분석한 데이터입니다.
            </p>
          </div>
          <button
            className="analysis-result-page__summary-btn"
            onClick={() => navigate('/analysis/summary', { state: { result } })}
          >
            정밀 분석 요약 보기 →
          </button>
        </div>

        <div className="analysis-result-page__source-panel">
          <div className="analysis-result-page__source-label">제보된 텍스트 원문</div>
          <div className="analysis-result-page__source-text">{result.input_text}</div>
        </div>

        <div className="analysis-result-page__grid">
          {cards.map((card, i) => (
            <div key={i} className="analysis-result-page__card">
              <div className="analysis-result-page__card-header">
                <span className="analysis-result-page__card-title">{card.title}</span>
                <span className={'badge ' + (card.danger ? 'badge--danger' : 'badge--success')}>
                  {card.danger ? '⚠️ 위험 탐지' : '✓ 안전 지표'}
                </span>
              </div>
              <div className="analysis-result-page__card-value">{card.value}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default AnalysisResultPage;