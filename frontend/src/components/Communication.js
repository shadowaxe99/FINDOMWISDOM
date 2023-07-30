import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { sendMessage } from '../services/api';
import { COMMUNICATION_UPDATE } from '../redux/actions';

const Communication = () => {
  const dispatch = useDispatch();
  const [message, setMessage] = useState('');

  const handleInputChange = (event) => {
    setMessage(event.target.value);
  };

  const handleSendMessage = async () => {
    try {
      const response = await sendMessage(message);
      dispatch({ type: COMMUNICATION_UPDATE, payload: response.data });
      setMessage('');
    } catch (error) {
      console.error('Failed to send message:', error);
    }
  };

  return (
    <div id="communicationForm">
      <h2>Secure Communication</h2>
      <textarea
        value={message}
        onChange={handleInputChange}
        placeholder="Type your message here..."
      />
      <button onClick={handleSendMessage}>Send Message</button>
    </div>
  );
};

export default Communication;