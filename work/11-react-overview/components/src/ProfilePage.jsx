import { useState } from 'react';
import EditableField from './EditableField';

function ProfilePage({ profile, setProfile, isEditing, setIsEditing }) {
  // to store the temporary values
  const [tempValues, setTempValues] = useState({
    username: profile.username,
    actualName: profile.actualName,
    verifiedDogFree: profile.verifiedDogFree,
    profilePic: profile.profilePic
  });
  
  // to store the validation errors
  const [validationErrors, setValidationErrors] = useState({
    username: '',
    actualName: '',
    profilePic: ''
  });
  
  // to store the profile pic options
  const profilePicOptions = [
    'cat1.jpg',
    'cat2.jpg',
    'cat3.jpg',
    'dog.jpg'
  ];
  
  // to toggle the edit state
  const toggleEdit = (field) => {
    setIsEditing({
      ...isEditing,
      [field]: !isEditing[field]
    });
    
    // to reset the temporary values to the current values
    setTempValues({
      ...tempValues,
      [field]: profile[field]
    });
    
    // to reset the validation errors
    setValidationErrors({
      ...validationErrors,
      [field]: ''
    });
  };
  
  // to handle the input changes
  const handleChange = (field, value) => {
    setTempValues({
      ...tempValues,
      [field]: value
    });
    
    // to validate the field
    validateField(field, value);
  };
  
  // to validate the field
  const validateField = (field, value) => {
    let error = '';
    
    switch (field) {
      case 'username':
        if (!value || value.trim() === '') {
          error = 'Username cannot be empty';
        } else if (value.toLowerCase() === 'dog') {
          error = 'You are joking, right?';
        }
        break;
      case 'actualName':
        if (value && value.trim() === '') {
          error = 'Name cannot only contain spaces';
        }
        break;
      default:
        break;
    }
    
    setValidationErrors({
      ...validationErrors,
      [field]: error
    });
    
    return !error;
  };
  
  // to save the changes
  const saveChanges = (field, newValue) => {
    // special handling: if the actual name is empty, use the username
    if (field === 'actualName' && (!newValue || newValue.trim() === '')) {
      newValue = profile.username;
    }
    
    setProfile({
      ...profile,
      [field]: newValue
    });
    
    toggleEdit(field);
  };
  
  // edit button icon
  const editIcon = '✏️';
  
  return (
    <main className="profile-page">
      <h1>Profile Settings</h1>
      
      <div className="profile-settings">
        {/* profile picture setting */}
        <EditableField
          label="Profile Picture"
          field="profilePic"
          value={profile.profilePic}
          isEditing={isEditing.profilePic}
          onToggleEdit={toggleEdit}
          onSave={saveChanges}
          renderEditMode={(value, onChange) => (
            <select 
              value={value}
              onChange={(e) => onChange(e.target.value)}
            >
              {profilePicOptions.map(pic => (
                <option key={pic} value={pic}>
                  {pic}
                </option>
              ))}
            </select>
          )}
        />
        
        {/* username setting */}
        <EditableField
          label="Username"
          field="username"
          value={profile.username}
          isEditing={isEditing.username}
          onToggleEdit={toggleEdit}
          onSave={saveChanges}
          onValidate={(value) => {
            if (!value || value.trim() === '') {
              return 'Username cannot be empty';
            } else if (value.toLowerCase() === 'dog') {
              return "You're kidding, right?";
            }
            return '';
          }}
          renderEditMode={(value, onChange) => (
            <input 
              type="text"
              value={value}
              onChange={(e) => onChange(e.target.value)}
            />
          )}
        />
        
        {/* actual name setting */}
        <EditableField
          label="Actual Name"
          field="actualName"
          value={profile.actualName}
          isEditing={isEditing.actualName}
          onToggleEdit={toggleEdit}
          onSave={saveChanges}
          onValidate={(value) => {
            if (value && value.trim() === '') {
              return 'Name cannot only contain spaces';
            }
            return '';
          }}
          renderEditMode={(value, onChange) => (
            <input 
              type="text"
              value={value}
              onChange={(e) => onChange(e.target.value)}
            />
          )}
        />
        
        {/* verified dog free setting */}
        <EditableField
          label="Verified Dog Free"
          field="verifiedDogFree"
          value={profile.verifiedDogFree}
          isEditing={isEditing.verifiedDogFree}
          onToggleEdit={toggleEdit}
          onSave={saveChanges}
          renderEditMode={(value, onChange) => (
            <label>
              <input 
                type="checkbox"
                checked={value}
                onChange={(e) => onChange(e.target.checked)}
              />
              Verified Dog Free
            </label>
          )}
          renderDisplayMode={() => (
            <div>
              {profile.verifiedDogFree ? 'Verified Dog Free' : 'Not Verified Dog Free'}
            </div>
          )}
        />
      </div>
    </main>
  );
}

export default ProfilePage;