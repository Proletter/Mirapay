import React from 'react';
import PropTypes from 'prop-types';
import {
  Modal, ModalHeader, ModalBody, Button,
} from 'reactstrap';
import GooglePlusIcon from 'mdi-react/GooglePlusIcon';
import FacebookIcon from 'mdi-react/FacebookIcon';
import LogInForm from './ModalCreateAccount/ModalContainer';
// import { providers } from './auth/AbstractProvider';

const ModalCreateAccountForm = ({
  title, isOpen, error, closeModal, onLogin,
}) => (
  <Modal toggle={closeModal} className="theme-light ltr-support login-modal-form" isOpen={isOpen}>
    <ModalHeader>{title}</ModalHeader>
    <ModalBody>
      <LogInForm
    
        errorMessage={error}
        form="modal_login"
        fieldUser="E-mail"
        typeFieldUser="email"
      />
      
    </ModalBody>
  </Modal>
);

ModalCreateAccountForm.propTypes = {
  title: PropTypes.string,
  error: PropTypes.string,
  isOpen: PropTypes.bool,
  closeModal: PropTypes.func.isRequired,
  onLogin: PropTypes.func,
};

ModalCreateAccountForm.defaultProps = {
  title: '',
  error: '',
  isOpen: false,
  onLogin: () => () => {},
};

export default ModalCreateAccountForm;
