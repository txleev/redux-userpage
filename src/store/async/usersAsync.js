import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchUsers = createAsyncThunk('users/fetchAll', async () => {
  const response = await axios.get('https://fakestoreapi.com/users');
  return response.data;
});

export const fetchUserById = createAsyncThunk('users/fetchById', async (id) => {
  const response = await axios.get(`https://fakestoreapi.com/users/${id}`);
  return response.data;
});