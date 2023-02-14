import { Link, useNavigate } from 'react-router-dom';

import Button from '@/components/formElements/button';

import GriefIcon from '../../../assets/grief.svg';
import Logo from '../../../assets/logo.png';

const Header = () => {
  const navigate = useNavigate();

  const goToLinks = () => {
    navigate('/yararli-linkler');
  };

  return (
    <header>
      <div className="flex justify-between items-center h-14 px-4 text-base">
        <div className="text-s sm:text-3xl flex items-center gap-2">
          <Link to="/">
            <img
              className="h-[24px]"
              src={Logo}
              alt="Yardımyeri.com"
            />
          </Link>
          <img
            src={GriefIcon}
            alt="Grief"
            width={22}
            height={22}
          />
        </div>
        <div>
          <Button
            size="small"
            label="Yararlı Linkler"
            onClick={goToLinks}
          />
        </div>
      </div>
      <div className="flex justify-center items-center bg-[#fff3cd] text-[#664d03] h-14 text-sm font-normal text-center">
        Bu bir sosyal sorumluluk projesidir. Bilgileriniz KVKK güvencesiyle
        saklanmaktadır.
      </div>
    </header>
  );
};

export default Header;
