import React from 'react';

const Message = ({ message }) => {
  return (
    <div className='d-flex w-100' key={message.created_at}>
      <p>{message.author}</p>
      <p>{message.content}</p>
      <p>{message.created_at}</p>
    </div>
  );
};

export default Message;
