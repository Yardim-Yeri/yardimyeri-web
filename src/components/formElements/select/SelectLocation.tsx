import { useState } from 'react';
import { Controller, useFormContext } from 'react-hook-form';
import { useQuery } from 'react-query';

import {
  getDistricts,
  getNeighborhoods,
  getProvinces,
  getStreets,
} from '@/api/Location';
import {
  LocationContextProvider,
  useLocationReducer,
} from '@/context/Location';
import { ISelectValues } from '@/models/HelpForm';

import Select from '.';

interface ISelectValuesState {
  province_id: ISelectValues | undefined;
  district_id: ISelectValues | undefined;
  neighborhood_id: ISelectValues | undefined;
  street_id: ISelectValues | undefined;
}

const SelectLocation = () => {
  const defaultValue = { id: 0, name: 'Seçiniz...' };
  const {
    control,
    formState: { errors },
    clearErrors,
    setError,
    setValue,
  } = useFormContext<ISelectValuesState>();
  const [locationFields, setLocationFields] = useState<ISelectValuesState>({
    province_id: undefined,
    district_id: undefined,
    neighborhood_id: undefined,
    street_id: undefined,
  });
  const [, dispatchLocation] = useLocationReducer();
  const { data: provinceData, isLoading: provinceLoading } = useQuery(
    'provinces',
    getProvinces,
  );

  const { data: districtsData } = useQuery(
    ['districts', locationFields.province_id?.key],
    getDistricts,
    {
      enabled: !!locationFields.province_id,
    },
  );

  const { data: neighborhoodsData } = useQuery(
    ['neighborhoods', locationFields.district_id?.key],
    getNeighborhoods,
    {
      enabled: !!locationFields.district_id,
    },
  );

  const { data: streetsData } = useQuery(
    ['streets', locationFields.neighborhood_id?.key],
    getStreets,
    {
      enabled: !!locationFields.neighborhood_id,
    },
  );

  const handleProvinceChange = (selectValue: any) => {
    setLocationFields((prevState) => ({
      ...prevState,
      street_id: undefined,
      neighborhood_id: undefined,
      district_id: undefined,
      province_id: selectValue,
    }));
    dispatchLocation({ type: 'SET_PROVINCE', payload: selectValue.key });
    setValue('province_id', selectValue.key);
    clearErrors('province_id');
    setError('district_id', {
      type: 'required',
      message: 'Bu alan zorunludur.',
    });
    setError('neighborhood_id', {
      type: 'required',
      message: 'Bu alan zorunludur.',
    });
  };

  const handleDistrictChange = (selectValue: any) => {
    setLocationFields((prevState) => ({
      ...prevState,
      street_id: undefined,
      neighborhood_id: undefined,
      district_id: selectValue,
    }));
    dispatchLocation({ type: 'SET_DISTRICT', payload: selectValue.key });
    setValue('district_id', selectValue.key);
    clearErrors('district_id');
    setError('neighborhood_id', {
      type: 'required',
      message: 'Bu alan zorunludur.',
    });
  };

  const handleNeighborhoodChange = (selectValue: any) => {
    setLocationFields((prevState) => ({
      ...prevState,
      street_id: undefined,
      neighborhood_id: selectValue,
    }));
    dispatchLocation({ type: 'SET_NEIGHBORHOOD', payload: selectValue.key });
    setValue('neighborhood_id', selectValue.key);
    clearErrors('neighborhood_id');
  };

  const handleStreetChange = (selectValue: any) => {
    setLocationFields((prevState) => ({
      ...prevState,
      street_id: selectValue,
    }));
    dispatchLocation({ type: 'SET_STREET', payload: selectValue.id });
    setValue('street_id', selectValue.id);
  };

  return (
    <LocationContextProvider>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        {provinceLoading ? (
          <span>Loading...</span>
        ) : (
          provinceData && (
            <Controller
              name="province_id"
              control={control}
              rules={{
                required: 'Bu alan zorunludur.',
              }}
              render={({ field }) => (
                <div>
                  <Select
                    {...field}
                    items={provinceData.data}
                    value={locationFields.province_id || defaultValue}
                    onChange={handleProvinceChange}
                  />
                  <span className="text-red-600 text-sm">
                    {errors.province_id?.message}
                  </span>
                </div>
              )}
            />
          )
        )}
        <div>
          <Controller
            name="district_id"
            control={control}
            rules={{
              required: 'Bu alan zorunludur.',
            }}
            render={({ field }) => (
              <Select
                {...field}
                items={districtsData?.data}
                value={locationFields.district_id || defaultValue}
                onChange={handleDistrictChange}
                disabled={!locationFields.province_id}
              />
            )}
          />
          <span className="text-red-600 text-sm">
            {errors.district_id?.message}
          </span>
        </div>
        <div>
          <Controller
            name="neighborhood_id"
            control={control}
            rules={{
              required: 'Bu alan zorunludur.',
            }}
            render={({ field }) => (
              <Select
                {...field}
                items={neighborhoodsData?.data}
                value={locationFields.neighborhood_id || defaultValue}
                onChange={handleNeighborhoodChange}
                disabled={!locationFields.district_id}
              />
            )}
          />
          <span className="text-red-600 text-sm">
            {errors.neighborhood_id?.message}
          </span>
        </div>
        <div>
          <Controller
            name="street_id"
            control={control}
            render={({ field }) => (
              <Select
                {...field}
                items={streetsData?.data}
                value={locationFields.street_id || defaultValue}
                onChange={handleStreetChange}
                disabled={!locationFields.neighborhood_id}
              />
            )}
          />
        </div>
      </div>
    </LocationContextProvider>
  );
};

export default SelectLocation;
