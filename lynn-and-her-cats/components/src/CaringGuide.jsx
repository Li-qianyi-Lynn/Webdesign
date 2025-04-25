import { useState } from 'react';
import './CaringGuide.css';
import food from './images/food.jpg';

function CaringGuide() {
    const [openAccordion, setOpenAccordion] = useState(null);

    const toggleAccordion = (index) => {
        if (openAccordion === index) {
            setOpenAccordion(null);
        } else {
            setOpenAccordion(index);
        }
    };

    const feedingData = [
        {
            id: 1,
            cat: "Didi",
            description: "Didi is a cute little male cat. He is a little bit shy and likes to be played with. He is a little bit picky about his food, but he will eat most of it. At 8:00, 13:00, 18:00, I will feed him dry food and wet food. He can eat one whole can of wet food at a time."
        },
        {
            id: 2,
            cat: "Sugar",
            description: "Sugar is a very active German Shepherd. He is very affectionate and has a big appetite. He often eats food from the table and sometimes he will steal other cats' food. He likes fish-flavored dry food and wet food, I usually feed him twice a day, at 8 am and 7 pm. He is very playful and loves to play with the cat toy. If there is no one to play with him, he will go to bother Red Bean (so Red Bean really dislikes him)."
        },
        {
            id: 3,
            cat: "Red Bean",
            description: "Red Bean likes fish-flavored wet food and dry food mixed, fed twice a day, at 9 am and 7 pm. Red Bean is prone to shedding, so it is important to add some hair care products to the food to help reduce shedding and hairball issues."
        },
        {
            id: 4,
            cat: "Sweet Potato",
            description: "Sweet Potato is a old cat, likes duck and turkey flavored dry food. She is a picky eater, so it is important to feed her high-quality food. Several important things to note: She is 16 years old, so she has kidney disease, and needs to take medicine every day. She also has dental issues, so she needs to eat soft food. I use a blender to make her food soft."
        }
    ];

    return (
        <div className="caring-guide-container">
            <h2 className="caring-guide-title">Caring Guide</h2>
            <p className="caring-guide-description">Each cat has different feeding needs and food preferences. Click below to learn more.</p>
            
            <div className="accordion-container">
                {feedingData.map((item, index) => (
                    <div className="accordion-item" key={item.id}>
                        <h3>
                            <button 
                                className={`accordion-button ${openAccordion === index ? 'active' : ''}`}
                                onClick={() => toggleAccordion(index)}
                                aria-expanded={openAccordion === index}
                                aria-controls={`accordion-content-${item.id}`}
                                aria-label={`Toggle ${item.cat} caring information`}

                            >
                                {item.cat}

                            </button>
                        </h3>
                        <div 
                            id={`accordion-content-${item.id}`}
                            className={`accordion-content ${openAccordion === index ? 'open' : ''}`}
                            aria-hidden={openAccordion !== index}
                        >
                            <div className="accordion-inner">
                                <div className="cat-info-card">
                                    <p>{item.description}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <div className="cat-care-guide-container">
                <img src={food} alt="There are lots of canned food in the cabinet" />
            </div>
        </div>
    );
}

export default CaringGuide;