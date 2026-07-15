// src/api/analysis.js
import client from './client';

/** AI 분석 요청 — 응답이 바로 최종 결과 (폴링 불필요) */
export async function requestAnalysis(inputText) {
  const res = await client.post('/analysis', { input_text: inputText });
  return res.data;
}

/** 내 분석 기록 조회 (keyword 있으면 검색, 없으면 전체 목록) */
export async function getAnalysisList(keyword) {
  const res = await client.get('/analysis', {
    params: keyword ? { keyword } : {},
  });
  return res.data;
}

/** 특정 분석 결과 상세 조회 */
export async function getAnalysisDetail(analysisId) {
  const res = await client.get(`/analysis/${analysisId}`);
  return res.data;
}

/** 누적 분석 횟수 */
export async function getAnalysisCount() {
  const res = await client.get('/analysis/count');
  return res.data.count;
}