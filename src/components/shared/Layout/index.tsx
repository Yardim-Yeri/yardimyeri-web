import { ReactNode, useCallback, useEffect } from 'react';
import { useGeolocationReducer } from '@/context/geolocation.context';
import Footer from '../Footer';
import Header from '../Header';

interface ILayout {
  children: ReactNode;
  formLayout?: boolean;
}

const Layout = ({ children, formLayout = false }: ILayout) => {
  const isFormLayout = formLayout ? 'lg:w-1/2' : '';
  const [, dispatchGeoContext] = useGeolocationReducer();

  const getLocation = useCallback(() => {
    const { geolocation } = navigator;
    geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        dispatchGeoContext({
          type: 'GET_LOCATION',
          payload: { lat: latitude, lng: longitude },
        });
      },
      () => {
        dispatchGeoContext({ type: 'REJECT_LOCATION' });
      },
    );
  }, [dispatchGeoContext]);

  useEffect(() => {
    getLocation();
  }, [getLocation]);

  return (
    <main className="flex flex-col min-h-screen ">
      <Header />
      <main className={`container ${isFormLayout} mx-auto flex-grow p-2`}>
        {children}
      </main>
      <Footer />
    </main>
  );
};

export default Layout;
