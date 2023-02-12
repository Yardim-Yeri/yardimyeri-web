import { useState } from 'react';
import { useQuery } from 'react-query';
import { Link, useNavigate, useSearchParams } from 'react-router-dom';
import { CheckIcon } from '@heroicons/react/24/solid';
import { toast } from 'react-hot-toast';
import { AxiosError } from 'axios';
import { IHelpListItem } from '../models/helpList.model';
import Button from '../components/formElements/button';
import HelpDetailContent from '../components/helpDetailContent/HelpDetailContent';
import Layout from '../components/shared/Layout';
import PageTitle from '../components/shared/PageTitle';
import { getCancelCase, getCase, getFinishCase } from '@/api/case.service';
import Modal from '../components/shared/Modal/Modal';

interface ICaseResponseType {
  message: string;
}
const Case = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const [query] = useSearchParams();
  const id = query.get('id');

  const navigate = useNavigate();

  const { data, isLoading } = useQuery<IHelpListItem>(
    ['caseById', id],
    getCase,
  );

  const successAction = () => {
    setIsOpen(true);
    setTimeout(() => {
      navigate('/');
    }, 3000);
  };

  const finishCase = useQuery<ICaseResponseType, AxiosError, IHelpListItem>(
    ['finishCase', id],
    getFinishCase,

    {
      enabled: false,
      onError: (error) => {
        toast.error(`${error.message}`);
      },
      onSuccess: () => {
        successAction();
      },
    },
  );

  const cancelCase = useQuery<ICaseResponseType, AxiosError, IHelpListItem>(
    ['cancelCase', id],
    getCancelCase,
    {
      enabled: false,
      onError: (error) => {
        toast.error(`${error.message}`);
      },
      onSuccess: () => {
        successAction();
      },
    },
  );

  return (
    <Layout>
      {!isLoading && data ? (
        <>
          <PageTitle title="Yardım Talebi Detayı" />
          <HelpDetailContent data={data} />
          <div className="flex justify-center gap-2 mt-6">
            <Button
              label="Yardımı iptal et"
              onClick={cancelCase.refetch}
              type="error"
            />
            <Button
              label="Yardımı Tamamla"
              onClick={finishCase.refetch}
              type="success"
            />
          </div>
        </>
      ) : (
        <div className="border-t border-gray-200 text-center pt-8">
          <h1 className="text-8xl lg:text-9xl font-bold text-black">404</h1>
          <h1 className="text-3xl lg:text-6xl font-medium py-8">
            Talep Bulunamadi.
          </h1>
          <p className="text-1xl pb-8 px-12 font-medium">
            Talep tamamlanmiş veya iptal edilmiş olabilir.
          </p>
          <div className="flex flex-col md:flex-row gap-2 justify-center items-center">
            <Link
              to="/"
              className="bg-black text-white font-semibold px-6 py-3 rounded-md mr-6"
            >
              Anasayfa
            </Link>
            <Link
              to="/yardim-talebim-var"
              className=" bg-black text-white font-semibold px-6 py-3 rounded-md"
            >
              Yardim Talebi oluştur
            </Link>
          </div>
        </div>
      )}

      <Modal
        title=""
        isOpen={isOpen}
        setIsOpen={setIsOpen}
      >
        <div className="flex justify-center flex-col items-center">
          <CheckIcon className=" w-24 h-24 bg-green-500 text-white rounded-full " />
          <p className="font-bold pt-4 text-center">
            Anasayfaya yönlendiriliyorsunuz. Teşekkürler
          </p>
        </div>
      </Modal>
    </Layout>
  );
};

export default Case;
