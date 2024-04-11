import { FC } from 'react';
import { User } from '../types';

type Props = {
  users: User[];
};

const UserList: FC<Props> = ({ users }) => {
  if (users.length === 0) return <p>No users available.</p>;

  return (
    <ul>
      {users.map(user => (
        <li key={user.id}>
          <a href={`/users/${user.id}`}>{user.name}</a>
        </li>
      ))}
    </ul>
  );
};

export default UserList;
