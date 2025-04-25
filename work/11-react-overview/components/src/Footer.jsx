function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="app-footer">
      
      <div className="footer-bottom">
        <p>&copy; {currentYear} Cat Family. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer; 