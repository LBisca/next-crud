import { Formik } from 'formik';
import * as Yup from 'yup';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Router from 'next/router';
import Form from './form';

class FormIndex extends Component {
  render() {
    const { addItem, selectedItem, editItem } = this.props;

    const validationSchema = Yup.object().shape({
      fullName: Yup.string()
        .min(2, 'Nome muito curto!')
        .max(50, 'Nome muito comprido!')
        .required('Este campo é obrigatório'),
      cpf: Yup.string()
        .matches(/[0-9]{3}\.[0-9]{3}\.[0-9]{3}-[0-9]{2}/, 'CPF inválido')
        .min(8)
        .required('Este campo é obrigatório'),
      birthDate: Yup.string()
        .matches(
          /^([0-2][0-9]|(3)[0-1])(\/)(((0)[0-9])|((1)[0-2]))(\/)\d{4}$/,
          'Data inválida!'
        )
        .required('Este campo é obrigatório'),
      email: Yup.string()
        .email('Email inválido!')
        .required('Este campo é obrigatório')
    });

    // Modal close handler
    const handleCloseModal = () => {
      Router.push('/');
    };

    /**
     * Get person's data if editing
     * @returns {Object} Selected person's data or empty values
     */
    const getInitialValues = () => {
      if (
        Object.keys(selectedItem).length !== 0 &&
        selectedItem.constructor === Object
      ) {
        return {
          fullName: selectedItem.fullName,
          cpf: selectedItem.cpf,
          birthDate: selectedItem.birthDate,
          email: selectedItem.email
        };
      }
      return { fullName: '', cpf: '', birthDate: '', email: '' };
    };

    /**
     * Generate unique hash
     * @returns {String} Unique hash intended for person id
     */
    const generateId = () => {
      return `${Math.random()
        .toString(36)
        .substr(2, 9)}`;
    };

    /**
     * Submit form for editing and adding
     * @param {Object} formData Values submited on the form
     * @param {Object} actions Formik useful actions
     * @returns {Promise}
     */
    const onSubmit = (formData, actions) => {
      // Simulating an HTTP request
      return new Promise((resolve, reject) => {
        try {
          setTimeout(() => {
            actions.setSubmitting(false);
            actions.resetForm();
            handleCloseModal();

            if (selectedItem) {
              const newFormData = formData;
              newFormData.id = selectedItem.id;
              resolve(editItem(newFormData));
            } else {
              const newFormData = formData;
              newFormData.id = generateId();
              resolve(addItem(newFormData));
            }
          }, 2000);
        } catch (error) {
          reject(error.message);
        }
      });
    };

    return (
      <Formik
        initialValues={getInitialValues()}
        onSubmit={(formData, actions) => onSubmit(formData, actions)}
        validationSchema={validationSchema}
        // eslint-disable-next-line react/jsx-props-no-spreading
        render={props => <Form {...props} />}
      />
    );
  }
}

FormIndex.defaultProps = {
  selectedItem: false
};

FormIndex.propTypes = {
  addItem: PropTypes.func.isRequired,
  editItem: PropTypes.func.isRequired,
  selectedItem: PropTypes.oneOfType([
    PropTypes.shape({
      fullName: PropTypes.string,
      cpf: PropTypes.string,
      email: PropTypes.string,
      birthDate: PropTypes.string
    }),
    PropTypes.bool
  ])
};

export default FormIndex;
