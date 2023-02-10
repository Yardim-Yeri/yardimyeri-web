import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:8080',
  headers: {
    'Content-type': 'application/json',
  },
});

export const getAll = () => instance.get<any>('/category/get');

export const getById = (id: string) => instance.get<any>(`/category/:${id}`);
