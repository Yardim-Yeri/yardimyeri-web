import { Link } from 'react-router-dom';

const Header = () => (
  <header>
    <div className="flex justify-between items-center h-14 px-4 text-base">
      <div className="text-s sm:text-3xl">
        <Link
          to="/"
          className="logo font-semibold"
        >
          YARDIMYERI.COM
        </Link>
      </div>
      <div>
        <Link
          to="/yararli-linkler"
          className="underline"
        >
          Yararlı Linkler
        </Link>
      </div>
    </div>
    <div className="flex justify-center items-center bg-[#fff3cd] text-[#664d03] h-14 text-sm font-normal text-center">
      Bu bir sosyal sorumluluk projesidir. Bilgileriniz KVKK güvencesiyle
      saklanmaktadır.
    </div>
  </header>
);

export default Header;
