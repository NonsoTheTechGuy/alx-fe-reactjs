import React, { useContext } from 'react';
import UserContext from './UserContext';
// import UserDetails from './UserDetails';

function UserInfo() {
  const userData = useContext(UserContext);

  return (
    <div>
      <span>{userData.name}</span>
      <span>{userData.email}</span>
    </div>
  );
}

export default UserInfo;