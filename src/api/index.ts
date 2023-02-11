import axios from 'axios';

export const instance = axios.create({
  baseURL: 'https://api_test.yardimyeri.com/api',
  headers: {
    'Content-type': 'application/json',
  },
});

// todo: yapi konusulacak.
// export const findAll = async () => instance.get('/URL');

// export const findById = async (id: string) => instance.get(`/URL/${id}`);

// export const create = async () => instance.post('/URL', 'PAYLOAD');

// export const update = async (id: string) =>
//   instance.put(`/URL/${id}`, 'PAYLOAD');

// export const deleteById = async (id: string) => instance.delete(`/URL/${id}`);

// export const deleteAll = async () => instance.delete('/URL');
