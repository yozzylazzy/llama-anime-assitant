import React, { useEffect, useState } from "react";

const User = () => {
  const [userData, setUserData] = useState({
    name: "John Doe",
    username: "johndoe",
    email: "johndoe@example.com",
    bio: "Just a regular user.",
    image: "https://via.placeholder.com/150",
    location: "Somewhere on Earth",
    selectedCharacter: "character1",
  });
  const [selectedCharacter, setSelectedCharacter] = useState(userData.selectedCharacter);

  // Handle character selection
  const handleCharacterChange = (event) => {
    const character = event.target.value;
    setSelectedCharacter(character);

    // Simulate updating preferences
    console.log(`Character updated to: ${character}`);
  };

  return (
    <div className="user-page">
      <h1>User Profile</h1>

      {userData ? (
        <div className="user-profile">
          <img
            src={userData.image || "/default-avatar.png"} // Provide a default avatar
            alt={`${userData.name}'s avatar`}
            className="user-avatar"
          />
          <h2>{userData.name}</h2>
          <p><strong>Username:</strong> {userData.username}</p>
          <p><strong>Email:</strong> {userData.email}</p>
          <p><strong>Location:</strong> {userData.location || "Not provided"}</p>
          <p><strong>Bio:</strong> {userData.bio || "No bio available"}</p>
        </div>
      ) : (
        <p>No user data found.</p>
      )}

      <div className="character-preferences">
        <h3>Select Your Character</h3>
        <select
          value={selectedCharacter}
          onChange={handleCharacterChange}
          className="character-select"
        >
          <option value="">-- Select a Character --</option>
          <option value="character1">Character 1</option>
          <option value="character2">Character 2</option>
          <option value="character3">Character 3</option>
        </select>
      </div>
    </div>
  );
};

export default User;
