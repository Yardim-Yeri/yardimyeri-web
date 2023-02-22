import { CheckIcon } from '@heroicons/react/24/solid';
import { AxiosError } from 'axios';
import { useEffect, useState } from 'react';
import { toast } from 'react-hot-toast';
import { useQuery } from 'react-query';
import { Link, useNavigate, useSearchParams } from 'react-router-dom';

import Badge from '@/components/Badge';
import HelpDetailContent from '@/components/HelpDetailContent';
import Loader from '@/components/Loader';
import Button from '@/components/formElements/button';
import Layout from '@/components/shared/Layout';
import Message, { MessageType } from '@/components/shared/Message';
import Modal from '@/components/shared/Modal';
import PageTitle from '@/components/shared/PageTitle';

import { IHelpListItem } from '../models/HelpList';

import { getCancelCase, getCase, getFinishCase } from '@/api/Case';

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
    {
      enabled: !!id,
    },
  );

  const successAction = () => {
    setIsOpen(true);
    setTimeout(() => {
      navigate('/');
    }, 3000);
  };

  const checkHelpType = (status: string) => {
    switch (status) {
      case 'Yardım Bekliyor':
        return 'error';
      case 'Yardım Geliyor':
        return 'info';
      case 'Yardım Ulaştı':
        return 'success';
      default:
        return 'default';
    }
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

  useEffect(() => {
    if (!id) {
      navigate('/');
    }
  }, [id, navigate]);

  return (
    <Layout>
      {isLoading && <Loader />}

      {!isLoading && data ? (
        <>
          <div className="flex items-center justify-between mb-4">
            <PageTitle title="Yardım Talebi Detayı" />
            <div>
              <Badge
                label={data.status}
                type={checkHelpType(data.status)}
              />
            </div>
          </div>

          <Message
            type={MessageType.INFO}
            text="Gelecekte bu sayfayı kullanarak yarınızı tamamlayabilir veya iptal edebilirsiniz."
          />

          <HelpDetailContent
            isPhone
            data={data}
          />
          <div className="flex justify-center gap-2 mt-6">
            <Button
              label="Yardımı iptal et"
              onClick={cancelCase.refetch}
              type="error"
            />
            <Button
              label="Yardımı tamamla"
              onClick={finishCase.refetch}
              type="success"
            />
          </div>
        </>
      ) : (
        <div className="border-t border-gray-200 text-center pt-8">
          <h1 className="text-8xl lg:text-9xl font-bold text-black">404</h1>
          <h3 className="text-3xl lg:text-6xl font-medium py-8">
            Talep Bulunamadı.
          </h3>
          <p className="text-1xl pb-8 px-12 font-medium">
            Talep tamamlanmış veya iptal edilmiş olabilir.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
            <Link
              to="/"
              className="bg-black text-white font-semibold px-6 py-3 rounded-md"
            >
              Anasayfa
            </Link>
            <Link
              to="https://deprem.ahbap.org"
              className=" bg-black text-white font-semibold px-6 py-3 rounded-md"
            >
              Yardım talebi oluştur
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
