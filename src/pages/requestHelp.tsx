import { ChangeEvent, useState } from 'react';
import { useQuery } from 'react-query';
import { getNeeds } from '@/api/needs.service';
import { LocationContextProvider } from '@/context/location.context';
import Button from '../components/formElements/button';
import Input from '../components/formElements/input';
import InputPhone from '../components/formElements/input/inputPhone';
import RadioGroup from '../components/formElements/radioGroup';
import SelectLocation from '../components/formElements/select/selectLocation';
import Map from '../components/map';
import Layout from '../components/shared/Layout';

type Fields = {
  name: string;
  phoneNumber: string;
  type: IRadioValues | undefined;
  detail: string;
  needHelpCount: string | number;
  apartment: string;
  address: string;
};

interface IRadioValues {
  id: number;
  label: string;
}

const RequestHelp = () => {
  const [fields, setFields] = useState<Fields>({
    name: '',
    phoneNumber: '',
    type: undefined,
    detail: '',
    needHelpCount: '',
    apartment: '',
    address: '',
  });
  const { data, isLoading } = useQuery('needs', getNeeds);

  const onSubmit = () => {
    console.log(fields);
  };

  const handleChangeFields = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFields({ ...fields, [name]: value });
  };

  const handleTypeChange = (radioValue: IRadioValues) => {
    setFields({ ...fields, type: radioValue });
  };

  return (
    <Layout formLayout>
      <div className="flex justify-center items-center flex-col gap-7">
        <h1 className="text-lg sm:text-4xl font-bold w-3/4 text-center leading-relaxed">
          YARDIM TALEBİM VAR
        </h1>
        <div className="w-full flex flex-col gap-4">
          <Input
            name="name"
            placeholder="Adınız"
            onChange={handleChangeFields}
          />
          <InputPhone
            name="phoneNumber"
            placeholder="Telefon Numaraniz"
            onChange={handleChangeFields}
          />
          <div className="border border-black rounded-md p-4">
            <h4 className="font-semibold mb-4">İhtiyaç Türü</h4>
            {isLoading ? (
              <span>Loading...</span>
            ) : (
              data && (
                <RadioGroup
                  value={fields.type}
                  items={data}
                  onChange={handleTypeChange}
                />
              )
            )}
          </div>
          <Input
            name="detail"
            placeholder="Varsa İhtiyaç Türü Detayı"
            onChange={handleChangeFields}
          />
          <Input
            type="number"
            name="needHelpCount"
            placeholder="Kaç Kişinin İhtiyacı Var?"
            onChange={handleChangeFields}
          />
          <Map />
          <LocationContextProvider>
            <SelectLocation />
          </LocationContextProvider>
          <Input
            name="apartment"
            placeholder="Apartman"
            onChange={handleChangeFields}
          />
          <Input
            name="address"
            placeholder="Adres Tarifi"
            onChange={handleChangeFields}
          />
          <Button
            label="Yardım Talebi Gönder"
            onClick={onSubmit}
          />
        </div>
      </div>
    </Layout>
  );
};

export default RequestHelp;
