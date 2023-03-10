import { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import { Toaster } from 'react-hot-toast';
import { QueryClient, QueryClientProvider } from 'react-query';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import './App.css';
import Loader from './components/Loader';
import { GeolocationContextProvider } from './context/Geolocation';
import { LocationContextProvider } from './context/Location';
import routes from './router';

const queryClient = new QueryClient();
const router = createBrowserRouter(routes);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <QueryClientProvider client={queryClient}>
    <GeolocationContextProvider>
      <LocationContextProvider>
        <Suspense fallback={<Loader />}>
          <RouterProvider router={router} />
          <Toaster position="bottom-right" />
        </Suspense>
      </LocationContextProvider>
    </GeolocationContextProvider>
  </QueryClientProvider>,
);
