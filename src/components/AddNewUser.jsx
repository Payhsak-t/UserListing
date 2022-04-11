import { useState } from 'react';
import styles from './AddNewUser.module.css';

const AddNewUser = () => {
  const [username, setUsername] = useState('');
  const [age, setAge] = useState(null);

  //Get username
  const getUsernameHandler = (event) => {
    setUsername(event.target.value);
  };
  //Get user age
  const getUserAgeHandler = (event) => {
    setAge(event.target.value);
  };
  //Submit form
  const submitUserHandler = (event) => {
    event.preventDefault();
    const newUser = { uname: { username }, uage: { age } };
    console.log(newUser);
  };

  return (
    <form onSubmit={submitUserHandler}>
      <div className={`${styles['form-control']}`}>
        <label>Username</label>
        <input type="text" onChange={getUsernameHandler} />
        <label>Age</label>
        <input type="number" onChange={getUserAgeHandler} />
      </div>
      <button type="submit">Add User</button>
    </form>
  );
};

export default AddNewUser;
