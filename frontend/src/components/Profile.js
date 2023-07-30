import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createProfile } from '../services/api';
import { PROFILE_UPDATE } from '../redux/actions';

const Profile = () => {
  const dispatch = useDispatch();
  const [profile, setProfile] = useState({
    preferences: '',
    interests: '',
    financialBoundaries: '',
  });

  const handleInputChange = (event) => {
    setProfile({
      ...profile,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const updatedProfile = await createProfile(profile);
    dispatch({ type: PROFILE_UPDATE, payload: updatedProfile });
  };

  return (
    <form id="profileForm" onSubmit={handleSubmit}>
      <label>
        Preferences:
        <input
          type="text"
          name="preferences"
          value={profile.preferences}
          onChange={handleInputChange}
        />
      </label>
      <label>
        Interests:
        <input
          type="text"
          name="interests"
          value={profile.interests}
          onChange={handleInputChange}
        />
      </label>
      <label>
        Financial Boundaries:
        <input
          type="text"
          name="financialBoundaries"
          value={profile.financialBoundaries}
          onChange={handleInputChange}
        />
      </label>
      <button type="submit">Update Profile</button>
    </form>
  );
};

export default Profile;