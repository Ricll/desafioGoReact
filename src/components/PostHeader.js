import React from 'react';
import PropTypes from 'prop-types';
import { PostHeaderStyle, DataStyle } from '../styles/appstyles';


const PostHeader = ({ avatar, name, time }) => (
  <PostHeaderStyle>
    <img className="avatar" src={avatar} alt="avatar" />
    <DataStyle>
      <strong>{name}</strong>
      <span>{time}</span>
    </DataStyle>
  </PostHeaderStyle>
);

PostHeader.propTypes = {
  name: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
};

export default PostHeader;
