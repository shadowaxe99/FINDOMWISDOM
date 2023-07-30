import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:8000/api',
  headers: {
    'Content-Type': 'application/json',
  },
});

export const createProfile = async (profileData) => {
  const response = await api.post('/profiles', profileData);
  return response.data;
};

export const matchUsers = async (matchmakingData) => {
  const response = await api.post('/matchmaking', matchmakingData);
  return response.data;
};

export const sendMessage = async (messageData) => {
  const response = await api.post('/messages', messageData);
  return response.data;
};

export const processTransaction = async (transactionData) => {
  const response = await api.post('/transactions', transactionData);
  return response.data;
};

export const assignTask = async (taskData) => {
  const response = await api.post('/tasks', taskData);
  return response.data;
};

export const postMessage = async (communityData) => {
  const response = await api.post('/community', communityData);
  return response.data;
};

export const reportUser = async (reportData) => {
  const response = await api.post('/reports', reportData);
  return response.data;
};

export default api;