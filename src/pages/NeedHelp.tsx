import moment from 'moment';
import { useState } from 'react';
import { Helmet } from 'react-helmet';
import { useQuery } from 'react-query';
import { Link } from 'react-router-dom';

import HelpCard from '@/components/HelpCard';
import Layout from '@/components/shared/Layout';
import PageTitle from '@/components/shared/PageTitle';
import Pagination from '@/components/shared/Pagination';

import { getHelps } from '@/api/Help';
import { IHelpListResponse } from '@/models/HelpList';

const NeedHelp = () => {
  const [page, setPage] = useState<number>(1);

  const { data: helpList, isLoading } = useQuery<IHelpListResponse>(
    ['help', page],
    getHelps,
  );

  const handlePageClick = (selectedPage: number) => {
    setPage(selectedPage);
  };

  return (
    <Layout>
      <Helmet>
        <title>Yardımyeri.com - Yardımda bulunabilirim</title>
      </Helmet>
      <PageTitle title="YARDIMA İHTİYACI OLANLAR" />
      {!isLoading && (
        <>
          <div className="flex flex-col md:flex-row gap-4">
            <HelpCard
              text="Yardım Ulaştırılan Kişi Sayısı"
              count={helpList?.success_help_count}
              color="green"
            />

            <HelpCard
              text="Yardım Bekleyen Kişi Sayısı"
              count={helpList?.pending_help_count}
              color="yellow"
            />
            <HelpCard
              text="Yardım Ulaştırılacak Kişi Sayısı"
              count={helpList?.process_help_count}
              color="blue"
            />
          </div>
          <div className="mt-6">
            {helpList?.data.map((item) => {
              const {
                id,
                name,
                address,
                how_many_person,
                status,
                need,
                created_at,
              } = item;

              return (
                <div
                  className="flex flex-col md:flex-row border shadow-md p-4 rounded-md"
                  key={item.id}
                >
                  <div className="ggrid-cols-2 lg:grid rid-cols-3 xl:grid-cols-[300px_minmax(500px,_1fr)_150px]  flex-auto">
                    <div className="m-2">
                      <p className="font-bold">İsim</p>
                      <p>{name}</p>
                    </div>
                    <div className="m-2">
                      <p className="font-bold">Şehir</p>
                      <p>{address}</p>
                    </div>

                    <div className="m-2">
                      <p className="font-bold">Talep Tarihi</p>
                      <p>{moment(created_at).format('DD.MM.YYYY HH:MM')}</p>
                    </div>
                    <div className="m-2">
                      <p className="font-bold">Kaç Kişilik</p>
                      <p>{how_many_person}</p>
                    </div>
                    <div className="m-2">
                      <p className="font-bold">İhtiyaç Türü</p>
                      <p>{need.type}</p>
                    </div>
                    <div className="m-2">
                      <p className="font-bold">Sana Uzaklığı</p>
                      <p>-</p> {/* TODO: sana olan uzaklik hesaplanica */}
                    </div>
                  </div>
                  <div className="flex gap-2 justify-end sm:justify-center items-center">
                    <p className="bg-yellow-500 p-2 rounded-md text-white">
                      {status}
                    </p>
                    <Link
                      to={`/yardimda-bulunabilirim/${id}`}
                      className="p-2 bg-blue-500 rounded-md text-white"
                    >
                      Detaylar
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
          <Pagination
            pageCount={helpList?.meta?.last_page}
            handlePageClick={handlePageClick}
            page={page}
          />
        </>
      )}
    </Layout>
  );
};

export default NeedHelp;
