import React from 'react';
import PropTypes from 'prop-types';
import { PostStyle } from '../styles/appstyles';

import PostHeader from './PostHeader';

const Post = props => (
  <PostStyle>
    <PostHeader avatar={props.data.avatar} name={props.data.name} time={props.data.time} />
    <p>{props.data.body}</p>
  </PostStyle>
);

Post.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    time: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
  }).isRequired,
};

export default Post;
