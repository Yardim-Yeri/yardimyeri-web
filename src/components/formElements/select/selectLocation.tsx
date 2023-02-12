import { useQuery } from 'react-query';
import { useState } from 'react';
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

interface ILocationValues {
  id: number;
  name: string;
  key?: number;
}

interface ISelectValues {
  province?: ILocationValues;
  district?: ILocationValues;
  neighborhood?: ILocationValues;
  street?: ILocationValues;
}

const SelectLocation = () => {
  const defaultValue = { id: 0, name: 'Seciniz...' };
  const [value, setValue] = useState<ISelectValues>({
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
    ['districts', value.province?.key],
    getDistricts,
    {
      enabled: !!value.province,
    },
  );

  const { data: neighborhoodsData } = useQuery(
    ['neighborhoods', value.district?.key],
    getNeighborhoods,
    {
      enabled: !!value.district,
    },
  );

  const { data: streetsData } = useQuery(
    ['streets', value.neighborhood?.key],
    getStreets,
    {
      enabled: !!value.neighborhood,
    },
  );

  const handleProvinceChange = (selectValue: ILocationValues) => {
    setValue((prevState) => ({
      ...prevState,
      street: undefined,
      neighborhood: undefined,
      district: undefined,
      province: selectValue,
    }));
    dispatchLocation({ type: 'SET_PROVINCE', payload: value.key });
  };

  const handleDistrictChange = (selectValue: ILocationValues) => {
    setValue((prevState) => ({
      ...prevState,
      street: undefined,
      neighborhood: undefined,
      district: selectValue,
    }));
    dispatchLocation({ type: 'SET_DISTRICT', payload: value.key });
  };

  const handleNeighborhoodChange = (selectValue: ILocationValues) => {
    setValue((prevState) => ({
      ...prevState,
      street: undefined,
      neighborhood: selectValue,
    }));
    dispatchLocation({ type: 'SET_NEIGHBORHOOD', payload: value.key });
  };

  const handleStreetChange = (selectValue: ILocationValues) => {
    setValue((prevState) => ({ ...prevState, street: selectValue }));
    dispatchLocation({ type: 'SET_STREET', payload: value.key });
  };

  return (
    <LocationContextProvider>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        {provinceLoading ? (
          <span>Loading...</span>
        ) : (
          provinceData && (
            <Select
              items={provinceData.data}
              value={value.province || defaultValue}
              onChange={handleProvinceChange}
            />
          )
        )}
        <Select
          items={districtsData?.data}
          value={value.district || defaultValue}
          onChange={handleDistrictChange}
          disabled={!value.province}
        />
        <Select
          items={neighborhoodsData?.data}
          value={value.neighborhood || defaultValue}
          onChange={handleNeighborhoodChange}
          disabled={!value.district}
        />
        <Select
          items={streetsData?.data}
          value={value.street || defaultValue}
          onChange={handleStreetChange}
          disabled={!value.neighborhood}
        />
      </div>
    </LocationContextProvider>
  );
};

export default SelectLocation;
