// src/api/auth.js
import client, { setToken } from './client';

export async function signup(email, password) {
  const res = await client.post('/auth/signup', { email, password });
  return res.data;
}

export async function login(email, password) {
  const res = await client.post('/auth/login', { email, password });
  setToken(res.data.access_token);
  return res.data;
}

// 추가 ①: 로그인한 내 정보 조회
export async function getMe() {
  const res = await client.get('/users/me');
  return res.data; // { id, email }
}

// 추가 ②: 로그아웃 (토큰 삭제)
export function logout() {
  localStorage.removeItem('access_token');
}