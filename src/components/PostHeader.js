import React, { Component } from "react";

import "../style.css";

const PostHeader = props => (
  <article>
    <div className="author">
      <img src={require("../images/steve.jpg")} />
      <text>Steve Jobs </text>
      <text>há 5 minutos</text>
    </div>
  </article>
);

export default PostHeader;
