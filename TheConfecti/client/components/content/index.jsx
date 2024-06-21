// src/api/userApi.js
import axiosClient from './axiosClient';

export const fetchUser = async () => {
  try {
    const response = await axiosClient.get('/user');
    return response.data;
  } catch (error) {
    throw error;
  }
};