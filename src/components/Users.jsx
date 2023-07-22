import { Link, Outlet } from 'react-router-dom';

export const Users = () => {
  return (
    <div>
      <h3>Users Layout</h3>

      <p>
        <Link to='/'>Main page</Link>
      </p>

      <Outlet />
    </div>
  );
};
