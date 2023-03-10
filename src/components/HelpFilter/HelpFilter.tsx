import {
  BaseSyntheticEvent,
  Dispatch,
  SetStateAction,
  memo,
  useState,
} from 'react';
import { useQuery } from 'react-query';

import { generateSelectValue } from '@/utils/GenerateSelectData';

import Button from '../formElements/button';
import Input from '../formElements/input';
import Select from '../formElements/select';
import Modal from '../shared/Modal';

import { getProvinces } from '@/api/Location';
import { getNeeds } from '@/api/Needs';
import { IRadioValues, ISelectValues } from '@/models/HelpForm';

export interface IDefaultFilterData {
  ihtiyac_turu: ISelectValues | null;
  sehir: ISelectValues | null;
  help_status: ISelectValues | null;
  order_direction: ISelectValues | null;
  kac_kisilik: string | number | null;
}
export const defaultFilterData: IDefaultFilterData = {
  ihtiyac_turu: null,
  sehir: null,
  help_status: null,
  kac_kisilik: null,
  order_direction: null,
};

type IHelpFilter = {
  filterData: IDefaultFilterData;
  setFilterData: Dispatch<SetStateAction<IDefaultFilterData>>;
  handleFilterReset: () => void;
  handleFilterSubmit: (data: IDefaultFilterData) => void;
};

const HelpFilter = ({
  filterData,
  setFilterData,
  handleFilterReset,
  handleFilterSubmit,
}: IHelpFilter) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const defaultValue = { id: 0, name: 'Seçiniz...' };
  const helpStatus = [
    { id: 0, name: 'Yardım Bekliyor', key: 0 },
    { id: 0, name: 'Yardım Geliyor', key: 0 },
    { id: 0, name: 'Yardım Ulaştı', key: 0 },
  ];

  const sorting = [
    { id: 0, name: 'Tarihe göre azalan', key: 'desc' },
    { id: 0, name: 'Tarihe göre artan', key: 'asc' },
  ];

  const { data: needsData, isLoading: needsLoading } = useQuery<IRadioValues[]>(
    'needs',
    getNeeds,
  );

  const { data: provinceData, isLoading: provinceLoading } = useQuery(
    'provinces',
    getProvinces,
  );

  const handleSelectChange = (
    selectValue: ISelectValues | undefined,
    type: string,
  ) => {
    setFilterData((prevState) => ({
      ...prevState,
      [type]: selectValue,
    }));
  };

  const handleInputChange = (e: BaseSyntheticEvent) => {
    const { value, name } = e.target;

    setFilterData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const isRenderFilter = !needsLoading && !provinceLoading && isOpen;

  return (
    <div>
      <Button
        size="small"
        label="Filtre"
        type="default"
        onClick={() => {
          setIsOpen(true);
        }}
      />
      {isRenderFilter && (
        <Modal
          title="Filtre"
          isOpen={isOpen}
          setIsOpen={setIsOpen}
        >
          <div className="grid sm:grid-cols-2 gap-5">
            <Select
              name="Siralama"
              items={sorting}
              value={filterData.order_direction || sorting[0]}
              onChange={(e) => {
                handleSelectChange(e, 'order_direction');
              }}
              buttonColorType="white"
            />
            <Select
              name="İhtiyaç Türü"
              items={generateSelectValue(needsData)}
              value={filterData.ihtiyac_turu || defaultValue}
              onChange={(e) => {
                handleSelectChange(e, 'ihtiyac_turu');
              }}
              buttonColorType="white"
            />
            <Select
              name="Şehir"
              items={provinceData.data}
              value={filterData.sehir || defaultValue}
              onChange={(e) => {
                handleSelectChange(e, 'sehir');
              }}
              buttonColorType="white"
            />
            <Select
              name="Yardım Durumu"
              items={helpStatus}
              value={filterData.help_status || defaultValue}
              onChange={(e) => {
                handleSelectChange(e, 'help_status');
              }}
              buttonColorType="white"
            />
            <div className="flex flex-col">
              <p>Kişinin Sayısı</p>
              <Input
                name="kac_kisilik"
                type="number"
                placeholder="Kişinin Sayısı"
                onChange={handleInputChange}
              />
            </div>
          </div>
          <div className="flex justify-end gap-2 mt-5">
            <Button
              size="small"
              label="Reset"
              type="default"
              onClick={() => handleFilterReset()}
            />
            <Button
              size="small"
              label="Filtrele"
              type="default"
              onClick={() => {
                handleFilterSubmit(filterData);
                setIsOpen(false);
              }}
            />
          </div>
        </Modal>
      )}
    </div>
  );
};

export default memo(HelpFilter);
