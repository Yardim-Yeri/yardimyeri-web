import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import Layout from '../components/shared/Layout';

const HomePage = () => (
  <Layout>
    <Helmet>
      <title>Yardımyeri.com</title>
    </Helmet>
    <div className="flex justify-center items-center flex-col gap-7">
      <h1 className="text-lg sm:text-4xl font-bold w-3/4 text-center leading-relaxed">
        İHTİYAÇLARINIZ İÇİN <br /> YARDIM TALEP EDEBİLİR YADA YARDIM
        EDEBİLİRSİNİZ
      </h1>
    </div>
    <div className="flex flex-col mt-24 items-center gap-4">
      <p className="text-base sm:text-2xl  w-3/4 text-center leading-relaxed">
        NE YAPMAK İSTEDİĞİNİZİ SEÇİN
      </p>
      <Link
        to="/yardim-talebim-var"
        className="bg-black w-3/4 text-white p-6 rounded-full text-center text-sm sm:text-3xl"
      >
        YARDIM TALEBİM VAR
      </Link>
      <Link
        to="/yardimda-bulunabilirim"
        className="bg-black w-3/4 text-white p-6 rounded-full text-center text-sm sm:text-3xl"
      >
        YARDIMDA BULUNABİLİRİM
      </Link>
    </div>
  </Layout>
);

export default HomePage;
