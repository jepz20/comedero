import React from 'react';
import CommentInput from './CommentInput.js';
import CommentBox from './CommentBox.js';

class CommentsContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let { comments } = this.props;
    if (!comments) {
      comments = {};
    };

    return (
      <div className="comments-container">
        <div className="comments-container__comment-input">
          <CommentInput/>
        </div>
        <div className="comments-list">
          <div className="borderline"></div>
          {
            Object.keys(comments).reverse().map(key => (
              <div key={ key }>
                <CommentBox comment={comments[key]}/>
              </div>
            ))
          }
        </div>
      </div>
    );
  }
}

export default CommentsContainer;
