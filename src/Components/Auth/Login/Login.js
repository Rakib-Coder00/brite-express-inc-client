import React from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faLock, faChevronRight} from '@fortawesome/free-solid-svg-icons'
import './Login.css'
import { faFacebook, faGoogle} from '@fortawesome/free-brands-svg-icons';

const Login = () => {
    return (
        <div className="login-container">
            <div className="screen">
                <div className="screen__content">
                    <form className="login">
                        <div className="login__field">
                            {/* <i className="login__icon fas fa-user"></i> */}
                            <FontAwesomeIcon className='login__icon' icon={faUser} />
                            <FontAwesomeIcon className='login__icon' icon="fa-brands fa-faTwitter" />
                            <input type="text" className="login__input" placeholder="User name / Email"/>
                        </div>
                        <div className="login__field">
                            {/* <i className="login__icon fas fa-lock"></i> */}
                            <FontAwesomeIcon className='login__icon' icon={faLock} />
                            <input type="password" className="login__input" placeholder="Password"/>
                        </div>
                        <button className="button login__submit">
                            <span className="button__text">Log In Now</span>
                            {/* <i className="button__icon fas fa-chevron-right"></i> */}
                            <FontAwesomeIcon className='button__icon ' icon={faChevronRight} />
                        </button>
                    </form>
                    <div className="social-login">
                        <h3>log in via</h3>
                        <div className="social-icons">
                            <NavLink to='/'> <FontAwesomeIcon className='social-login__icon' icon={faGoogle} /></NavLink>
                            <NavLink to='/'> <FontAwesomeIcon className='social-login__icon' icon={faFacebook} /></NavLink>
                        </div>
                    </div>
                </div>
                <div className="screen__background">
                    <span className="screen__background__shape screen__background__shape4"></span>
                    <span className="screen__background__shape screen__background__shape3"></span>
                    <span className="screen__background__shape screen__background__shape2"></span>
                    <span className="screen__background__shape screen__background__shape1"></span>
                </div>
            </div>
        </div>
    );
};

export default Login;