import { ChangeEvent, useState } from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import { IHelpListItem } from '@/models/helpList.model';
import Button from '../components/formElements/button';
import Input from '../components/formElements/input';
import InputPhone from '../components/formElements/input/inputPhone';
import Layout from '../components/shared/Layout';
import Modal from '../components/shared/Modal/Modal';
import PageTitle from '../components/shared/PageTitle';
import { apiCall } from '../api';

type Fields = {
  name: string;
  email: string;
  phoneNumber: string;
};

const HelpDetail = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [fields, setFields] = useState<Fields>({
    name: '',
    email: '',
    phoneNumber: '',
  });
  const { id } = useParams();

  const { data, isLoading } = useQuery<IHelpListItem>('helpById', () =>
    apiCall({ url: `help/${id}`, method: 'GET' }),
  );

  const handleModalOpen = () => {
    setIsOpen(true);
  };

  const handleChangeFields = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFields({ ...fields, [name]: value });
  };

  return (
    <Layout>
      <PageTitle title="Yardim Talebi Detayi" />
      {!isLoading && (
        <>
          <div className="flex justify-end">
            <div className="text-base font-bold bg-amber-300 p-4 rounded-lg">
              {data?.status}
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <div className="shadow-md p-4 rounded">
              <p className="text-base font-bold">İsim</p>
              <p className="text-base">{data?.name}</p>
            </div>
            <div className="shadow-md p-4 rounded">
              <p className="text-base font-bold">İhtiyaç Türü</p>
              <p className="text-base"> {data?.need.type}</p>
            </div>
            {data?.need.detail && (
              <div className="shadow-md p-4 rounded">
                <p className="text-base font-bold">İhtiyaç Türü Detayı</p>
                <p className="text-base">{data?.need.detail}</p>
              </div>
            )}
            <div className="shadow-md p-4 rounded">
              <p className="text-base font-bold">Kaç Kişilik</p>
              <p className="text-base"> {data?.how_many_person}</p>
            </div>
            <div className="shadow-md p-4 rounded">
              <p className="text-base font-bold">Adres</p>
              <p className="text-base"> {data?.address}</p>
            </div>
            {data?.for_directions && (
              <div className="shadow-md p-4 rounded">
                <p className="text-base font-bold">Adres Tarifi</p>
                <p className="text-base"> {data?.for_directions}</p>
              </div>
            )}
            <p className="text-base text-red-600">
              Yardıma gidiyorsan veya yardım ettiysen aşağıdaki buton aracılığı
              ile bize bildir. Yardıma ihtiyacı olanlara doğru veriyi
              aktarabilmemiz için gerekli
            </p>
          </div>
          <div className="flex justify-center mt-6">
            <Button
              label="Yardım Et"
              onClick={handleModalOpen}
            />
          </div>
        </>
      )}

      <Modal
        title="Yardım Başlatılacak!"
        isOpen={isOpen}
        setIsOpen={setIsOpen}
      >
        <div>
          <p className="">
            Aşağıda bulunan bilgileri doldurduktan sonra yardımı
            başlatabilirsiniz.
          </p>
          <p className="text-red-500">
            Yardımı başlattığınız takdirde yardım talep edenin iletişim
            bilgilerine ulaşabilirsiniz.
          </p>

          <form className="mt-5">
            <div className="flex flex-col gap-6">
              <Input
                name="name"
                placeholder="Adınız"
                onChange={handleChangeFields}
              />
              <div>
                <Input
                  name="email"
                  placeholder="E-Posta Adresiniz"
                  onChange={handleChangeFields}
                />
                <p className="text-gray-500 text-sm">
                  Bu alan zorunlu değildir. Ancak e-posta adresinizi girdiğiniz
                  takdirde yeni oluşan talepleri mail olarak sizlere
                  bildiriyoruz.
                </p>
              </div>
              <div>
                <InputPhone
                  name="phoneNumber"
                  onChange={handleChangeFields}
                />
                <p className="text-gray-500 text-sm">
                  Lütfen numaranızı başında sıfır olmadan girin.
                </p>
              </div>
            </div>
          </form>
          <div className="mt-4 flex justify-end gap-3">
            <Button
              label="Vazgeç"
              type="error"
              size="small"
              onClick={() => {
                setIsOpen(false);
              }}
            />
            <Button
              label="Yardımı Başlat"
              type="success"
              size="small"
              onClick={() => {}}
            />
          </div>
        </div>
      </Modal>
    </Layout>
  );
};

export default HelpDetail;
