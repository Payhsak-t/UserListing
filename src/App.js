import React, { useState } from 'react';
import AddNewUser from './components/AddNewUser';
import UserList from './components/UserList';

function App() {
  const [users, setUsers] = useState([]);

  const newUserHandler = (user) => {
    setUsers((previousState) => {
      const updatedUser = [...previousState];
      updatedUser.push({ ...user, id: Math.random().toString() });
      return updatedUser;
    });
  };

  return (
    <div>
      <AddNewUser onAddUser={newUserHandler} />
      {users.length > 0 && <UserList userData={users} />}
    </div>
  );
}

export default App;
