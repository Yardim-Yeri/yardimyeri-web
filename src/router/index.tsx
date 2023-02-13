import { lazy } from 'react';

import Error404 from '../pages/Error404';

const LazyHomePage = lazy(() => import('../pages/HomePage'));
const LazyRequestHelp = lazy(() => import('../pages/RequestHelp'));
const LazyNeedHelp = lazy(() => import('../pages/NeedHelp'));
const LazyHelpFullLinks = lazy(() => import('../pages/HelpFullLinks'));
const LazyHelpDetail = lazy(() => import('../pages/HelpDetail'));
const LazyCaseDetail = lazy(() => import('../pages/Case'));

export default [
  {
    path: '/',
    element: <LazyHomePage />,
  },
  {
    path: '/yardim-talebim-var',
    element: <LazyRequestHelp />,
  },
  {
    path: '/yardimda-bulunabilirim',
    element: <LazyNeedHelp />,
  },
  {
    path: '/yardimda-bulunabilirim/:id',
    element: <LazyHelpDetail />,
  },
  {
    path: '/yararli-linkler',
    element: <LazyHelpFullLinks />,
  },
  {
    path: '/yardim',
    element: <LazyCaseDetail />,
  },
  {
    path: '*',
    element: <Error404 />,
  },
];
