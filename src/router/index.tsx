import { lazy } from 'react';

import Error404 from '../pages/Error404';

const LazyHomePage = lazy(() => import('../pages/HomePage'));
const LazyRequestHelp = lazy(() => import('../pages/RequestHelp'));
const LazyHelpList = lazy(() => import('../pages/HelpList'));
const LazyHelpFullLinks = lazy(() => import('../pages/HelpFullLinks'));
const LazyHelpDetail = lazy(() => import('../pages/HelpDetail'));
const LazyCaseDetail = lazy(() => import('../pages/Case'));
const LazyGdpr = lazy(() => import('../pages/Gdpr'));
const LazyNda = lazy(() => import('../pages/Nda'));

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
    element: <LazyHelpList />,
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
    path: '/kvkk',
    element: <LazyGdpr />,
  },
  {
    path: '/gizlilik-sozlesmesi',
    element: <LazyNda />,
  },
  {
    path: '*',
    element: <Error404 />,
  },
];
