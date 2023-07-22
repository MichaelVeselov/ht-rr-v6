import { Link, useParams } from 'react-router-dom';

export const SingleUserPage = () => {
  const { userId } = useParams();

  return (
    <div>
      <h3>Single User Page</h3>

      <ul>
        <li>
          <Link to='/users'>User List Page</Link>
        </li>
        <li>
          <Link to={`/users/${userId}/edit`}>Edit this User</Link>
        </li>
      </ul>

      <p>{`UserId: ${userId}`}</p>
    </div>
  );
};
