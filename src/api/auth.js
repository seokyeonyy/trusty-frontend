// src/api/auth.js
import client, { setToken } from './client';

export async function signup(email, password) {
  const res = await client.post('/auth/signup', { email, password });
  return res.data;
}

<<<<<<< HEAD
// src/api/auth.js 수정
export async function login(email, password) {
  // 1. FormData 객체 생성
  const formData = new URLSearchParams();
  formData.append('username', email); // OAuth2PasswordRequestForm은 'username' 필드를 찾습니다
  formData.append('password', password);

  // 2. 요청 보내기
  const res = await client.post('/auth/login', formData, {
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
  });
  
=======
export async function login(email, password) {
  const res = await client.post('/auth/login', { email, password });
>>>>>>> 54ef5e0f53c314a96c0f300fe92d037a1f47eb32
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