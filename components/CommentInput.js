import React from 'react';
import * as actions from '../actions';
import { connect } from 'react-redux';
import Button from 'react-bootstrap/lib/Button';
import Form from 'react-bootstrap/lib/Form';
import FormGroup from 'react-bootstrap/lib/FormGroup';
import FormControl from 'react-bootstrap/lib/FormControl';
import ControlLabel from 'react-bootstrap/lib/ControlLabel';
import StarRatingComponent from './StarRatingAccessible';

const mapStateToProps = (state) => ({
  mainView: state.mainView,
});

class CommentInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.state.name = '';
    this.state.content = '';
    this.state.rate = 0;
    this.processComment = this.processComment.bind(this);
    this.setName = this.setName.bind(this);
    this.setContent = this.setContent.bind(this);
    this.onStarClick = this.onStarClick.bind(this);
  }

  processComment() {

    const textExists = text => (text || text.length > 0);

    const { addComment, setCommentCount, mainView } = this.props;
    let commentsCount;
    if (!textExists(this.state.name)
        || (!textExists(this.state.content) && !textExists(this.state.rate))
    ) {
      return;
    };

    addComment(mainView.data.key, {
      author: this.state.name,
      content: this.state.content,
      rate: this.state.rate,
    });

    this.setState({
      name: '',
      content: '',
      rate: 0,
    });
  }

  setName(evt) {
    this.setState({
      name: evt.target.value,
    });
  }

  setContent(evt) {
    this.setState({
      content: evt.target.value,
    });
  }

  onStarClick(rate) {
    this.setState({ rate });
  }

  render() {
    return (
      <Form>
        <h2 className="comment-input__title">Add a Comment</h2>
          <div className="borderline"></div>
        <FormGroup controlId="commentName">
          <ControlLabel>Name:</ControlLabel>
          <FormControl
            onChange={this.setName}
            value={this.state.name}
            placeholder="Your Name"/>
        </FormGroup>
        <FormGroup controlId="commentContent">
          <ControlLabel>Message:</ControlLabel>
          <FormControl
            componentClass="textarea"
            placeholder="Your Comment"
            onChange={this.setContent}
            value={this.state.content}
          />
        </FormGroup>
        <div className="comment-input__rate">
          <StarRatingComponent
            name="addRate"
            starCount={ 5 }
            value={this.state.rate}
            starColor="#CC0000"
            onStarClick={this.onStarClick}
          />
        </div>
        <Button onClick={ this.processComment } bsStyle="primary">Add Comment</Button>
      </Form>
    );
  }
}

CommentInput = connect(mapStateToProps, actions)(CommentInput);
export default CommentInput;
