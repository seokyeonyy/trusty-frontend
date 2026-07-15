import client from './client';

export async function createPost(title, content, file) {
  const formData = new FormData();
  formData.append('title', title);
  formData.append('content', content);
  if (file) formData.append('file', file);

  const res = await client.post('/community/post', formData, {
    headers: { 'Content-Type': 'multipart/form-data' },
  });
  return res.data;
}

export async function getPosts() {
  const res = await client.get('/community/post');
  return res.data;
}

export async function getPost(postId) {
  const res = await client.get(`/community/post/${postId}`);
  return res.data;
}

export async function deletePost(postId) {
  const res = await client.delete(`/community/post/${postId}`);
  return res.data;
}

export async function createComment(postId, content) {
  const res = await client.post('/community/comment', { post_id: postId, content });
  return res.data;
}

export async function getComments(postId) {
  const res = await client.get(`/community/comment/${postId}`);
  return res.data;
}