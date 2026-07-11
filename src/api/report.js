import client from './client';

export async function createReport({ reportType, targetValue, scamType, description, evidenceUrl }) {
  const res = await client.post('/reports/', {
    report_type: reportType,
    target_value: targetValue,
    scam_type: scamType,
    description,
    evidence_url: evidenceUrl || null,
  });
  return res.data;
}