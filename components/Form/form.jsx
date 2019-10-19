import React from 'react';
import FormControl from '@material-ui/core/FormControl';
import { makeStyles } from '@material-ui/core/styles';
import FormHelperText from '@material-ui/core/FormHelperText';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import PropTypes from 'prop-types';
import DialogActions from '@material-ui/core/DialogActions';
import Button from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';
import { Router } from '../../routes';
import css from './style.scss';

const useStyles = makeStyles({
  formControl: { width: '210px' },
  loader: { width: '25px !important', height: '25px !important' }
});

const handleClose = () => {
  Router.pushRoute('/');
};

const Form = ({
  handleChange,
  handleSubmit,
  values,
  errors,
  touched,
  isSubmitting
}) => {
  const classes = useStyles({});

  return (
    <div className={css.wrapper}>
      <form onSubmit={handleSubmit}>
        <div className={css.formRow}>
          <FormControl
            error={errors.fullName && touched.fullName}
            className={classes.formControl}
          >
            <InputLabel>Nome</InputLabel>
            <Input
              name="fullName"
              id="fullName"
              value={values.fullName}
              onChange={handleChange}
            />
            <FormHelperText error={errors.fullName && touched.fullName}>
              {errors.fullName && touched.fullName ? errors.fullName : ''}
            </FormHelperText>
          </FormControl>
          <FormControl
            error={errors.email && touched.email}
            className={classes.formControl}
          >
            <InputLabel>Email</InputLabel>
            <Input
              name="email"
              id="email"
              value={values.email}
              onChange={handleChange}
            />
            <FormHelperText error={errors.email && touched.email}>
              {errors.email && touched.email ? errors.email : ''}
            </FormHelperText>
          </FormControl>
        </div>

        <div className={css.formRow}>
          <FormControl
            error={errors.cpf && touched.cpf}
            className={classes.formControl}
          >
            <InputLabel>CPF</InputLabel>
            <Input
              name="cpf"
              id="cpf"
              value={values.cpf}
              onChange={handleChange}
            />
            <FormHelperText error={errors.cpf && touched.cpf}>
              {errors.cpf && touched.cpf ? errors.cpf : ''}
            </FormHelperText>
          </FormControl>
          <FormControl
            error={errors.birthDate && touched.birthDate}
            className={classes.formControl}
          >
            <InputLabel>Data de nascimento</InputLabel>
            <Input
              name="birthDate"
              id="birthDate"
              value={values.birthDate}
              onChange={handleChange}
            />
            <FormHelperText error={errors.birthDate && touched.birthDate}>
              {errors.birthDate && touched.birthDate ? errors.birthDate : ''}
            </FormHelperText>
          </FormControl>
        </div>

        <DialogActions>
          <Button onClick={handleClose} disabled={isSubmitting}>
            Cancelar
          </Button>
          <Button
            onClick={handleSubmit}
            color="primary"
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <CircularProgress className={classes.loader} />
            ) : (
              'Salvar'
            )}
          </Button>
          <input className={css.hide} type="submit" />
        </DialogActions>
      </form>
    </div>
  );
};

Form.defaultProps = {
  errors: PropTypes.object,
  touched: PropTypes.object
};

Form.propTypes = {
  handleChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  values: PropTypes.shape({
    fullName: PropTypes.string,
    email: PropTypes.string,
    cpf: PropTypes.string,
    birthDate: PropTypes.string
  }).isRequired,
  errors: PropTypes.shape({
    fullName: PropTypes.string,
    email: PropTypes.string,
    cpf: PropTypes.string,
    birthDate: PropTypes.string
  }),
  touched: PropTypes.shape({
    fullName: PropTypes.bool,
    email: PropTypes.bool,
    cpf: PropTypes.bool,
    birthDate: PropTypes.bool
  }),
  isSubmitting: PropTypes.bool.isRequired
};

export default Form;
