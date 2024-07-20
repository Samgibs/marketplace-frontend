import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ProfileList = ({ token }) => {
  const [profiles, setProfiles] = useState([]);

  useEffect(() => {
    const fetchProfiles = async () => {
      const response = await axios.get('http://127.0.0.1:8000/api/profiles/', {
        headers: { Authorization: `Bearer ${token}` }
      });
      setProfiles(response.data);
    };
    fetchProfiles();
  }, [token]);

  return (
    <div className="container mt-5">
      <h1>Profiles</h1>
      <ul className="list-group">
        {profiles.map((profile) => (
          <li key={profile.id} className="list-group-item">{profile.role}</li>
        ))}
      </ul>
    </div>
  );
};

export default ProfileList;
