import logo from './images/logo.jpg';
function Header({navigateTo}) {

    return (
        <header className="app-header">
            <div className="logo-container">
                <img 
                    src={logo} 
                    alt="There is a cat on the logo" 
                    className="logo" 
                    onClick={() => navigateTo('Homepage')}
                />
            </div>
            <div className="header-title">
                <h1>Lynn and her Cats</h1>
            </div>
        </header>
    )
}

export default Header;