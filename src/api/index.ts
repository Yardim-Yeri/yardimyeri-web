import axios, { AxiosRequestConfig } from 'axios';

const instance = axios.create({
  baseURL: 'https://api_test.yardimyeri.com/api',
  headers: {
    'Content-type': 'application/json',
  },
});

export const apiCall = async ({ url, method, data }: AxiosRequestConfig) => {
  const res = await instance({
    url,
    method,
    data,
  });

  return res.data.result;
};
