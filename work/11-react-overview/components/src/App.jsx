import { useState } from 'react';
import './App.css';
import Footer from './Footer';
import Header from './Header';
import HomePage from './HomePage';
import ProfilePage from './ProfilePage';
function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const [profile, setProfile] = useState({
    username: 'John Doe',
    actualName: 'John Doe',
    verifiedDogFree: false,
    profilePic: 'didi.jpg'  // default pic
  });
  
  const [isEditing, setIsEditing] = useState({
    username: false,
    actualName: false,
    verifiedDogFree: false,
    profilePic: false
  });

  const navigateTo = (page) => {
    setCurrentPage(page);
  }

  return (
    <div className="app">
      <Header 
        profile={profile} 
        navigateTo={navigateTo} 
      />
      
      {currentPage === 'home' && <HomePage />}
      {currentPage === 'profile' && (
        <ProfilePage 
          profile={profile} 
          setProfile={setProfile}
          isEditing={isEditing}
          setIsEditing={setIsEditing}
        />
      )}
       <Footer />
    </div>
  )

  
  

}

export default App;
