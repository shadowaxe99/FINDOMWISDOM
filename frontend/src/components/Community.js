import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { postMessage, COMMUNITY_UPDATE } from '../redux/actions';

const Community = () => {
  const [message, setMessage] = useState('');
  const community = useSelector(state => state.community);
  const dispatch = useDispatch();

  useEffect(() => {
    // Fetch initial community messages here
  }, []);

  const handlePostMessage = () => {
    dispatch(postMessage(message));
    setMessage('');
  };

  const handleInputChange = (event) => {
    setMessage(event.target.value);
  };

  return (
    <div id="communityForm">
      <h2>Community</h2>
      <div>
        {community.map((message, index) => (
          <p key={index}>{message}</p>
        ))}
      </div>
      <input
        type="text"
        value={message}
        onChange={handleInputChange}
      />
      <button onClick={handlePostMessage}>Post Message</button>
    </div>
  );
};

export default Community;