import { ChangeEvent, useState } from 'react';
import { useMutation, useQuery } from 'react-query';
import { apiCall } from '../api';
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
  const { data, isLoading } = useQuery('needs', () =>
    apiCall({
      url: '/needs',
      method: 'GET',
    }),
  );
  const postForm = useMutation({
    mutationFn: (payload: Fields) =>
      apiCall({
        method: 'POST',
        url: '/send-help-form',
        data: payload,
      }),
  });

  const onSubmit = () => {
    postForm.mutate(fields);
  };

  const handleChangeFields = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFields({ ...fields, [name]: value });
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
            onChange={handleChangeFields}
          />
          <div className="border border-black rounded-md p-4">
            <h4 className="font-semibold mb-4">İhtiyaç Türü</h4>
            {isLoading ? (
              <span>Loading...</span>
            ) : (
              data && <RadioGroup items={data} />
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
          <SelectLocation />
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
