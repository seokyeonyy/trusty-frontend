import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import { requestAnalysis } from '../api/analysis';
import './AnalysisInputPage.css';

function AnalysisInputPage() {
  const navigate = useNavigate();
  const [inputText, setInputText] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async () => {
    if (!inputText.trim()) {
      alert('분석할 내용을 입력해주세요.');
      return;
    }

    try {
      setLoading(true);
      setError('');
      const result = await requestAnalysis(inputText);
      navigate('/analysis/result', { state: { result } });
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="analysis-input-page">
      <div className="analysis-input-page__panel" />

      <div className="analysis-input-page__desc">
        입력하신 텍스트나 이메일 내용을 실시간으로 검토하여 위험도를 분석합니다.
      </div>

      <textarea
        className="analysis-input-page__textarea"
        placeholder="여기에 위험도가 의심되는 텍스트나 메일 내용을 붙여넣으세요..."
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
      />

      <div className="analysis-input-page__label">분석할 내용을 입력하세요</div>

      {error && <div className="analysis-input-page__error">{error}</div>}

      <div
        className="analysis-input-page__submit"
        onClick={handleSubmit}
      >
        <span className="analysis-input-page__submit-text">
          {loading ? '분석 중...' : '분석하기'}
        </span>
      </div>

      <div className="analysis-input-page__title">피싱 분석 도구</div>

      <Navbar />
    </div>
  );
}

export default AnalysisInputPage;