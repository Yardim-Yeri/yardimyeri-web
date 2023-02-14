import { useNavigate } from 'react-router-dom';

import Button from '@/components/formElements/button';
import Layout from '@/components/shared/Layout';

const Error404 = () => {
  const navigate = useNavigate();
  const goToHome = () => {
    navigate('/');
  };

  return (
    <Layout formLayout>
      <div className="flex flex-col items-center gap-8 py-12 lg:py-36">
        <div className="text-center">
          <h1 className="font-bold text-7xl my-4">404</h1>
          <p>Aradığınız sayfa bulunamadı!</p>
        </div>
        <Button
          label="Anasayfa"
          onClick={goToHome}
        />
      </div>
    </Layout>
  );
};

export default Error404;
