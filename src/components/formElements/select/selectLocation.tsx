import { useQuery } from 'react-query';
import { useState } from 'react';
import { Controller, useFormContext } from 'react-hook-form';
import {
  LocationContextProvider,
  useLocationReducer,
} from '@/context/location.context';
import {
  getDistricts,
  getNeighborhoods,
  getProvinces,
  getStreets,
} from '@/api/location.service';
import Select from '.';

interface ISelectValues {
  province?: ISelectValues;
  district?: ISelectValues;
  neighborhood?: ISelectValues;
  street?: ISelectValues;
}

const SelectLocation = () => {
  const defaultValue = { id: 0, name: 'Seciniz...' };
  const {
    control,
    formState: { errors },
    clearErrors,
    setError,
    setValue,
  } = useFormContext();
  const [locationFields, setLocationFields] = useState<ISelectValues>({
    province: undefined,
    district: undefined,
    neighborhood: undefined,
    street: undefined,
  });
  const [, dispatchLocation] = useLocationReducer();
  const { data: provinceData, isLoading: provinceLoading } = useQuery(
    'provinces',
    getProvinces,
  );

  const { data: districtsData } = useQuery(
    ['districts', locationFields.province?.key],
    getDistricts,
    {
      enabled: !!locationFields.province,
    },
  );

  const { data: neighborhoodsData } = useQuery(
    ['neighborhoods', locationFields.district?.key],
    getNeighborhoods,
    {
      enabled: !!locationFields.district,
    },
  );

  const { data: streetsData } = useQuery(
    ['streets', locationFields.neighborhood?.key],
    getStreets,
    {
      enabled: !!locationFields.neighborhood,
    },
  );

  const handleProvinceChange = (selectValue: ISelectValues) => {
    setLocationFields((prevState) => ({
      ...prevState,
      street: undefined,
      neighborhood: undefined,
      district: undefined,
      province: selectValue,
    }));
    dispatchLocation({ type: 'SET_PROVINCE', payload: selectValue.key });
    setValue('province_id', selectValue.key);
    clearErrors('province_id');
    [
      {
        name: 'district_id',
        type: 'required',
        message: 'Bu alan zorunludur.',
      },
      {
        name: 'neighborhood_id',
        type: 'required',
        message: 'Bu alan zorunludur.',
      },
    ].forEach(({ name, type, message }) => setError(name, { type, message }));
  };

  const handleDistrictChange = (selectValue: ISelectValues) => {
    setLocationFields((prevState) => ({
      ...prevState,
      street: undefined,
      neighborhood: undefined,
      district: selectValue,
    }));
    dispatchLocation({ type: 'SET_DISTRICT', payload: selectValue.key });
    setValue('district_id', selectValue.key);
    clearErrors('district_id');
    setError('neighborhood_id', {
      type: 'required',
      message: 'Bu alan zorunludur.',
    });
  };

  const handleNeighborhoodChange = (selectValue: ISelectValues) => {
    setLocationFields((prevState) => ({
      ...prevState,
      street: undefined,
      neighborhood: selectValue,
    }));
    dispatchLocation({ type: 'SET_NEIGHBORHOOD', payload: selectValue.key });
    setValue('neighborhood_id', selectValue.key);
    clearErrors('neighborhood_id');
  };

  const handleStreetChange = (selectValue: ISelectValues) => {
    setLocationFields((prevState) => ({ ...prevState, street: selectValue }));
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
                    value={locationFields.province || defaultValue}
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
                value={locationFields.district || defaultValue}
                onChange={handleDistrictChange}
                disabled={!locationFields.province}
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
                value={locationFields.neighborhood || defaultValue}
                onChange={handleNeighborhoodChange}
                disabled={!locationFields.district}
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
                value={locationFields.street || defaultValue}
                onChange={handleStreetChange}
                disabled={!locationFields.neighborhood}
              />
            )}
          />
        </div>
      </div>
    </LocationContextProvider>
  );
};

export default SelectLocation;
