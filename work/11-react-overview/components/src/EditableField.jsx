import { useState } from 'react';

function EditableField({ 
  label, 
  field, 
  value, 
  isEditing, 
  onToggleEdit, 
  onSave, 
  onValidate,
  renderEditMode,
  renderDisplayMode = () => <div>{value}</div>
}) {
  const [tempValue, setTempValue] = useState(value);
  const [error, setError] = useState('');
  
  const handleChange = (newValue) => {
    setTempValue(newValue);
    if (onValidate) {
      const errorMessage = onValidate(newValue);
      setError(errorMessage);
    }
  };
  
  const handleSave = () => {
    if (!error) {
      onSave(field, tempValue);
    }
  };
  
  const handleToggle = () => {
    setTempValue(value);
    setError('');
    onToggleEdit(field);
  };
  
  const editIcon = '✏️';
  
  return (
    <div className="profile-item">
      <div className="profile-label">{label}</div>
      
      {isEditing ? (
        <>
          {renderEditMode(tempValue, handleChange)}
          
          {error && (
            <div className="validation-error">
              {error}
            </div>
          )}
          
          <div className="profile-buttons">
            <button 
              className="save-button"
              onClick={handleSave}
              disabled={!!error}
            >
              Save
            </button>
            <button 
              className="cancel-button"
              onClick={handleToggle}
            >
              Cancel
            </button>
          </div>
        </>
      ) : (
        <>
          {renderDisplayMode()}
          <button 
            className="edit-button"
            onClick={handleToggle}
          >
            {editIcon} Edit
          </button>
        </>
      )}
    </div>
  );
}

export default EditableField; 