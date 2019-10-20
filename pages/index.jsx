import React, { Component } from 'react';
import Head from 'next/head';
import PropTypes from 'prop-types';
import DataTable from '../components/DataTable';
import Modal from '../components/Modal';

class Home extends Component {
  static getInitialProps({ res, query }) {
    if (
      query.action &&
      (query.action !== 'add' &&
        query.action !== 'edit' &&
        query.action !== 'remove')
    ) {
      res.redirect('/');
    }
    return { query };
  }

  state = {
    // Store for list data
    data: [
      {
        id: 'nf7wt6ng9',
        fullName: 'Lucas Simões Bisca',
        email: 'lucas.simon.b@gmail.com',
        cpf: '46470865872',
        birthDate: '25/08/1995'
      },
      {
        id: 'h0fgjvnlf',
        fullName: 'Antonio Benjamin Sales',
        email: 'lucas.simon.b@gmail.com',
        cpf: '54725702471',
        birthDate: '06/01/2001'
      },
      {
        id: '83lsu0u29',
        fullName: 'Sarah Louise Nunes',
        email: 'lucas.simon.b@gmail.com',
        cpf: '32985098335',
        birthDate: '27/01/1976'
      }
    ]
  };

  /**
   * Gets the person object on the list.
   * @param {String} itemId hash Id for finding selected person
   * @returns {Object} person's data
   */
  getItem = itemId => {
    const item = this.state.data.find(element => element.id === itemId);
    if (item) {
      return item;
    }
    return false;
  };

  /**
   * Add a person on the list.
   * @param {Object} item Object populated with person's data
   */
  addItem = item => {
    this.setState(prevState => ({
      data: [...prevState.data, item]
    }));
  };

  /**
   * Edit selceted person on the list.
   * @param {Object} item Object populated with person's data
   */
  editItem = item => {
    const itemIndex = this.state.data.findIndex(
      element => element.id === item.id
    );
    // eslint-disable-next-line react/no-access-state-in-setstate
    const newData = [...this.state.data];
    let data = { ...newData[itemIndex] };
    data = item;
    newData[itemIndex] = data;

    this.setState({ data: newData });
  };

  removeItem = itemId => {
    const itemIndex = this.state.data.findIndex(
      element => element.id === itemId
    );

    // eslint-disable-next-line react/no-access-state-in-setstate
    const newData = [...this.state.data];
    newData.splice(itemIndex, 1);

    this.setState(newData);
  };

  render() {
    const { query } = this.props;

    return (
      <div>
        <Head>
          <title>Home</title>
          <meta name="description" content="CRUD home page" />
        </Head>
        <Modal
          query={query}
          addItem={this.addItem}
          editItem={this.editItem}
          getItem={this.getItem}
        />
        <DataTable data={this.state.data} />
      </div>
    );
  }
}

Home.propTypes = {
  query: PropTypes.shape({ action: PropTypes.string }).isRequired
};

export default Home;
