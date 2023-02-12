import { QueryFunctionContext } from 'react-query';
import { instance } from '.';

export const getHelps = async ({ queryKey }: QueryFunctionContext) => {
  const response = await instance.get(`/help?page=${queryKey[1]}`);
  return response.data.result;
};
export const getHelpsById = async ({ queryKey }: QueryFunctionContext) => {
  const response = await instance.get(`/help/${queryKey[1]}`);
  return response.data.result;
};
