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

  render() {
    const { query } = this.props;

    return (
      <div>
        <Head>
          <title>Home</title>
          <meta name="description" content="CRUD home page" />
        </Head>
        <Modal query={query} />
        <DataTable />
      </div>
    );
  }
}

Home.propTypes = {
  query: PropTypes.shape({ action: PropTypes.string }).isRequired
};

export default Home;
