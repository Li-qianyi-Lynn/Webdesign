import { useState } from 'react';
import './Cats.css';
import ContactForm from './ContactForm';
import didi from './images/didi.jpg';
import redBean from './images/red-bean.jpg';
import sugar from './images/sugar.jpg';
import sweetPotato from './images/sweet-potato.jpg';

function Cats() {
  const [isFormOpen, setIsFormOpen] = useState(false);
    
  const openForm = () => setIsFormOpen(true);
  const closeForm = () => setIsFormOpen(false);

  const catCards = [
    {
      id: 1,
      name: 'Didi',
      image: didi,
      description: 'Didi is a 3-year-old cute calico cat. He was adopted from our friend when he was 3 months old. He is very friendly and loves to be petted.'
    },
    {
      id: 2,
      name: 'Sugar',
      image: sugar,
      description: 'Sugar is a 1-year-old cute Devon Rex cat. My friend bought him with a high price. He is very naughty, he will knock over the bowl and bully other cats.'
    },
    {
      id: 3,
      name: 'Sweet Potato',
      image: sweetPotato,
      description: 'Sweet Potato is a 16-year-old old long-haired cat. She is very lazy always sleeps at home. The old lady loves to sunbathe, and is the most gentle cat in the house.'
    },
    {
      id: 4,
      name: 'Red Bean',
      image: redBean,
      description: 'Red Bean is a 11-year-old beautiful cat. She is independent and likes to play by herself. But don\'t be fooled by her beautiful appearance, she is very fierce and will bite people when she is angry. When she feels unhappy or in danger, she will make a loud noise sounds like Wuwuwu.'
    }

  ];    
  

  return (
      <div className="cats-page">

        <h2 className="cats-page-title">Meet my Cats</h2>
        <p className="cats-page-description">These four cats were taken care of by me when their owners were away. They are all very cute. Although taking care of them is a bit tiring, I enjoy spending time with them.</p>

        <div className="cats-container">
        {catCards.map(cat => (
              <div className="cat-card" key={cat.id}>
                <img src={cat.image} alt={cat.name} className="cat-image" />
                <div className="cat-content">
                  <h3>{cat.name}</h3>
                  <p>{cat.description}</p>
                </div>
              </div>
            ))}
        </div>





        <div className="contact-button-container">


          <button 
              className="contact-button" 
              onClick={openForm}
          >
              Join Us
          </button>
          
     
          <ContactForm 
              isOpen={isFormOpen} 
              onClose={closeForm} 
          />
        </div>

      </div>
  )
}

export default Cats;
