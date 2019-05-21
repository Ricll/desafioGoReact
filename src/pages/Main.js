import React, { Component } from 'react';
import Header from '../components/Header';

export default class Main extends Component {
  state = {
    post: 'Olá',
  };

  render() {
    const { post } = this.state;
    return (
      <div>
        <Header />
        <h1>{post}</h1>
      </div>
    );
  }
}
