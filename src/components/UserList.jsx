import Card from '../UI/Card';
import User from './User';
import styles from './UserList.module.css';

const UserList = (props) => {
  return (
    <Card className={styles.users}>
      <ul>
        {props.userData.map((user) => (
          <User key={user.id} id={user.id}>
            {user.uname} ({user.uage} years old)
          </User>
        ))}
      </ul>
    </Card>
  );
};

export default UserList;
