function ProfileDropdown({ profile, navigateTo, closeDropdown }) {
    const handleProfileClick = () => {
      navigateTo('profile');
      closeDropdown();
    };
  
    return (
      <div className="profile-dropdown" role="menu">
        <p className={`username ${profile.verifiedDogFree ? 'fabulous' : ''}`}>
          {profile.username}
        </p>
        <button 
          className="profile-settings-button"
          onClick={handleProfileClick}
        >
          Profile Settings
        </button>
      </div>
    );
  }
  
  export default ProfileDropdown;