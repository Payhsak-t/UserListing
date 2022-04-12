import { useState } from 'react';
import Button from '../UI/Button';
import Card from '../UI/Card';
import ErrorModal from '../UI/ErrorModal';
import styles from './AddNewUser.module.css';

const AddNewUser = (props) => {
  const [username, setUsername] = useState('');
  const [age, setAge] = useState('');
  const [error, setError] = useState();

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
    if (username.trim().length === 0 || age.trim().length === 0) {
      setError({
        title: 'Invalid input',
        message: 'Please enter a valid name and age (non-empty values)',
      });
      return;
    }
    if (+age < 0) {
      setError({
        title: 'Invalid age',
        message: 'Please enter a valid age (non-negative value)',
      });
      return;
    }

    const newUser = { uname: username, uage: age };
    props.onAddUser(newUser);
    setUsername('');
    setAge('');
  };

  const errorModalHandler = () => {
    setError(null);
  };

  return (
    <>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onClose={errorModalHandler}
        />
      )}
      <Card className={styles.input}>
        <form onSubmit={submitUserHandler}>
          <label htmlFor="username">Username</label>
          <input
            name="username"
            value={username}
            type="text"
            onChange={getUsernameHandler}
          />
          <label htmlFor="age">Age</label>
          <input
            name="age"
            type="number"
            value={age}
            onChange={getUserAgeHandler}
          />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </>
  );
};

export default AddNewUser;
