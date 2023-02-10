import { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';

import './App.css';
import Loader from '@components/Loader';
import routes from './router';

const queryClient = new QueryClient();
const router = createBrowserRouter(routes);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <QueryClientProvider client={queryClient}>
    <Suspense fallback={<Loader />}>
      <RouterProvider router={router} />
    </Suspense>
  </QueryClientProvider>,
);
