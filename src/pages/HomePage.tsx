import { Link } from 'react-router-dom';
import Layout from '../components/shared/Layout';

const HomePage = () => (
  <Layout>
    <div className="flex justify-center items-center flex-col gap-7">
      <p className="text-lg sm:text-4xl font-bold w-3/4 text-center leading-relaxed">
        İHTİYAÇLARINIZ İÇİN <br /> YARDIM TALEP EDEBİLİR YADA YARDIM
        EDEBİLİRSİNİZ
      </p>
    </div>
    <div className="flex flex-col mt-24 items-center gap-4">
      <p className="text-base sm:text-2xl  w-3/4 text-center leading-relaxed">
        NE YAPMAK İSTEDİĞİNİZİ SEÇİN
      </p>
      <Link
        to="/"
        className="bg-black w-3/4 text-white p-6 rounded-full text-center text-sm sm:text-3xl"
      >
        YARDIM TALEBİM VAR
      </Link>
      <Link
        to="/"
        className="bg-black w-3/4 text-white p-6 rounded-full text-center text-sm sm:text-3xl"
      >
        YARDIMDA BULUNABİLİRİM
      </Link>
    </div>
  </Layout>
);

export default HomePage;
