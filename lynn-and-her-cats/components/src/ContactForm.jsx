import { useState } from 'react';
import './ContactForm.css';

function ContactForm({ isOpen, onClose }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [phone, setPhone] = useState('');
  
  const [catOwnership, setCatOwnership] = useState('current-owner');
  const [catBreeds, setCatBreeds] = useState([]);
  const [otherBreed, setOtherBreed] = useState('');
  const [homeAddress, setHomeAddress] = useState('');
  const [shippingAddress, setShippingAddress] = useState('');
  const [sameAsHome, setSameAsHome] = useState(false);
  
  const [catCount, setCatCount] = useState('1');

  const [errors, setErrors] = useState({});

  const breedsByCategory = {
    'domestic': ['Domestic Shorthair', 'Domestic Longhair', 'Other'],
    'purebred': ['Persian', 'Maine Coon', 'Siamese', 'Ragdoll', 'Bengal', 'Other'],
    'none': ['None']
  };
  
  const [breedCategory, setBreedCategory] = useState('domestic');
  
  const handleSameAddressChange = (e) => {
    setSameAsHome(e.target.checked);
    if (e.target.checked) {
      setShippingAddress(homeAddress);
    }
  };
  const handleBreedSelection = (e) => {
    const selectedBreed = e.target.value;
    if (selectedBreed && !catBreeds.includes(selectedBreed)) {
      setCatBreeds([...catBreeds, selectedBreed]);
    }
  };

  const removeBreed = (breed) => {
    setCatBreeds(catBreeds.filter(b => b !== breed));
    if (breed === 'Other') {
      setOtherBreed('');
    }
  };

  // Validation function
  const validateForm = () => {
    const newErrors = {};
    
    // Basic validation
    if (!name.trim()) newErrors.name = 'Name is required';
    if (!email.trim()) newErrors.email = 'Email is required';
    
    // Conditional validation
    if (catBreeds.includes('Other') && !otherBreed.trim()) {
      newErrors.otherBreed = 'Please specify the other breed';
    }

    if (!email.trim().includes('@')) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!shippingAddress.trim()) newErrors.shippingAddress = 'Shipping address is required';
    
    if (!sameAsHome && !homeAddress.trim()) {
      newErrors.homeAddress = 'Home address is required';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Form submission handler
  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (validateForm()) {
      const formData = {
        name,
        email,
        phone,
        message,
        catOwnership,
        catCount,
        catBreeds,
        otherBreed: catBreeds.includes('Other') ? otherBreed : null,
        homeAddress,
        shippingAddress
      };
      
      console.log('Form submitted successfully:', formData);

      if (onClose) onClose();
    } else {
      console.log('Form has validation errors');
    }
  };

  if (!isOpen) return null;

  return (
    <div className="form-overlay">
      <div className="form-container">
        <button className="close-button" aria-label="Close Form" onClick={onClose}>×</button>
        <h2>Cat Care Registration</h2>

        <div className="form-description">
          <h3>Please fill out the form to register for cat care services. </h3>
          <p className="required-fields"> Required fields <span className="required">*</span></p>
        </div>
        
        <form onSubmit={handleSubmit}>
          {/* Basic Information */}
          <div className="form-section">
            <div className="form-group">
              <label For="name">Name:<span className="required">*</span></label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className={errors.name ? 'error' : ''}
              />
              {errors.name && <span className="error-message">{errors.name}</span>}
            </div>
            
            <div className="form-group">
              <label For="email">Email:<span className="required">*</span></label>
              <input
                type="text"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={errors.email ? 'error' : ''}
              />
              {errors.email && <span className="error-message">{errors.email}</span>}
            </div>

            <div className="form-group">
              <label For="phone">Phone:</label>
              <input
                type="text"
                id="phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className={errors.phone ? 'error' : ''}
              />
              {errors.phone && <span className="error-message">{errors.phone}</span>}
            </div>
          </div>
          

          <div className="form-section">
            <h3>Cat Information</h3>
            
            <div className="form-group">
              <label For="catOwnership">Are you:</label>
              <select
                id="catOwnership"
                value={catOwnership}
                onChange={(e) => setCatOwnership(e.target.value)}
              >
                <option value="current-owner">A current cat owner</option>
                <option value="looking-care">Looking for cat care</option>
                <option value="cat-enthusiast">Just a cat enthusiast</option>
              </select>
            </div>
            
            <div className="form-group">
              <label For="catCount">How many cats do you have:</label>
              <select
                id="catCount"
                value={catCount}
                onChange={(e) => setCatCount(e.target.value)}
              >
                <option value="0">No cats yet</option>
                <option value="1">1 cat</option>
                <option value="2">2 cats</option>
                <option value="3-5">3-5 cats</option>
                <option value="5+">More than 5 cats</option>
              </select>
            </div>
            
            <div className="form-group">
              <label For="breedCategory">Breed Category:</label>
              <select
                id="breedCategory"
                value={breedCategory}
                onChange={(e) => setBreedCategory(e.target.value)}
              >
                <option value="domestic">Domestic Cats</option>
                <option value="purebred">Purebred Cats</option>
                <option value="none">None</option>
              </select>
            </div>
            
            <div className="form-group">
              <label For="catBreed">Select Cat Breeds:</label>
              <select
                id="catBreed"
                onChange={handleBreedSelection}
                value=""
              >
                <option value="" disabled>Select a breed</option>
                {breedsByCategory[breedCategory].map((breed) => (
                  <option key={breed} value={breed}>{breed}</option>
                ))}
              </select>
              
              <div className="selected-breeds">
                {catBreeds.map((breed) => (
                  <span key={breed} className="breed-tag">
                    {breed}
                    <button type="button" onClick={() => removeBreed(breed)}>×</button>
                  </span>
                ))}
              </div>
              
              {catBreeds.includes('Other') && (
                <div className="form-group">
                  <label For="otherBreed">Specify other breed:</label>
                  <input
                    type="text"
                    id="otherBreed"
                    value={otherBreed}
                    onChange={(e) => setOtherBreed(e.target.value)}
                    className={errors.otherBreed ? 'error' : ''}
                  />
                  {errors.otherBreed && <span className="error-message">{errors.otherBreed}</span>}
                </div>
              )}
            </div>
          </div>
          

          <div className="form-section">
            <h3>Address Information</h3>

            <div className="form-group">
              <label For="homeAddress">Home Address:<span className="required">*</span></label>
              <textarea
                id="homeAddress"
                value={homeAddress}
                onChange={(e) => setHomeAddress(e.target.value)}
                className={errors.homeAddress ? 'error' : ''}
              />
              {errors.homeAddress && <span className="error-message">{errors.homeAddress}</span>}
            </div>

            <div className="form-group checkbox-group">
              <input
                type="checkbox"
                id="sameAsHome"
                checked={sameAsHome}
                onChange={handleSameAddressChange}
              />
              <label For="sameAsHome">Shipping address same as home</label>
            </div>
            
            <div className="form-group">
              <label For="shippingAddress">Shipping Address:<span className="required">*</span></label>
              <textarea
                id="shippingAddress"
                value={shippingAddress}
                onChange={(e) => setShippingAddress(e.target.value)}
                disabled={sameAsHome}
                className={errors.shippingAddress ? 'error' : ''}
              />
              {errors.shippingAddress && <span className="error-message">{errors.shippingAddress}</span>}
            </div>
          </div>
          
          <div className="form-section">
            <div className="form-group">
              <label For="message">Comments or Questions:</label>
              <textarea
                id="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
            </div>
          </div>
          
          <div className="form-actions">
            <button type="button" className="cancel-button" onClick={onClose}>Cancel</button>
            <button type="submit" className="submit-button">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ContactForm;