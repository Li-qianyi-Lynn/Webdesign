import { useEffect, useState } from 'react';

import './Navigation.css';

function Navigation({currentPage, navigateTo}) {

    const [menuOpen, setMenuOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    }
    
    useEffect(() => {
        const checkScreenSize = () => {
          setIsMobile(window.innerWidth < 768)
        }
        
        checkScreenSize()
        window.addEventListener('resize', checkScreenSize)
        
        return () => {
          window.removeEventListener('resize', checkScreenSize)
        }
      }, [])

      const handleNavigate = (page) => {
        navigateTo(page)
        if (isMobile) {
          setMenuOpen(false)
        }
      }
    
    return (
        <nav className="main-navigation">


            <ul className={`nav-list ${isMobile ? (menuOpen ? 'menu-open' : 'menu-closed') : ''}`}>
                <li className={currentPage === 'Homepage' ? 'active' : ''}>
                    <a href="#" onClick={(e) => {e.preventDefault(); handleNavigate('Homepage')}}>Homepage</a>
                </li>
                <li className={currentPage === 'Cats' ? 'active' : ''}>
                    <a href="#" onClick={(e) => {e.preventDefault(); handleNavigate('Cats')}}>Cats I Raised</a>
                </li>
                <li className={currentPage === 'CaringGuide' ? 'active' : ''}>
                    <a href="#" onClick={(e) => {e.preventDefault(); handleNavigate('CaringGuide')}}>Caring Guide</a>
                </li>
         
            </ul>


            {isMobile && (
                <button 
                    className={`hamburger-menu ${menuOpen ? 'active' : ''}`} 
                    onClick={toggleMenu} 
                    aria-label="Open Navigation Menu"
                    aria-expanded={menuOpen}
                >
                    <span className="hamburger-line"></span>
                    <span className="hamburger-line"></span>
                    <span className="hamburger-line"></span>
                </button>
            )}
        </nav>
    )
}

export default Navigation;

