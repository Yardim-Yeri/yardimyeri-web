import { useQuery } from 'react-query';
import { getAll } from './api';

const App = () => {
  const { data, isError, isLoading, error, isSuccess } = useQuery(
    'category',
    getAll,
  );

  console.log({
    data,
    isError,
    isLoading,
    error,
    isSuccess,
  });

  return <div>yardim yeri</div>;
};

export default App;
