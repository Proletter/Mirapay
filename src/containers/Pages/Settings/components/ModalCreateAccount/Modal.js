import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Button, ButtonToolbar, Modal } from 'reactstrap';
import classNames from 'classnames';
import styles from '../ListAccount.module.css'
import ButtonIcon from '../../../../../shared/img/Vector.svg'
import Form from '../ModalCreateAccount/Form/Form'
import { useSelector } from 'react-redux';
// import { RTLProps } from '@/shared/prop-types/ReducerProps';

const ModalComponent = ({
  color, btn, title, message, colored, header, rtl,
}) => {
  const [modal, setModal] = useState(false);
  const {className} = useSelector(state => state.theme)

  const toggle = () => {
    setModal(prevState => !prevState);
  };

  let Icon = <span className="lnr lnr-pushpin modal__title-icon" />;
    
  
  const modalClass = classNames({
    'modal-dialog--colored': colored,
    'modal-dialog--header': header,
  });

  return (
    <div>
     <button  color={color} onClick={toggle} type="submit" className={`${styles.button_newaccount} btn btn-primary account__btn account__btn--small`}>
                    <img src={ButtonIcon}/>
                    New Account
                    </button>
      {/* <Button>{btn}</Button> */}
      <Modal
        isOpen={modal}
        toggle={toggle}
        className={`modal-dialog--${color} ${modalClass}`}
        modalClassName={className}
        wrapClassName={className}
         modalClassName={className}
  backdropClassName={className}
  contentClassName={className}
      >
        {/* <div className="modal__header">
          <button
            className="lnr lnr-cross modal__close-btn"
            aria-label="modal__close-btn"
            type="button"
            onClick={toggle}
          />
          {Icon}
          <h4 className="text-modal  modal__title">{title}</h4>
        </div> */}
        <div className="modal__body">
          <Form/>
        </div>
      </Modal>
    </div>
  );
};

// ModalComponent.propTypes = {
//   title: PropTypes.string,
//   message: PropTypes.string,
//   color: PropTypes.string.isRequired,
//   colored: PropTypes.bool,
//   header: PropTypes.bool,
//   btn: PropTypes.string.isRequired,
//   rtl: RTLProps.isRequired,
// };

ModalComponent.defaultProps = {
  title: '',
  message: '',
  colored: false,
  header: false,
};

export default ModalComponent