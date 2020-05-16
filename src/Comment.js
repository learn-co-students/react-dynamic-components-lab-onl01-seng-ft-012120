import React, { Component } from "react";

class Comment extends Component {
  state = {};
  render() {
    return <div className="comment">{this.props.commentText}</div>;
  }
}

export default Comment;
