import './Homepage.css';
import sugar from './images/sugar.jpg';
function Homepage() {
    return (
        <div className="homepage">
            <div className="homepage-image-container">
                <img className="homepage-image" src={sugar} alt="This is my favorite cat, named sugar, he is wearing a hat" />
            </div>
            
            <div className="homepage-content-container">
                <p><b>Hi, my name is Lynn~ </b></p>
                <br></br>

                <p>I hail from Zhoushan, a small island near Shanghai, China. Growing up surrounded by water instilled in me a lasting appreciation for the ocean, That's why I love Seattle, where I can see the ocean every day!</p>
                <br></br>

                <p>I am a unique professional with a diverse background spanning both psychology and technology. Originally trained as a psychologist, I worked as a counselor before transitioning to my current role as a programmer specializing in Java backend development.</p>
                <br></br>
                
                <p>Beyond my professional life, <b>I have a deep passion for cats!</b> I eagerly look forward to adopting my own feline companion once I secure stable employment. In the meantime, I've gained significant experience pet-caring for friends when they travel or return to China. Through these opportunities, I've had the pleasure of caring for eight different cats of various ages and breeds!</p>
                <br></br>
                
                <p>This website is a collection of photos and stories about my cats that I have cared for. Each cat has its own story, and I hope this website will help you understand their habits. If you like, you can also contact me, I will be very happy to share more stories with you.</p>
                <br></br>
            

                <p>Hope this website will help you get to know me and my cats better. Please feel free to explore!</p>
            </div>
        </div>
    )
}

export default Homepage;