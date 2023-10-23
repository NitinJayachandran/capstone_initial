import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
export const Register = () => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [name, setName] = useState('');
    
    const [favoriteArtists, setFavoriteArtists] = useState([]);
    const [showArtistList, setShowArtistList] = useState(false);

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
        console.log(favoriteArtists);
        
    }

    const toggleArtistList = () => {
        setShowArtistList(!showArtistList);
    }

    return (
        <div className="auth-form-container">
            <h2>Register</h2>
            <form className="register-form" onSubmit={handleSubmit}>
                <label htmlFor="name">Full name</label>
                <input value={name} name="name" onChange={(e) => setName(e.target.value)} id="name" placeholder="Full Name" />
                <label htmlFor="email">Email</label>
                <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="youremail@gmail.com" id="email" name="email" />
                <label htmlFor="password">Password</label>
                <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="********" id="password" name="password" />
                <label htmlFor="favoriteArtists">Favorite Artists</label>
                <input value={favoriteArtists} onChange={(e) => setFavoriteArtists(e.target.value)} type="favoriteArtists" placeholder="Enter favorite artists" id="favoriteArtists" name="favoriteArtists" />
                <div className="dropdown-container">
                    <button className="dropdown-button" onClick={toggleArtistList}>
                        Select your favorite artists
                    </button>
                    {showArtistList && (
                        <div className="register-artist-list">
                            <select
                                multiple
                                value={favoriteArtists}
                                onChange={(e) => setFavoriteArtists(Array.from(e.target.selectedOptions, option => option.value))}
                            >
                                <option value="artist1">Artist 1</option>
                                <option value="artist2">Artist 2</option>
                                <option value="artist3">Artist 3</option>
                                {/* Add more options for other artists */}
                            </select>
                        </div>
                        
                    )}
                </div>
                <button type="submit" onClick={() => navigate("/")}>Register</button>
            </form>
            <button className="link-btn" onClick={() => navigate("/")}>Already have an account? Login here.</button>

        </div>
    );
}
