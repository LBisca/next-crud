import React, { useState, useEffect } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import PropTypes from 'prop-types';
import { Router } from '../../routes';

const Modal = ({ query }) => {
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
        <DialogContent>Form Here</DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleClose} color="primary">
            Subscribe
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

Modal.propTypes = {
  query: PropTypes.shape({ action: PropTypes.string }).isRequired
};

export default Modal;
