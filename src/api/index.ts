import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:8080',
  headers: {
    'Content-type': 'application/json',
  },
});

// todo: yapi konusulacak.
export const findAll = async () => instance.get('/URL');

export const findById = async (id: string) => instance.get(`/URL/${id}`);

export const create = async () => instance.post('/URL', 'PAYLOAD');

export const update = async (id: string) =>
  instance.put(`/URL/${id}`, 'PAYLOAD');

export const deleteById = async (id: string) => instance.delete(`/URL/${id}`);

export const deleteAll = async () => instance.delete('/URL');
