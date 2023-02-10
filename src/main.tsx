import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';

import YardimBulabilirim from './pages/YardimdaBulabilirim';
import YararliLinkler from './pages/YararliLinkler';

import './App.css';

const queryClient = new QueryClient();
const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <div>
        <h1>Hello World</h1>
      </div>
    ),
  },
  {
    path: '/yardimda-bulunabilirim',
    element: <YardimBulabilirim />,
  },
  {
    path: '/yararli-linkler',
    element: <YararliLinkler />,
  },
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <QueryClientProvider client={queryClient}>
    <RouterProvider router={router} />
  </QueryClientProvider>,
);
