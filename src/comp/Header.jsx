import React from 'react';


const Header = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-secondary">
                <div className="container">
                    <button href="#" className="navbar-brand border-0 bg-transparent">Todo</button>

                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <button href="#" className="nav-link">Home</button>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    )
}

export default Header;