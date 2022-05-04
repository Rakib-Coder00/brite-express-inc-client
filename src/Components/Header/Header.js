import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import toast from 'react-hot-toast';
import { NavLink } from "react-router-dom";
import auth from '../../Firebase/Firebase.init';
import './Header.css'

const Header = () => {
    const [user] = useAuthState(auth);


    const handleLogout = () => {
        signOut(auth);
        toast.success('Successfully Logout!', { id: 'logout' })
    }
    return (
        <nav sticky="top" className="navbar navbar-expand-lg navbar-light bg-white py-4">
            <div className="container">
                <NavLink to='/' className="navbar-brand d-flex justify-content-between align-items-center order-lg-0" >
                    {/* <img src = "images/shopping-bag-icon.png" alt = "site icon"> */}
                    <span className="text-uppercase fw-lighter ms-2">Brite Express</span>
                </NavLink>

                {/* <div className= "order-lg-2 nav-btns">
                <button type = "button" className= "btn position-relative">
                    <i className= "fa fa-shopping-cart"></i>
                    <span className= "position-absolute top-0 start-100 translate-middle badge bg-primary">5</span>
                </button>
                <button type = "button" className= "btn position-relative">
                    <i className= "fa fa-heart"></i>
                    <span className= "position-absolute top-0 start-100 translate-middle badge bg-primary">2</span>
                </button>
                <button type = "button" className= "btn position-relative">
                    <i className= "fa fa-search"></i>
                </button>
            </div> */}

                <button className="navbar-toggler border-0" type="button" data-bs-toggle="collapse" data-bs-target="#navMenu">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse order-lg-1" id="navMenu">
                    <ul className="navbar-nav mx-auto text-center">
                        <li className="nav-item px-2 py-2">
                            <a className="nav-link text-uppercase text-dark" href="#header">home</a>
                        </li>
                        <li className="nav-item px-2 py-2">
                            <NavLink to='/services' className="nav-link text-uppercase text-dark">Services</NavLink>
                        </li>
                        <li className="nav-item px-2 py-2">
                            <NavLink to='/' className="nav-link text-uppercase text-dark">specials</NavLink>
                        </li>
                        <li className="nav-item px-2 py-2">
                            <NavLink to='./blog' className="nav-link text-uppercase text-dark">blogs</NavLink>
                        </li>
                        <li className="nav-item px-2 py-2">
                            <NavLink to='./' className="nav-link text-uppercase text-dark">about us</NavLink>
                        </li>
                        <li className="nav-item px-2 py-2 border-0">
                            {
                                user?.uid ?
                                    (<NavLink to='/login' onClick={handleLogout} className="nav-link text-uppercase text-dark" >logout</NavLink>)
                                    :
                                    (<NavLink to='/login' className="nav-link text-uppercase text-dark" >login</NavLink>)
                            }

                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Header;