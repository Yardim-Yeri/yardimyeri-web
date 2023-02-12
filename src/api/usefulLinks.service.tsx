import { instance } from '.';

export const getUseFullLinks = async () => {
  const response = await instance.get('/useful-links');
  return response.data.result;
};
