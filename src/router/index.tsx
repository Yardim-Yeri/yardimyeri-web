import { lazy } from 'react';
import Error404 from '@pages/error404';

const LazyRequestHelp = lazy(() => import('@pages/requestHelp'));
const LazyNeedHelp = lazy(() => import('@pages/needHelp'));

export default [
  {
    path: '/request-help',
    element: <LazyRequestHelp />,
  },
  {
    path: 'need-help',
    element: <LazyNeedHelp />,
  },
  {
    path: '*',
    element: <Error404 />,
  },
];
