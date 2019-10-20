import React, { useState, useEffect } from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import PropTypes from 'prop-types';
import Form from '../Form';
import { Router } from '../../routes';

const Modal = ({ query, addItem, editItem, getItem }) => {
  // Modal open state
  const [open, setOpen] = useState(false);
  // Stored data if modal action is for editing
  const [selectedItem, setselectedItem] = useState(false);

  // Modal close handler
  const handleClose = () => {
    Router.pushRoute('/');
  };

  const getTitle = () => {
    switch (query.action) {
      case 'add':
        return 'Adicionar';
      case 'edit':
        return 'Editar';
      default:
        return ' ';
    }
  };

  useEffect(() => {
    if (query.action && (query.action === 'add' || query.action === 'edit')) {
      setOpen(true);

      if (query.action === 'edit') {
        setselectedItem(getItem(query.id));
      }
    } else {
      setselectedItem(false);
      setOpen(false);
    }
  });

  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>{getTitle()}</DialogTitle>
      <DialogContent>
        <Form
          addItem={addItem}
          editItem={editItem}
          selectedItem={selectedItem}
        />
      </DialogContent>
    </Dialog>
  );
};

Modal.propTypes = {
  query: PropTypes.shape({ action: PropTypes.string, id: PropTypes.string })
    .isRequired,
  addItem: PropTypes.func.isRequired,
  editItem: PropTypes.func.isRequired,
  getItem: PropTypes.func.isRequired
};

export default Modal;
