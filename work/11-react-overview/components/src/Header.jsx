import { useState } from 'react';
import ProfileDropdown from './ProfileDropdown';
import cat1 from './images/cat1.jpg';
import cat2 from './images/cat2.jpg';
import cat3 from './images/cat3.jpg';
import didi from './images/didi.jpg';
import dog from './images/dog.jpg';


function Header({ profile, navigateTo }) {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const profileImages = {
        'didi.jpg': didi,
        'dog.jpg': dog,
        'cat1.jpg': cat1,
        'cat2.jpg': cat2,
        'cat3.jpg': cat3,
    }

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    }

    return (
        <header className="app-header">
            <div className="logo-container">
                <img 
                    src={didi} 
                    alt="Cat Family Logo" 
                    className="logo" 
                    onClick={() => navigateTo('home')}
                />
            </div>
            <h1 className="app-title">CAT FAMILY MEOW</h1>
            <div className="profile-container">
                <button 
                    className="profile-button"
                    onClick={toggleDropdown}
                    aria-label="Open profile menu"
                    aria-expanded={isDropdownOpen} /*indicate if the dropdown menu is open or not */
                >
                    <img 
                        src={profileImages[profile.profilePic]}
                        alt="Profile" 
                        className="profile-pic" 
                    />
                </button>

                {isDropdownOpen && (
                    <ProfileDropdown 
                        profile={profile} 
                        navigateTo={navigateTo}
                        closeDropdown={() => setIsDropdownOpen(false)}
                    />
                )}
            </div>
        </header>
    )
}

export default Header;
