import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import Navbar from '../components/Navbar';
import './AnalysisSummaryPage.css';

function AnalysisSummaryPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const result = location.state?.result;

  if (!result) {
    return (
      <div className="page-viewport page-viewport--page-bg">
        <div className="page-canvas analysis-summary-page">
          <Navbar />
          <div className="analysis-summary-page__header">
            <h2 className="analysis-summary-page__title">분석 데이터가 없습니다.</h2>
          </div>
        </div>
      </div>
    );
  }

  const isDanger = result.risk_level === 'HIGH';

  const metricCards = [
    { label: 'URL 위험도', value: `${result.url_risk_score}%`, tone: result.url_risk_score >= 50 ? 'danger' : 'success' },
    { label: '언어 패턴', value: `${result.language_pattern_score}%`, tone: result.language_pattern_score >= 50 ? 'danger' : 'success' },
    { label: '발신자 신뢰도', value: `${result.sender_reliability_score}%`, tone: result.sender_reliability_score >= 50 ? 'success' : 'danger' },
    { label: '긴급성 유도', value: `${result.urgency_score}%`, tone: result.urgency_score >= 50 ? 'danger' : 'success' },
  ];

  return (
    <div className="page-viewport page-viewport--page-bg">
      <div className="page-canvas analysis-summary-page">
        <Navbar />

        <div className="analysis-summary-page__header">
          <div>
            <h2 className="analysis-summary-page__title">피싱 위험도 정밀 요약 리포트</h2>
            <p className="analysis-summary-page__subtitle">
              각 탐지 지표별 정량적 위험도 점수와 종합 대응 가이드라인입니다.
            </p>
          </div>
          <button
            className="analysis-summary-page__back-btn"
            onClick={() => navigate('/analysis/result', { state: { result } })}
          >
            ← 기본 분석 창으로
          </button>
        </div>

        <div className="analysis-summary-page__metrics">
          {metricCards.map((m) => (
            <div key={m.label} className="metric-card">
              <span className="metric-card__label">{m.label}</span>
              <div className="metric-card__row">
                <span className={'metric-card__value metric-card__value--' + m.tone}>{m.value}</span>
                <div className="metric-card__bar-track">
                  <div
                    className={'metric-card__bar-fill metric-card__bar-fill--' + m.tone}
                    style={{ width: m.value }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="analysis-summary-page__final">
          <div className="analysis-summary-page__score-panel">
            <span className="analysis-summary-page__score-label">최종 피싱 위험도</span>
            <span className="analysis-summary-page__score-value">{result.score}%</span>
            <span className={'badge ' + (isDanger ? 'badge--danger' : 'badge--success') + ' analysis-summary-page__score-tag'}>
              {isDanger ? '⚠️ 위험 등급 피싱 의심' : '✓ 안전 지표'}
            </span>
          </div>

          <div className="analysis-summary-page__detail-col">
            <div className="analysis-summary-page__detail-card">
              <div className="analysis-summary-page__detail-heading">
                <span className="analysis-summary-page__heading-bar analysis-summary-page__heading-bar--blue" />
                상세 분석 요약
              </div>
              <div className="analysis-summary-page__detail-body">
                {result.reason}
              </div>
            </div>

            <div className="analysis-summary-page__detail-card">
              <div className="analysis-summary-page__detail-heading">
                <span className="analysis-summary-page__heading-bar analysis-summary-page__heading-bar--amber" />
                권장 조치 사항
              </div>
              <div className="analysis-summary-page__detail-body">
                {result.recommended_actions.map((action, i) => (
                  <React.Fragment key={i}>
                    {i + 1}. {action}
                    <br />
                  </React.Fragment>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AnalysisSummaryPage;