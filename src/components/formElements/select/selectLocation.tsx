import { useQuery } from 'react-query';
import Select from '.';
import { getProvinces } from '../../../api/location.service';

const SelectLocation = () => {
  const {
    data: provinceData,
    isLoading: provinceLoading,
    error: provinceError,
  } = useQuery('provinces', getProvinces);

  console.log(provinceData, provinceLoading, provinceError);

  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
      {provinceLoading ? (
        <span>Loading...</span>
      ) : (
        provinceData && <Select items={provinceData.result.data} />
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
