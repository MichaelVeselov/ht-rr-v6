import { Link, Outlet } from 'react-router-dom';

export const Layout = () => {
  return (
    <div className='App'>
      <h1>App Layout</h1>
      <Link to='/users'>Users List Page</Link>
      <Outlet />
    </div>
  );
};
