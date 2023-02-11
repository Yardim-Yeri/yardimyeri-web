import { instance } from '.';

export const getProvinces = async () => {
  const response = await instance.get('/provinces');
  return response.data;
};

export const getDistricts = async (provinceId: string) => {
  const response = await instance.get(`/districts/${provinceId}`);
  return response.data;
};

export const getNeighborhoods = async (districtId: string) => {
  const response = await instance.get(`/neighborhoods/${districtId}`);
  return response.data;
};

export const getStreets = async (neighborhoodId: string) => {
  const response = await instance.get(`/streets/${neighborhoodId}`);
  return response.data;
};
