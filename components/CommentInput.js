import React from 'react';
import * as actions from '../actions';
import { connect } from 'react-redux';
import Button from 'react-bootstrap/lib/Button';
import Form from 'react-bootstrap/lib/Form';
import FormGroup from 'react-bootstrap/lib/FormGroup';
import FormControl from 'react-bootstrap/lib/FormControl';
import ControlLabel from 'react-bootstrap/lib/ControlLabel';

const mapStateToProps = (state) => ({
  mainView: state.mainView,
});

class CommentInput extends React.Component {
  constructor(props) {
    super(props);
    this.processComment = this.processComment.bind(this);
    this.setName = this.setName.bind(this);
    this.setContent = this.setContent.bind(this);
  }

  processComment() {
    const { addComment, setCommentCount, mainView } = this.props;
    let commentsCount;
    if (!this.state ||
      !this.state.name ||
      !this.state.content
      || this.state.name.length < 1
      || this.state.content.length < 1) {
      return;
    };

    addComment(mainView.data.key, {
      author: this.state.name,
      content: this.state.content,
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

  render() {
    return (
      <Form>
        <FormGroup controlId="commentName">
          <ControlLabel>Name:</ControlLabel>
          <FormControl onChange={this.setName} placeholder="Jose"/>
        </FormGroup>
        <FormGroup controlId="commentName">
          <FormControl
            componentClass="textarea"
            placeholder="Your Comment"
            onChange={this.setContent}
          />
        </FormGroup>
        <Button onClick={ this.processComment } bsStyle="primary">Add Comment</Button>
      </Form>
    );
  }
}

CommentInput = connect(mapStateToProps, actions)(CommentInput);
export default CommentInput;
