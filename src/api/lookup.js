import client from './client';

/** target(이메일 또는 전화번호)으로 신고 이력 조회 */
export async function lookupTarget(target) {
  const res = await client.get('/lookup/', {
    params: { target },
  });
  return res.data; // { reported, count, target, reports: [...] }
}