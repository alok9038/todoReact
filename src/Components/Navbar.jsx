import React from 'react';
import HomeIcon from "../assets/icons/home.png";
// import UserIcon from "../assets/icons/user.png";
import BriefcaseIcon from "../assets/icons/briefcase.png";
import messageIcon from "../assets/icons/message.png";
import { NavLink } from 'react-router-dom';
const Navbar = (prop) =>{
    return(
        <>
            <nav className="navbar navbar-light bg-white navbar-expand-lg shadow-sm sticky-top">
                <div className="container">
                    <NavLink to="/" className="navbar-brand mx-lg-0 mx-auto">{prop.brand}</NavLink>
                    <div className="input-group ms-4 d-lg-flex d-none rounded-15 w-50 me-auto border">
                        <input type="search"className="form-control border-0  rounded-15 shadow-none " />
                        <button className="btn shadow-none "><i className="fa fa-search"/></button>
                    </div>
                    <ul className="navbar-nav d-lg-flex d-none">             
                        <li className="nav-item"><NavLink to="/" exact className="nav-link ms-2 rounded-15 px-3 navigation"><img src={HomeIcon} className="icons" alt=""/></NavLink></li>
                        <li className="nav-item"><NavLink to="/contact" exact className="nav-link ms-2 rounded-15 px-4 navigation"><i className="far text-dark fa-user" ></i></NavLink></li>
                        <li className="nav-item"><NavLink to="/contact" exact className="nav-link ms-2 rounded-15 px-3 navigation"><img src={BriefcaseIcon} className="icons" alt=""/></NavLink></li>
                        <li className="nav-item"><NavLink to="/contact" exact className="nav-link ms-2 rounded-15 px-3 navigation"><img src={messageIcon} className="icons" alt=""/></NavLink></li>
                        <li className="nav-item"><NavLink to="/contact" exact className="nav-link ms-2 rounded-15 px-4 navigation"><i className="far text-dark fa-bell" ></i></NavLink></li>
                    </ul>
                </div>
            </nav>
        </>
    )
}

export default Navbar;