/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import App from 'next/app';
import Header from '../components/Header';

class Main extends App {
  render() {
    const { Component, pageProps } = this.props;

    return (
      <>
        <Header />
        <style jsx global>
          {`
            * {
              box-sizing: border-box;
              margin: 0;
              padding: 0;
              font-family: Roboto, sans-serif;
            }

            html {
              background-color: #f0f0f0;
            }

            body {
              font-size: 16px;
            }
          `}
        </style>
        <Component {...pageProps} />
      </>
    );
  }
}

export default Main;
