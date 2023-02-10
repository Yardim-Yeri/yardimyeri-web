import { ReactNode } from 'react';
import Footer from '../Footer';
import Header from '../Header';

const Layout = ({ children }: { children: ReactNode }) => (
  <main className="flex flex-col min-h-screen ">
    <Header />
    <main className="container mx-auto flex-grow py-4">{children}</main>
    <Footer />
  </main>
);

export default Layout;
