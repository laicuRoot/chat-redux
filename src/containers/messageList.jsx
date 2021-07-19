import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Message from '../components/message';

import { setMessages } from '../actions';


class MessageList extends Component {
  componentWillMount() {
    this.props.setMessages('general');
  }
  render() {
    return (
      <div className='container h-100'>
        {this.props.messages.map((message) => {
          return (
            <div className='row' key={message.created_at}>
              <div className='col-12'>
                <Message message={message} />
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}


function mapStateToProps(state) {
  return {
    messages: state.messages
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ setMessages: setMessages }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(MessageList);
