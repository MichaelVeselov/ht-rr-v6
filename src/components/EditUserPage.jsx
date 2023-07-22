import { Link, useParams } from 'react-router-dom';

export const EditUserPage = () => {
  const { userId } = useParams();
  const nextUserId = userId > 3 ? 0 : Number(userId) + 1;

  return (
    <div>
      <h2>Edit User Page</h2>

      <ul>
        <li>
          <Link to={`/users/${userId}/profile`}>User Profile Page</Link>
        </li>
        <li>
          <Link to={`/users/${nextUserId}/profile`}>Another User Page</Link>
        </li>
        <li>
          <Link to='/users'>User List Page</Link>
        </li>
      </ul>
    </div>
  );
};
