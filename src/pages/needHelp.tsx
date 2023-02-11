import { Link } from 'react-router-dom';
import PageTitle from '../components/shared/PageTitle';
import Layout from '../components/shared/Layout';
import HelpCard from '../components/helpCard/HelpCard';

const NeedHelp = () => (
  <Layout>
    <PageTitle title="YARDIMA İHTİYACI OLANLAR" />
    <div className="flex flex-col md:flex-row gap-4">
      <HelpCard
        text="Ulaştırılan Yardım Sayısı"
        count={22}
        color="green"
      />
      <HelpCard
        text="Bekleyen Yardım Sayısı"
        count={22}
        color="yellow"
      />
      <HelpCard
        text="Ulaştırılmakta Olan Yardım Sayısı"
        count={22}
        color="blue"
      />
    </div>
    <div className="mt-6">
      <div className="flex flex-col md:flex-row border shadow-md p-4 rounded-md">
        <div className="grid grid-cols-2 lg:grid-cols-4 xl:grid-cols-6 flex-auto">
          <div className="m-2">
            <p className="font-bold">İSİM</p>
            <p>sercan</p>
          </div>
          <div className="m-2">
            <p className="font-bold">ŞEHİR</p>
            <p>GAZİANTEP</p>
          </div>
          <div className="m-2">
            <p className="font-bold">SANA UZAKLIĞI</p>
            <p>2323232</p>
          </div>
          <div className="m-2">
            <p className="font-bold">İHTİYAÇ TÜRÜ</p>
            <p>Barınma</p>
          </div>
          <div className="m-2">
            <p className="font-bold">KAÇ KİŞİLİK</p>
            <p>20</p>
          </div>
          <div className="m-2">
            <p className="font-bold">TALEP TARİHİ</p>
            <p>10-02-2023 23:22</p>
          </div>
        </div>
        <div className="flex gap-2 justify-end sm:justify-center items-center">
          <p className="bg-yellow-500 p-2 rounded-md text-white">
            Yardim Bekliyor
          </p>
          <Link
            to="/need-help/2323" // TODO
            className="p-2 bg-blue-500 rounded-md text-white"
          >
            Detaylar
          </Link>
        </div>
      </div>
    </div>
  </Layout>
);

export default NeedHelp;
