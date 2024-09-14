import "./Navbar.css"

function Navbar() {
    return (
        <div className="navbar">
            <div className="navContainer">
                <h2 className="logo">Booking</h2>
                <div className="navItems">
                    <button className="navButton register">Register</button>
                    <button className="navButton  login">Login</button>
                </div>
            </div>
        </div>
    )  
}

export default Navbar
