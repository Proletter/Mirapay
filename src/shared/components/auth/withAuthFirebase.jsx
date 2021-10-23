import React, { useState } from 'react';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { auth } from '@/redux/actions/authActions';
import ModalLoginForm from '../ModalLoginForm';
import { AbstractProvider } from './AbstractProvider';

const withAuthFirebase = (WrappedComponent) => {
  const HocAuth = (props) => {
    const { history, auth: login } = props;
    const [error, setError] = useState('');
    const [isOpen, setIsOpen] = useState(false);

    const closeModal = () => {
      setError('');
      setIsOpen(false);
    };

    const openModal = () => {
      setIsOpen(true);
      setError('');
    };

    const onLogin = (providerName = 'local') => async (userProps) => {
      setError('');
      try {
        const provider = new AbstractProvider(providerName);
        const res = await provider.login(userProps);
        login(provider.getUserObjectByProvider(res));
        history.push('/app_dashboard');
      } catch (e) {
        setError(e.message);
      }
    };

    return (
      <div className="account">
        <ModalLoginForm
          title="Sign in with Firebase"
          isOpen={isOpen}
          error={error}
          form="log_in_modal"
          closeModal={closeModal}
          onLogin={onLogin}
        />
        <WrappedComponent {...props} changeIsOpenModalFireBase={openModal} />
      </div>
    );
  };

  HocAuth.propTypes = {
    history: PropTypes.shape({
      push: PropTypes.func,
    }).isRequired,
    auth: PropTypes.func.isRequired,
  };

  return connect(() => {}, { auth })(withRouter(HocAuth));
};

export default withAuthFirebase;
