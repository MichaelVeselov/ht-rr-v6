import { Link } from 'react-router-dom';

const userData = [
  {
    id: 0,
    name: 'User 0',
  },
  {
    id: 1,
    name: 'User 1',
  },
  {
    id: 2,
    name: 'User 2',
  },
  {
    id: 3,
    name: 'User 3',
  },
  {
    id: 4,
    name: 'User 4',
  },
];

export const UserListPage = () => {
  return (
    <div>
      <h3>User List Page</h3>

      <ul>
        {userData.map((user) => {
          return (
            <li key={user.id}>
              <Link to={`/users/${user.id}/profile`}>{user.name}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
