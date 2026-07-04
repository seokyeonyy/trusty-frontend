import client, { setToken } from './client';

export async function signup(email, password) {
  const res = await client.post('/auth/signup', { email, password });
  return res.data;
}

export async function login(email, password) {

  // ⭐ 디버깅용
  console.log("========== LOGIN ==========");
  console.log("email:", email);
  console.log("password:", password);

  const body = {
    email,
    password,
  };

  console.log("Request Body:", body);

  const res = await client.post('/auth/login', body);

  setToken(res.data.access_token);

  return res.data;
}