import { Formik } from 'formik';
import * as Yup from 'yup';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Form from './form';

class FormIndex extends Component {
  render() {
    const { addItem } = this.props;

    const validationSchema = Yup.object().shape({
      fullName: Yup.string()
        .min(2, 'Nome muito curto!')
        .max(50, 'Nome muito comprido!')
        .required('Este campo é obrigatório'),
      cpf: Yup.string().required('Este campo é obrigatório'),
      birthDate: Yup.string().required('Este campo é obrigatório'),
      email: Yup.string()
        .email()
        .required('Este campo é obrigatório')
    });

    const values = { fullName: '', cpf: '', birthDate: '', email: '' };

    const onSubmit = (formData, actions) => {
      return new Promise(resolve => {
        setTimeout(() => {
          console.log(formData);
          actions.setSubmitting(false);
          resolve(addItem(formData));
        }, 3000);
      });
    };

    return (
      <Formik
        initialValues={values}
        onSubmit={(formData, actions) => onSubmit(formData, actions)}
        validationSchema={validationSchema}
        // eslint-disable-next-line react/jsx-props-no-spreading
        render={props => <Form {...props} />}
      />
    );
  }
}

FormIndex.propTypes = {
  addItem: PropTypes.func.isRequired
};

export default FormIndex;
