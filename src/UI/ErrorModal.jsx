import Card from './Card';
import Button from './Button';
import ReactDOM from 'react-dom';
import styles from './ErrorModal.module.css';
import React from 'react';

//Creating Backdrop component
const Backdrop = (props) => {
  return <div className={styles.backdrop} onClick={props.onClose} />;
};

//Creating Modal Component
const ModalOverlay = (props) => {
  return (
    <Card className={styles.modal}>
      <header className={styles.header}>
        <h2>{props.title}</h2>
      </header>
      <div className={styles.content}>
        <p>{props.message}</p>
      </div>
      <footer className={styles.actions}>
        <Button onClick={props.onClose}>Okay</Button>
      </footer>
    </Card>
  );
};

const ErrorModal = (props) => {
  return (
    <React.Fragment>
      {ReactDOM.createPortal(
        <Backdrop onClose={props.onClose} />,
        document.getElementById('backdrop-root')
      )}

      {ReactDOM.createPortal(
        <ModalOverlay
          onClose={props.onClose}
          title={props.title}
          message={props.message}
        />,
        document.getElementById('overlay-root')
      )}
    </React.Fragment>
  );
};

export default ErrorModal;
