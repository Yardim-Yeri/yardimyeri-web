import { lazy } from 'react';

import Error404 from '../pages/error404';

const LazyRequestHelp = lazy(() => import('../pages/requestHelp'));
const LazyNeedHelp = lazy(() => import('../pages/needHelp'));
const LazyHelpFullLinks = lazy(() => import('../pages/HelpFullLinks'));

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
    path: '/yararli-linkler',
    element: <LazyHelpFullLinks />,
  },
  {
    path: '*',
    element: <Error404 />,
  },
];
