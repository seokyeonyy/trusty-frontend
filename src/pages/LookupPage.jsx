import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import { lookupTarget } from '../api/lookup';
import './LookupPage.css';

const STORAGE_KEY = 'trusty_lookup_history';

function LookupPage() {
  const navigate = useNavigate();
  const [searchInput, setSearchInput] = useState('');
  const [historyList, setHistoryList] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      setHistoryList(JSON.parse(saved));
    }
  }, []);

  const handleSearch = async () => {
    if (!searchInput.trim()) {
      alert('이메일 ID 또는 휴대폰 번호를 입력해 주세요!');
      return;
    }
    try {
      setError('');
      const data = await lookupTarget(searchInput);
      const newEntry = { ...data, searchedAt: new Date().toISOString() };
      const updatedList = [newEntry, ...historyList];
      setHistoryList(updatedList);
      localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedList));
      setSearchInput('');
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="page-viewport page-viewport--white-bg">
      <div className="lookup-page">
        <Navbar />

        <div className="lookup-page__title">피싱 이력 조회</div>
        <div className="lookup-page__desc">
          메일 아이디나 핸드폰 번호를 입력하여 신고 이력 및 위험 여부를 실시간으로 확인하세요
        </div>
        <div className="lookup-page__field-label">이메일 ID 또는 휴대폰 번호</div>

        <input
          type="text"
          placeholder="이메일 주소 또는 전화번호를 입력하고 엔터를 누르세요..."
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === 'Enter') handleSearch();
          }}
          className="lookup-page__input"
        />

        <div className="lookup-page__search-btn" onClick={handleSearch}>
          <div className="lookup-page__search-btn-text">검색</div>
        </div>

        {error && <div className="lookup-page__error">{error}</div>}

        <div className="lookup-page__hint">검색 결과를 확인해 보세요</div>

        <div className="lookup-page__list">
          {historyList.map((entry, idx) => (
            <div key={idx} className="lookup-page__row">
              <div className="lookup-page__row-target">{entry.target}</div>
              <div
                className={
                  'lookup-page__row-status lookup-page__row-status--' +
                  (entry.reported ? 'danger' : 'safe')
                }
              >
                {entry.reported ? `신고됨(위험) ${entry.count}건` : '신고됨(안전)'}
              </div>
              <div
                className="lookup-page__row-detail"
                onClick={() => navigate('/analysis/result', { state: { lookupEntry: entry } })}
              >
                상세보기
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default LookupPage;