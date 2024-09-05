import React from 'react';
import './Profile.css'; // Import CSS for profile styling

const Profile = () => {
    // Dummy user data; in a real application, this would come from a backend or user context
    const user = {
        name: 'John Doe',
        email: 'john.doe@example.com',
        profilePicture: 'https://via.placeholder.com/150', // Placeholder image URL
    };

    return (
        <div className="profile-container">
            <div className="profile-card">
                <img src={user.profilePicture} alt="Profile" className="profile-picture" />
                <h1 className="profile-name">{user.name}</h1>
                <p className="profile-email">{user.email}</p>
            </div>
        </div>
    );
};

export default Profile;
