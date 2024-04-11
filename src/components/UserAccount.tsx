import { FC } from 'react';
import { User } from '../types';

type Props = {
  user: User;
};
const UserAccount: FC<Props> = ({ user }) => {
  return (
    <>
      <h2>User Profile</h2>
      {user.isAdmin && <button>Edit</button>}
      <div>
        <strong>Name:</strong> {user.name}
      </div>
    </>
  );
};

export default UserAccount;
