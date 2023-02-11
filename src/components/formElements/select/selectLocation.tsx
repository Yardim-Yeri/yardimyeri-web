import { useQuery } from 'react-query';
import { apiCall } from '../../../api';
import Select from '.';

const SelectLocation = () => {
  const { data: provinceData, isLoading: provinceLoading } = useQuery(
    'provinces',
    () =>
      apiCall({
        url: '/provinces',
        method: 'GET',
      }),
  );

  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
      {provinceLoading ? (
        <span>Loading...</span>
      ) : (
        provinceData && <Select items={provinceData.data} />
      )}
      {/*
      <Select
        items={provinceData}
        disabled
      />
      <Select
        items={provinceData}
        disabled
      />
      <Select
        items={provinceData}
        disabled
      /> */}
    </div>
  );
};

export default SelectLocation;
