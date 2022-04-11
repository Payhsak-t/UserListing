import React from 'react';
import AddNewUser from './components/AddNewUser';

function App() {
  const newUserHandler = (user) => {
    console.log(user);
  };
  return (
    <div>
      <AddNewUser onAddUser={newUserHandler} />
    </div>
  );
}

export default App;
