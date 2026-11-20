function Navbar() {
    return (
        <nav className="navbar">
            <a href="#" className="logo">
                <span className="car-icon">🚘</span>
                Car<span>Hub</span>
            </a>

            <div className="nav-links">
                <a href="#home" className="active">Home</a>
                <a href="#cars">Cars</a>
                <a href="#about">About</a>
                <a href="#contact">Contact</a>
            </div>

            <a href="#contact" className="sell-button">🚘 Sell Your Car</a>
        </nav>
    );
}

export default Navbar;
