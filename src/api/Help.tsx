import { QueryFunctionContext } from 'react-query';

import { instance } from '.';

export const getHelps = async ({ queryKey }: QueryFunctionContext) => {
  const response = await instance.get(
    `/help?page=${queryKey[1]}&ihtiyac_turu=${
      queryKey[2] ? queryKey[2] : ''
    }&sehir=${queryKey[3] ? queryKey[3] : ''}&help_status=${
      queryKey[4] ? queryKey[4] : ''
    }&kac_kisilik=${queryKey[5] ? queryKey[5] : ''}`,
  );
  return response.data.result;
};

export const getHelpsById = async ({ queryKey }: QueryFunctionContext) => {
  const response = await instance.get(`/help/${queryKey[1]}`);
  return response.data.result;
};

export const postHelperForm = async (id: string | undefined, payload: any) => {
  const response = await instance.post(`/send-helper-form/${id}`, payload);
  return response.data;
};

export const postHelpForm = async (payload: any) => {
  const response = await instance.post('/send-help-form', payload);
  return response.data;
};
