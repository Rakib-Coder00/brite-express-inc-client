import { faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import toast from 'react-hot-toast';
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import auth from '../../Firebase/Firebase.init';
import './Header.css'

const Header = () => {
    const [user] = useAuthState(auth);
    const location = useLocation()
    const navigate = useNavigate();
    let from = location.state?.from?.pathname || "/";


    const handleLogout = () => {
        signOut(auth);
        navigate(from, { replace: true })
        toast.success('Successfully Logout!', { id: 'logout' })
    }
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-white py-4 sticky-top">
            <div className="container">
                <NavLink to='/' className="navbar-brand d-flex justify-content-between align-items-center order-lg-0" >
                    {/* <img src = "images/shopping-bag-icon.png" alt = "site icon"> */}
                    <span className="text-uppercase fw-lighter ms-2">Brite Express</span>
                </NavLink>
                <button className="navbar-toggler border-0" type="button" data-bs-toggle="collapse" data-bs-target="#navMenu">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse order-lg-1" id="navMenu">
                    <ul className="navbar-nav mx-auto text-center">
                        <li className="nav-item px-2 py-2">
                            <NavLink to='/' className={({ isActive }) => (isActive ? "nav-link text-uppercase text-dark position-relative active-link" : "nav-link text-uppercase text-dark position-relative")}><span></span> home</NavLink>
                        </li>
                        {/* <li className="nav-item px-2 py-2">
                            <NavLink to='/inventory' className={({ isActive }) => (isActive ? "nav-link text-uppercase text-dark position-relative active-link" : "nav-link text-uppercase text-dark position-relative")}><span></span> inventory</NavLink>
                        </li> */}
                        <li className="nav-item px-2 py-2">
                            <NavLink to='/manageInventory' className={({ isActive }) => (isActive ? "nav-link text-uppercase text-dark position-relative active-link" : "nav-link text-uppercase text-dark position-relative")}><span></span>Manage</NavLink>
                        </li>
                        <li className="nav-item px-2 py-2">
                            <NavLink to='./blog' className={({ isActive }) => (isActive ? "nav-link text-uppercase text-dark position-relative active-link" : "nav-link text-uppercase text-dark position-relative")}><span></span>blogs</NavLink>
                        </li>
                        <li className="nav-item px-2 py-2">
                            <NavLink to='./about' className={({ isActive }) => (isActive ? "nav-link text-uppercase text-dark position-relative active-link" : "nav-link text-uppercase text-dark position-relative")}><span></span>about us</NavLink>
                        </li>
                    </ul>
                    <div className="order-lg-2 nav-btns navbar-nav mx-auto text-center">


                       {user?.uid? (
                            <div className="dropdown">
                            <button type="button" className="btn position-relative"   id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                <NavLink className="nav-link text-uppercase text-dark  dropdown-toggle" to="/">{user ? <FontAwesomeIcon icon={faUser} /> : null}  {user?.displayName}</NavLink>
                            </button>

                            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                <li><NavLink to='/manageInventory' className="nav-link text-uppercase text-dark dropdown-item">Manage Items</NavLink></li>
                                <li><NavLink to='/add' className="nav-link text-dark text-text-sm-center dropdown-item">Add Item</NavLink></li>
                                <li><NavLink to='/myitems' className="nav-link text-dark dropdown-item">My Items</NavLink></li>
                                <NavLink to='/' onClick={handleLogout} className="nav-link text-uppercase text-dark" >logout</NavLink>
                            </ul>
                        </div>
                       )
                       :
                       (

                        <button type="button" className="btn position-relative">
                            {
                                user?.uid ?
                                    (<NavLink to='/' onClick={handleLogout} className="nav-link text-uppercase text-dark" >logout</NavLink>)
                                    :
                                    (<NavLink to='/login' className="nav-link text-uppercase text-dark" >login</NavLink>)
                            }

                        </button>
                       )
                           }

                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Header;