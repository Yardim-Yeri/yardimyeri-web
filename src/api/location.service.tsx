import { QueryFunctionContext } from 'react-query';
import { instance } from '.';

export const getProvinces = async () => {
  const response = await instance.get('/provinces');
  return response.data.result;
};

export const getDistricts = async ({ queryKey }: QueryFunctionContext) => {
  const response = await instance.get(`/districts/${queryKey[1]}`);
  return response.data.result;
};

export const getNeighborhoods = async ({ queryKey }: QueryFunctionContext) => {
  const response = await instance.get(`/neighborhoods/${queryKey[1]}`);
  return response.data.result;
};

export const getStreets = async ({ queryKey }: QueryFunctionContext) => {
  const response = await instance.get(`/streets/${queryKey[1]}`);
  return response.data.result;
};
