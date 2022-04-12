import Card from '../UI/Card';
import styles from './User.module.css';

const User = (props) => {
  return <li className={styles.li}>{props.children}</li>;
};

export default User;
