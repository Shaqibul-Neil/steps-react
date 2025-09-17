import { use } from 'react';
import User from './User';
const Users = ({ userPromise }) => {
  const users = use(userPromise);
  //console.log(users);

  return (
    <div className="usersContainer">
      {users.map(user => (
        <User user={user} key={user.id} />
      ))}
    </div>
  );
};

export default Users;
