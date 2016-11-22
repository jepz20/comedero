import React from 'react';
import CommentInput from './CommentInput.js';

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
      <div>
        <CommentInput/>
        {
          Object.keys(comments).map(key => (
            <div key={ key }>
              <div>{ comments[key].author }</div>
              <div>{ comments[key].content }</div>
              <div>{ (new Date(comments[key].date)).toString() }</div>
            </div>
          ))
        }
      </div>
    );
  }
}

export default CommentsContainer;
