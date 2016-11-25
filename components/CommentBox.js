import React from 'react';
import dateformat from 'dateformat';
class CommentBox extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { comment } = this.props;
    const formatDate = (date) => {
      console.log('hello');
    };

    return (
      <div className="comment">
        <div className="comment__content">"{ comment.content }"</div>
        <div className="comment__author">by { comment.author }</div>
        <div className="comment__date">on { dateformat(comment.date, 'dddd mmmm dS, yyyy') }</div>
       </div>
    );
  }
}

export default CommentBox;
