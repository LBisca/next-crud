import React, { useState, useEffect } from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import PropTypes from 'prop-types';
import Form from '../Form';
import { Router } from '../../routes';

const Modal = ({ query, addItem }) => {
  const [open, setOpen] = useState(false);

  const handleClose = () => {
    Router.pushRoute('/');
  };

  const getTitle = () => {
    switch (query.action) {
      case 'add':
        return 'Adicionar';
      default:
        return ' ';
    }
  };

  useEffect(() => {
    if (query.action) {
      setOpen(true);
    } else {
      setOpen(false);
    }
  });

  return (
    <div>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>{getTitle()}</DialogTitle>
        <DialogContent>
          <Form addItem={addItem} />
        </DialogContent>
      </Dialog>
    </div>
  );
};

Modal.propTypes = {
  query: PropTypes.shape({ action: PropTypes.string }).isRequired,
  addItem: PropTypes.func.isRequired
};

export default Modal;
