import Layout from '@demo/components/Layout';
import PageHome from '@demo/pages/PageHome';
import PageLayout from '@demo/pages/PageLayout';
import PageTypography from '@demo/pages/PageTypography';
import { RouteObject } from 'react-router-dom';

const routeConfig: RouteObject[] = [
  {
    path: '/',
    children: [
      {
        // Layout路由，没有path
        element: <Layout />,
        children: [
          {
            index: true,
            element: <PageHome />,
          },
          {
            path: 'typography',
            element: <PageTypography />,
          },
          {
            path: 'layout',
            element: <PageLayout />,
          },
        ],
      },
    ],
  },
];
export default routeConfig;
