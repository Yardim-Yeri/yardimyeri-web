import { ChangeEvent, useState } from 'react';
import RadioGroup from '../components/formElements/radioGroup';
import requestHelpType from '../mocks/requestHelpType';
import Layout from '../components/shared/Layout';
import Select from '../components/formElements/select';
import city from '../mocks/city';
import Map from '../components/map';
import Input from '../components/formElements/input';
import Button from '../components/formElements/button';
import InputPhone from '../components/formElements/input/inputPhone';

type Fields = {
  name: string;
  phoneNumber: string;
  type: string;
  detail: string;
  needHelpCount: string | number;
  apartment: string;
  address: string;
};

const RequestHelp = () => {
  const [fields, setFields] = useState<Fields>({
    name: '',
    phoneNumber: '',
    type: '',
    detail: '',
    needHelpCount: '',
    apartment: '',
    address: '',
  });

  const onSubmit = () => {
    console.log('onSubmit');
  };

  const handleChangeFields = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFields({ ...fields, [name]: value });
  };

  console.log('change', fields);

  return (
    <Layout>
      <div className="flex justify-center items-center flex-col gap-7">
        <h1 className="text-lg sm:text-4xl font-bold w-3/4 text-center leading-relaxed">
          YARDIM TALEBİM VAR
        </h1>
        <div className="w-1/2 flex flex-col gap-4">
          <Input
            name="name"
            placeholder="Adınız"
            onChange={handleChangeFields}
          />
          <InputPhone
            name="phoneNumber"
            onChange={handleChangeFields}
          />
          <div className="border border-black rounded-md p-4">
            <h4 className="font-semibold mb-4">İhtiyaç Türü</h4>
            <RadioGroup items={requestHelpType} />
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
          <div className="grid grid-cols-4 gap-4">
            <Select items={city} />
            <Select
              items={city}
              disabled
            />
            <Select
              items={city}
              disabled
            />
            <Select
              items={city}
              disabled
            />
          </div>
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
