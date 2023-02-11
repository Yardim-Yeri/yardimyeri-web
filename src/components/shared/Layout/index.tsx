import { ReactNode } from 'react';
import Footer from '../Footer';
import Header from '../Header';

interface ILayout {
  children: ReactNode;
  formLayout?: boolean;
}
const Layout = ({ children, formLayout = false }: ILayout) => {
  const isFormLayout = formLayout ? ' w-1/2' : '';

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
