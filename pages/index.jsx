import React, { Component } from 'react';
import Head from 'next/head';
import PropTypes from 'prop-types';
import DataTable from '../components/DataTable';
import Modal from '../components/Modal';

class Home extends Component {
  static getInitialProps({ res, query }) {
    if (query.action && query.action !== 'add') {
      res.redirect('/');
    }
    return { query };
  }

  state = {
    // Store for list data
    data: [
      {
        id: 1,
        fullName: 'Lucas Simões Bisca',
        cpf: '46470865872',
        birthDate: '25/08/1995'
      },
      {
        id: 2,
        fullName: 'Antonio Benjamin Caleb Sales',
        cpf: '54725702471',
        birthDate: '06/01/2001'
      },
      {
        id: 3,
        fullName: 'Sarah Louise Nunes',
        cpf: '32985098335',
        birthDate: '27/01/1976'
      }
    ]
  };

  addItem = item => {
    this.setState(prevState => ({
      data: [...prevState.data, item]
    }));
  };

  render() {
    const { query } = this.props;

    return (
      <div>
        <Head>
          <title>Home</title>
          <meta name="description" content="CRUD home page" />
        </Head>
        <Modal query={query} addItem={this.addItem} />
        <DataTable data={this.state.data} />
      </div>
    );
  }
}

Home.propTypes = {
  query: PropTypes.shape({ action: PropTypes.string }).isRequired
};

export default Home;
