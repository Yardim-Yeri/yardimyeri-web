import { useState } from 'react';
import { Helmet } from 'react-helmet';
import { useQuery } from 'react-query';
import { useNavigate } from 'react-router-dom';

import Badge from '@/components/Badge';
import HelpCard from '@/components/HelpCard';
import HelpFilter, {
  IDefaultFilterData,
  defaultFilterData,
} from '@/components/HelpFilter/HelpFilter';
import Loader from '@/components/Loader';
import Button from '@/components/formElements/button';
import Layout from '@/components/shared/Layout';
import PageTitle from '@/components/shared/PageTitle';
import Pagination from '@/components/shared/Pagination';

import { getHelps } from '@/api/Help';
import { IHelpListResponse } from '@/models/HelpList';

const HelpList = () => {
  const [queryParams, setQueryParams] =
    useState<IDefaultFilterData>(defaultFilterData);

  const [filterData, setFilterData] =
    useState<IDefaultFilterData>(defaultFilterData);

  const navigate = useNavigate();
  const [page, setPage] = useState<number>(1);

  const { data: helpList, isLoading } = useQuery<IHelpListResponse>(
    [
      'help',
      page,
      queryParams.ihtiyac_turu?.name,
      queryParams.sehir?.name,
      queryParams.help_status?.name,
      queryParams?.kac_kisilik,
      queryParams.order_direction?.key,
    ],
    getHelps,
  );

  const handlePageClick = (selectedPage: number) => {
    setPage(selectedPage);
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

  const goToDetail = (id: number) => {
    navigate(`/yardimda-bulunabilirim/${id}`);
  };

  const handleFilterSubmit = (data: IDefaultFilterData) => {
    setQueryParams(data);
  };

  const handleFilterReset = () => {
    setQueryParams(defaultFilterData);
  };

  return (
    <Layout>
      <Helmet>
        <title>Yardımyeri.com - Yardımda bulunabilirim</title>
      </Helmet>
      {isLoading && <Loader />}

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
          <div className="flex justify-end mt-5">
            <HelpFilter
              filterData={filterData}
              setFilterData={setFilterData}
              handleFilterSubmit={handleFilterSubmit}
              handleFilterReset={handleFilterReset}
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
                  <div className="lg:grid grid-cols-3 xl:grid-cols-[300px_minmax(500px,_1fr)_150px] flex-auto">
                    <div className="m-2">
                      <p className="font-bold">İsim</p>
                      <p>{name}</p>
                    </div>
                    <div className="m-2">
                      <p className="font-bold">Şehir</p>
                      <p className="overflow-hidden whitespace-nowrap text-ellipsis max-w-xl">
                        {address}
                      </p>
                    </div>

                    <div className="m-2">
                      <p className="font-bold">Talep Tarihi</p>
                      <p>{created_at}</p>
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
                    <Badge
                      label={status}
                      type={checkHelpType(status)}
                    />
                    <Button
                      size="small"
                      label="Detaylar"
                      onClick={() => goToDetail(id)}
                    />
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

export default HelpList;
