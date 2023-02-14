import axios from 'axios';

export const instance = axios.create({
  baseURL: 'https://api.yardimyeri.com/api',
  headers: {
    'Content-type': 'application/json',
  },
});
