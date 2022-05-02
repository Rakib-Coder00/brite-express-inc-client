import React, { useRef, useState } from 'react';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import {  useLocation, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faLock, faChevronRight } from '@fortawesome/free-solid-svg-icons'
import './Login.css'
import auth from './../../../Firebase/Firebase.init';
import toast from 'react-hot-toast';
import SocialLogin from '../SocialLogin/SocialLogin';

const Login = () => {
    const navigate = useNavigate();
    const emailRef = useRef('');
    const location = useLocation()
    let from = location.state?.from?.pathname || "/";


    const [email, setEmail] = useState({ value: '', error: '' });
    const [password, setPassword] = useState({ value: '', error: '' });
    const [signInWithEmailAndPassword, user, loading, error] = useSignInWithEmailAndPassword(auth);
    const [sendPasswordResetEmail] = useSendPasswordResetEmail(auth);

    if (user) {
        toast.success('Successfully login', { id: 'success' })
        navigate(from, { replace: true })
    }
    if (error) {
        toast.error(error.message, { id: 'error' })
    }
    if (loading) {
        toast.success('Loading...', { id: 'loading' })
    }
    const handleEmail = (emailInput) => {
        if (/^\S+@\S+\.\S+$/.test(emailInput)) {
            setEmail({ value: emailInput, error: '' })
        }
        else {
            setEmail({ value: '', error: 'Invalid Email' })
        }
    }
    const handlePassword = (passwordInput) => {
        setPassword({ value: passwordInput })
    }
    const handleLogin = (e) => {
        e.preventDefault();
        if (email.value === '') {
            setEmail({ value: '', error: 'Email is required' })
        }
        if (password.value === '') {
            setPassword({ value: '', error: 'Password is required' })
        }
        if (email.value && password) {
            signInWithEmailAndPassword(email.value, password.value)
        }
    }
    const resetPassword = async (e) => {
        const email = emailRef.current.value
        if (email) {
            await sendPasswordResetEmail(email)
            toast.success('Sent email', { "id": 'success' })
        }
        else {
            toast.error('Please enter your email', { "1d": 'error' })
        }
    }
    return (
        <div className="login-container py-5">
            <div className="screen">
                <div className="screen__content">
                    <form onSubmit={handleLogin} className="login">
            <h4 className='text-center my-2 fw-bolder'>Login</h4>
                        <div className="login__field">
                            <FontAwesomeIcon className='login__icon' icon={faUser} />
                            <input onBlur={(e) => handleEmail(e.target.value)} ref={emailRef} type='text' name='email' id='email' className="login__input" placeholder="User name / Email" />
                            {
                                email?.error && <p className="error">{email.error}</p>
                            }
                        </div>

                        <div className="login__field">
                            <FontAwesomeIcon className='login__icon' icon={faLock} />
                            <input onBlur={(e) => handlePassword(e.target.value)} type="password" className="login__input" placeholder="Password" />
                        </div>
                        {
                            password?.error && <small className="error">{password.error}</small>
                        }
                        <button type='submit' className="button login__submit">
                            <span className="button__text">Log In Now</span>
                            <FontAwesomeIcon className='button__icon' icon={faChevronRight} />
                        </button>
                    </form>
                    <div className="dot">
                    <p className='redirect'>
                        New to Brite Express?{" "}
                        <span onClick={() => navigate("/signup")}>Create New Account</span>
                    </p>
                    <p className='redirect'>
                        Forget Password?{" "}
                        <span onClick={resetPassword}>Reset Password</span></p>
                    </div>
                    <SocialLogin/>
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