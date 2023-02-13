import { QueryFunctionContext } from 'react-query';

import { instance } from '.';

export const getCase = async ({ queryKey }: QueryFunctionContext) => {
  const response = await instance.get(`/case?id=${queryKey[1]}`);
  return response.data.result;
};

export const getFinishCase = async ({ queryKey }: QueryFunctionContext) => {
  const response = await instance.get(`/case-finish?id=${queryKey[1]}`);
  return response.data;
};
export const getCancelCase = async ({ queryKey }: QueryFunctionContext) => {
  const response = await instance.get(`/case-cancel?id=${queryKey[1]}`);
  return response.data;
};
