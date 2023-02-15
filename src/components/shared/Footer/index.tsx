import { Link } from 'react-router-dom';

const Footer = () => (
  <footer className="h-14 flex flex-col justify-center items-centergap-4 text-sm p-4 mt-6">
    <div className="flex flex-col justify-center gap-2 md:flex-row md:gap-8 mb-8 font-bold">
      <div className="flex justify-center">
        <Link to="/kvkk">Aydınlatma Metni</Link>
      </div>
      <div className="flex justify-center">
        <Link to="/gizlilik-sozlesmesi">Gizlilik Politikasi</Link>
      </div>
    </div>
    <div className="flex justify-center">
      Geri Bildirim:
      <a
        href="mailto:yardimyeri.info@gmail.com"
        target="_blank"
        rel="noreferrer"
        className="underline text-[#0d6efd]"
      >
        Mail Gönder
      </a>
    </div>
    <div className="flex justify-center">© 2023 YARDIMYERİ.COM</div>
  </footer>
);

export default Footer;
