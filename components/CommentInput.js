import React from 'react';
import * as actions from '../actions';
import { connect } from 'react-redux';

const mapStateToProps = (state) => ({});

class CommentInput extends React.Component {
  constructor(props) {
    super(props);
    this.processComment = this.processComment.bind(this);
  }

  processComment() {
    const { addComment, setCommentCount } = this.props;
    addComment(2, {
      author: 'Mario',
      content: 'Que ondas',
    });
    setCommentCount(2, 1);
  }

  render() {
    return (
      <input onClick={ this.processComment }></input>
    );
  }
}

CommentInput = connect(mapStateToProps, actions)(CommentInput);
export default CommentInput;
