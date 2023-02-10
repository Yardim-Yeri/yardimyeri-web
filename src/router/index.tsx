import { lazy } from 'react';

import Error404 from '../pages/error404';

const LazyHomePage = lazy(() => import('../pages/HomePage'));
const LazyRequestHelp = lazy(() => import('../pages/requestHelp'));
const LazyNeedHelp = lazy(() => import('../pages/needHelp'));
const LazyHelpFullLinks = lazy(() => import('../pages/HelpFullLinks'));

export default [
  {
    path: '/',
    element: <LazyHomePage />,
  },
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
