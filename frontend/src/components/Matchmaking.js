import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { matchUsers } from '../redux/actions';

const Matchmaking = () => {
  const dispatch = useDispatch();
  const [userPreferences, setUserPreferences] = useState({});
  const { user, matches } = useSelector(state => state);

  useEffect(() => {
    if (user) {
      setUserPreferences(user.profile);
    }
  }, [user]);

  const handleMatchmaking = () => {
    dispatch(matchUsers(userPreferences));
  };

  return (
    <div id="matchmakingForm">
      <h2>Matchmaking</h2>
      <button onClick={handleMatchmaking}>Find Matches</button>
      {matches && matches.length > 0 && (
        <div>
          <h3>Potential Matches</h3>
          {matches.map((match, index) => (
            <div key={index}>
              <p>{match.username}</p>
              <p>{match.matchScore}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Matchmaking;