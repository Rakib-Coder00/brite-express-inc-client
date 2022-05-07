import React, { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import SocialLogin from './../SocialLogin/SocialLogin';
import auth from './../../../Firebase/Firebase.init';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight, faLock, faUser, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import toast from 'react-hot-toast';
import PageTitle from '../../PageTitle/PageTitle';

const Signup = () => {
    const navigate = useNavigate();
    const emailRef = useRef('');

    const [name, setName] = useState({ value: '', error: '' })
    const [email, setEmail] = useState({ value: '', error: '' })
    const [password, setPassword] = useState({ value: '', error: '' })
    const [confirmPassword, setConfirmPassword] = useState({ value: '', error: '' })



    const [createUserWithEmailAndPassword, user, loading, error,] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
    const [updateProfile] = useUpdateProfile(auth);


    if (user) {
        toast.success('Successfully created!', {id: 'error'})
        navigate('/')
      }
      if (loading) {
        toast.loading('Loading...!', {id: 'error'})
      }
      if (error) {
          const errorMessage = error.message;
          if (errorMessage.includes('email-already-in-use')) {
            
            toast.error('Already Exist', {id: 'error'})
          }else{
            toast.error(errorMessage, {id: 'error'})
          }
      }

    const handleName = (nameInput) => {
        console.log(nameInput.value);
        if (nameInput === '') {
            setName({ value: '', error: 'Please provide a Name' })
        } else {
            setName({ value: nameInput, error: '' })
        }
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
        if (passwordInput.length < 6) {
            setPassword({ value: '', error: 'Password too short' })
        } else {
            setPassword({ value: passwordInput, error: '' })
        }
    }



    const handleConfirmPassword = (confirmPasswordInput) => {
        console.log(confirmPasswordInput, password.value);
        if (confirmPasswordInput === password.value) {
            setConfirmPassword({ value: confirmPasswordInput, error: '' })
        } else {
            setConfirmPassword({ value: '', error: 'Password not match' })
        }
    }

    const handleSignUp = async (e) => {
        e.preventDefault();

        if (email.value === '') {
            setEmail({ value: '', error: 'Email is required' })
        }
        if (password.value === '') {
            setPassword({ value: '', error: 'Password is required' })
        }


        if (email.value && password.value && confirmPassword.value === password.value) {
            await createUserWithEmailAndPassword(email.value, password.value)
            await updateProfile({ displayName: name.value });
            toast.success('Updated profile!', { id: 'update' })
        }

    };
    return (
        <div className="login-container py-5">
            <PageTitle title='Signup'/>
            <div className="signup-screen">
                <div className="screen__content">
                    <form onSubmit={handleSignUp} className="login">
                <h4 className='text-center my-2 fw-bolder'>Sign Up</h4>
                        <div className="login__field">
                            <FontAwesomeIcon className='login__icon' icon={faUser} />
                            <input onBlur={(e) => handleName(e.target.value)} ref={emailRef} type='text' name='name' id='name' className="login__input" placeholder="User name" />
                            {
                                email?.error && <p className="error">{email.error}</p>
                            }
                        </div>
                        <div className="login__field">
                            <FontAwesomeIcon className='login__icon' icon={faEnvelope} />
                            <input onBlur={(e) => handleEmail(e.target.value)} ref={emailRef} type='email' name='email' id='email' className="login__input" placeholder=" Email" />
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
                        <div className="login__field">
                            <FontAwesomeIcon className='login__icon' icon={faLock} />
                            <input onBlur={(e) => handleConfirmPassword(e.target.value)} type="password" className="login__input" placeholder="Confirm Password" />
                        </div>
                        {
                            password?.error && <small className="error">{password.error}</small>
                        }
                        <button type='submit' className="button login__submit">
                            <span className="button__text">Sign up Now</span>
                            <FontAwesomeIcon className='button__icon' icon={faChevronRight} />
                        </button>
                    </form>
                    <div className="dot">
                        <p className='redirect'>
                            Already have an account?{" "}
                            <span onClick={() => navigate("/login")}>Log in</span>
                        </p>
                    </div>
                    <SocialLogin />
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

export default Signup;