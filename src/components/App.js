import React, { Component } from 'react';

import Header from './Header';
import Post from './Post';
import { PostContainerStyle } from '../styles/appstyles';

export default class App extends Component {
  state = {
    posts: [
      {
        id: 1,
        name: 'Alan Turing',
        avatar:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Alan_Turing_Aged_16_%28cropped%29.jpg/250px-Alan_Turing_Aged_16_%28cropped%29.jpg',
        time: 'há 3 min',
        body:
          'Eu acredito que ás vezes são as pessoas que ninguém espera nada que fazem as coisas que ninguém consegue imaginar.',
      },
      {
        id: 2,
        name: 'Steve Jobs',
        avatar:
          'https://images.huffingtonpost.com/2015-09-08-1441738928-7350105-Steve_Jobs_The_Man_in_the_Machine860x450.jpg',
        time: 'há 30 min',
        body:
          'Estou procurando um lugar que necessite de muitas reformas e consertos, mas que tenha fundações sólidas. Estou disposto a demolir paredes, construir pontes e acender fogueiras. Tenho uma grande experiência, um monte de energia, um pouco dessa coisa de ‘visão’ e não tenho medo de começar do zero',
      },
    ],
  };

  render() {
    const { posts } = this.state;
    return (
      <div>
        <Header />
        <PostContainerStyle>
          {posts && posts.map(post => <Post key={post.id} data={post} />)}
        </PostContainerStyle>
      </div>
    );
  }
}
