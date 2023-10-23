// import React from 'react'
// import { useNavigate } from 'react-router-dom'
// import "./playlist.css"

// const Playlist = (props) => {
//     const navigate = useNavigate();
//   return (
//     <div>
//       <h1>hello world</h1>
//       <button onClick={()=>navigate("/Login")}>Log Out</button>

//     </div>
//   )
// }

// export default Playlist

import React from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import './playlist.css'; // Import a CSS file for styling
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMicrophone } from "@fortawesome/free-solid-svg-icons";

const Playlist = () => {
  const navigate = useNavigate();
  const [selectedArtist, setSelectedArtist] = useState("");

  const onLogoutClick = () => {
    // Perform logout logic if needed
    navigate("/"); // Navigate to the login page after logout
  };

  const handleArtistChange = (event) => {
    setSelectedArtist(event.target.value);
  };

  const handleMicButtonClick = () => {
    // Handle microphone button click here
    console.log("Microphone button clicked");
  };

  const handleLeftBoxClick = () => {
    navigate("/history")
  }

  const handleRightBoxClick = () => {
    navigate("/suggested")
  }
  return (
    <div className="playlist-container">
        <button className="mic-button" onClick={handleMicButtonClick}>
          <FontAwesomeIcon icon={faMicrophone} />
        </button>
        
        <button className="logout-button" onClick={onLogoutClick}>Log Out</button>
        <div className="artist-dropdown">
            <label htmlFor="artistSelect">Select Artist: </label>
            <select id="artistSelect" value={selectedArtist} onChange={handleArtistChange}>
                <option value="">Select an artist</option>
                <option value="artist1">Artist 1</option>
                <option value="artist2">Artist 2</option>
            {/* Add more artist options as needed */}
            </select>
      </div>
      <div className="left-box" onClick={handleLeftBoxClick}>Music history</div>
      <div className="right-box" onClick={handleRightBoxClick}>Suggested Songs</div>
    </div>
  );
};

export default Playlist;

