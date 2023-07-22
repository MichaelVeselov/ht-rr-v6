import { Navigate } from 'react-router-dom';

import { Layout } from './components/Layout';
import { MainPage } from './components/MainPage';
import { Users } from './components/Users';
import { UserListPage } from './components/UserListPage';
import { SingleUserPage } from './components/SingleUserPage';
import { EditUserPage } from './components/EditUserPage';

export const routes = () => [
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <MainPage />,
      },
      {
        path: 'users',
        element: <Users />,
        children: [
          {
            index: true,
            element: <UserListPage />,
          },
          {
            path: ':userId',
            children: [
              { path: 'profile', element: <SingleUserPage /> },
              { path: 'edit', element: <EditUserPage /> },
            ],
          },
        ],
      },
      { path: '*', element: <Navigate to='/' /> },
    ],
  },
];
