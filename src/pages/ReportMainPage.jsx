import React, { useRef, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import { createReport } from '../api/report';
import './ReportPage.css';

const REPORT_TYPES = [
  { id: 'phone', title: '전화 제보', desc: '보이스피싱, ARS 금융기관 사칭 전화를 받은 경우' },
  { id: 'sms', title: '문자 (URL 포함)', desc: '스미싱 인증번호 유도 및 택배 주소 사기 문자의 경우' },
  { id: 'email', title: '이메일 피싱', desc: '포털 사이트 사칭 악성 링크 유도 메일을 받은 경우' },
];

// 화면 유형(phone/sms/email) → 백엔드 report_type(phone/email) 매핑
const TYPE_TO_BACKEND = {
  phone: 'phone',
  sms: 'phone',   // 문자도 전화번호 기반이라 phone으로 매핑 (팀원과 확인 필요)
  email: 'email',
};

function ReportPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const currentType = location.state?.type || 'sms';
  const fileInputRef = useRef(null);
  const [linkInput, setLinkInput] = useState('');
  const [scamTypeInput, setScamTypeInput] = useState('');
  const [descriptionInput, setDescriptionInput] = useState('');
  const [selectedType, setSelectedType] = useState(currentType);
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async () => {
    if (!linkInput.trim() || !scamTypeInput.trim() || !descriptionInput.trim()) {
      alert('모든 항목을 입력해 주세요!');
      return;
    }

    try {
      setSubmitting(true);
      await createReport({
        reportType: TYPE_TO_BACKEND[selectedType],
        targetValue: linkInput,
        scamType: scamTypeInput,
        description: descriptionInput,
      });
      alert('제보가 안전하게 접수되었습니다.');
      navigate('/');
    } catch (err) {
      alert(err.message);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="page-viewport page-viewport--page-bg">
      <div className="page-canvas report-page">
        <Navbar />

        <div className="report-page__header">
          <h2 className="report-page__title">피싱 사기 제보하기</h2>
          <p className="report-page__subtitle">받으신 위험 메시지 유형을 선택하고 정보를 입력해 주세요.</p>
        </div>

        <div className="report-page__type-selector">
          {REPORT_TYPES.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedType(item.id)}
              className={'report-page__type-card' + (selectedType === item.id ? ' report-page__type-card--selected' : '')}
            >
              <div className={'report-page__type-title' + (selectedType === item.id ? ' report-page__type-title--selected' : '')}>
                {item.title}
              </div>
              <div className="report-page__type-desc">{item.desc}</div>
            </div>
          ))}
        </div>

        <div className="report-page__form">
          <div className="report-page__field">
            <label className="report-page__field-label">이메일 ID 또는 휴대폰 번호</label>
            <input
              type="text"
              placeholder="의심스러운 이메일 주소나 전화번호를 입력하세요..."
              value={linkInput}
              onChange={(e) => setLinkInput(e.target.value)}
              className="report-page__text-input"
            />
          </div>

          <div className="report-page__field">
            <label className="report-page__field-label">사기 유형</label>
            <input
              type="text"
              placeholder="예: 기관사칭, 대출사기, 스미싱 등"
              value={scamTypeInput}
              onChange={(e) => setScamTypeInput(e.target.value)}
              className="report-page__text-input"
            />
          </div>

          <div className="report-page__field">
            <label className="report-page__field-label">상세 설명</label>
            <input
              type="text"
              placeholder="구체적인 상황을 설명해 주세요..."
              value={descriptionInput}
              onChange={(e) => setDescriptionInput(e.target.value)}
              className="report-page__text-input"
            />
          </div>

          <div>
            <label className="report-page__field-label">통화·문자 내역 증거 스크린샷 캡쳐</label>

            <div className="report-page__dropzone">
              <div className="report-page__dropzone-title">증거 파일 드래그 또는 마우스 선택</div>
              <div className="report-page__dropzone-hint">필수 포함 정보: 발신 전화번호, 수신 일자 및 규격 시각</div>

              <button className="report-page__dropzone-btn" onClick={() => fileInputRef.current.click()}>
                파일 찾기
              </button>
              <input
                type="file"
                ref={fileInputRef}
                style={{ display: 'none' }}
                onChange={(e) => {
                  if (e.target.files[0]) alert(`${e.target.files[0].name} 파일 탑재 완료 (업로드 기능은 아직 준비 중이에요)`);
                }}
              />
            </div>
          </div>

          <div className="report-page__submit-row">
            <button
              className="report-page__submit-btn"
              onClick={handleSubmit}
              disabled={submitting}
            >
              {submitting ? '등록 중...' : '제보 등록하기'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ReportPage;