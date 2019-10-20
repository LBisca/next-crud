import React, { Component } from 'react';
import Head from 'next/head';
import PropTypes from 'prop-types';
import DataTable from '../components/DataTable';
import Modal from '../components/Modal';
import MiniModal from '../components/MiniModal';

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
        cpf: '464.708.658-72',
        birthDate: '25/08/1995'
      },
      {
        id: 'h0fgjvnlf',
        fullName: 'Beatriz Débora Liz',
        email: 'beatriz@asconnet.com.br',
        cpf: '772.413.383-24',
        birthDate: '23/05/1939'
      },
      {
        id: '83lsu0u29',
        fullName: 'Leonardo Ryan Giovanni',
        email: 'leonardo@danielstrauch.com',
        cpf: '469.244.256-58',
        birthDate: '12/07/1964'
      }
    ]
  };

  /**
   * Gets the person object on the list.
   * @param {String} itemId hash id for finding selected person
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
   * Edit selected person on the list.
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

  /**
   * Remove selceted person on the list.
   * @param {String} itemId hash id for finding selected person
   */
  removeItem = itemId => {
    return new Promise((resolve, reject) => {
      try {
        const itemIndex = this.state.data.findIndex(
          element => element.id === itemId
        );
        // eslint-disable-next-line react/no-access-state-in-setstate
        const newData = [...this.state.data];
        newData.splice(itemIndex, 1);
        // Simullating HTTP request timeout
        setTimeout(() => {
          this.setState({ data: newData });
          resolve(true);
        }, 2000);
      } catch (error) {
        reject(error);
      }
    });
  };

  render() {
    const { query } = this.props;

    return (
      <div>
        <Head>
          <title>CRUD</title>
          <meta name="description" content="CRUD home page" />
        </Head>
        <MiniModal
          query={query}
          removeItem={this.removeItem}
          getItem={this.getItem}
        />
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
