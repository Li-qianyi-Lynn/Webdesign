import { useState } from 'react'
import './App.css'
import CaringGuide from './CaringGuide'
import Cats from './Cats'
import Footer from './Footer'
import Header from './Header'
import Homepage from './Homepage'
import Navigation from './Navigation'

function App() {
  const [currentPage, setCurrentPage] = useState('Homepage')

  //skip to main content

  const navigateTo = (page) => {
    setCurrentPage(page)
  }

  const renderPage = () => {

    switch (currentPage) {
      case 'Homepage':
        return <Homepage />
      case 'Cats':
        return <Cats />
      case 'CaringGuide':
        return <CaringGuide />
   
  
      default:
        return <Homepage />
    }
  }

  return (        
    <div className="app-container">
      {/* skip to main content */}

      <div class="skip-link-container">
            <a href="#main-content" class="skip-link">Skip to content</a>
      </div>
      
      <div className="content-container">
        <Header navigateTo={navigateTo} />
        <Navigation currentPage={currentPage} navigateTo={navigateTo} />

        <main id="main-content" className="app-main">

        {renderPage()}
        </main>
        <Footer />
      </div>
    </div>
  )
}

export default App;
