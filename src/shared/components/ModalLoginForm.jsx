import React from 'react';
import PropTypes from 'prop-types';
import {
  Modal, ModalHeader, ModalBody, Button,
} from 'reactstrap';
import GooglePlusIcon from 'mdi-react/GooglePlusIcon';
import FacebookIcon from 'mdi-react/FacebookIcon';
import LogInForm from './loginForm/LogInForm';
import { providers } from './auth/AbstractProvider';

const ModalLoginForm = ({
  title, isOpen, error, closeModal, onLogin,
}) => (
  <Modal toggle={closeModal} className="theme-light ltr-support login-modal-form" isOpen={isOpen}>
    <ModalHeader>{title}</ModalHeader>
    <ModalBody>
      <LogInForm
        onSubmit={onLogin(providers.LOCAL)}
        errorMessage={error}
        form="modal_login"
        fieldUser="E-mail"
        typeFieldUser="email"
      />
      <div className="account__or">
        <p>Or Easily Using</p>
      </div>
      <div className="account__social">
        <Button
          className="account__social-btn account__social-btn--facebook"
          type="button"
          onClick={onLogin(providers.FACEBOOK)}
        >
          <FacebookIcon />
        </Button>
        <Button
          className="account__social-btn account__social-btn--google"
          type="button"
          onClick={onLogin(providers.GOOGLE)}
        >
          <GooglePlusIcon />
        </Button>
      </div>
    </ModalBody>
  </Modal>
);

ModalLoginForm.propTypes = {
  title: PropTypes.string,
  error: PropTypes.string,
  isOpen: PropTypes.bool,
  closeModal: PropTypes.func.isRequired,
  onLogin: PropTypes.func,
};

ModalLoginForm.defaultProps = {
  title: '',
  error: '',
  isOpen: false,
  onLogin: () => () => {},
};

export default ModalLoginForm;
