import { instance } from '.';

export const getNeeds = async () => {
  const response = await instance.get('/needs');
  return response.data.result;
};
