import { FaPhoneAlt, FaEnvelope, FaSms } from 'react-icons/fa'; // 아이콘 import

function ReportSection() {
  return (
    <div className="report-cards-container">
      {/* 전화 카드 */}
      <div className="card">
        <FaPhoneAlt size={40} className="card-icon" />
        <h3>전화</h3>
        <p>전화통화, ARS 통화로 기관/대출/수사 등을 받은 경우</p>
      </div>

      {/* 문자 카드 */}
      <div className="card">
        <FaSms size={40} className="card-icon" />
        <h3>문자(URL 포함)</h3>
        <p>문자로 인증번호 및 결제 안내를 받거나 URL이 포함된 경우</p>
      </div>

      {/* 이메일 카드 */}
      <div className="card">
        <FaEnvelope size={40} className="card-icon" />
        <h3>이메일(URL 포함)</h3>
        <p>이메일로 인증번호 및 결제 안내를 받거나 URL이 포함된 경우</p>
      </div>
    </div>
  );
}
export default ReportSection;