import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Dialog from '@material-ui/core/Dialog';
import Button from '@material-ui/core/Button';
import DialogActions from '@material-ui/core/DialogActions';
import DialogTitle from '@material-ui/core/DialogTitle';
import CircularProgress from '@material-ui/core/CircularProgress';
import PropTypes from 'prop-types';
import { Router } from '../../routes';

const useStyles = makeStyles({
  dialog: { maxWidth: '350px' },
  loader: { width: '25px !important', height: '25px !important' }
});

const MiniModal = ({ query, removeItem, getItem }) => {
  const [open, setOpen] = useState(false);
  const [loader, setLoader] = useState(false);

  /**
   * Open modal based on router
   */
  useEffect(() => {
    if (query.action && query.action === 'remove') {
      setOpen(true);
    } else {
      setOpen(false);
    }
  });

  /**
   * Mount modal text
   */
  const modalDialog = () => {
    const name = getItem(query.id).fullName;

    return `Tem certeza que deseja excluir ${name || ' '}?`;
  };

  const handleClose = () => {
    Router.push('/');
  };

  const classes = useStyles({});

  return (
    <div>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle className={classes.dialog}>{modalDialog()}</DialogTitle>
        <DialogActions>
          <Button disabled={loader} onClick={handleClose} color="primary">
            Voltar
          </Button>
          <Button
            onClick={async () => {
              setLoader(true);
              await removeItem(query.id);
              handleClose();
              setLoader(false);
            }}
            color="secondary"
            disabled={loader}
          >
            {loader ? (
              <CircularProgress color="secondary" className={classes.loader} />
            ) : (
              'Excluir'
            )}
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

MiniModal.propTypes = {
  query: PropTypes.shape({ action: PropTypes.string, id: PropTypes.string })
    .isRequired,
  removeItem: PropTypes.func.isRequired,
  getItem: PropTypes.func.isRequired
};

export default MiniModal;
