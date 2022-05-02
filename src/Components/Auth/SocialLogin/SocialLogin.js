import { faFacebook, faGoogle } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Button, Spinner } from 'react-bootstrap';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import auth from '../../../Firebase/Firebase.init';

const SocialLogin = () => {
    const navigate = useNavigate();
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    if (user) {
        toast.success('Successfully login', {id: 'success'})
            navigate('/')
      }
    if (error) {
        toast.error(error.message, {id: 'err'})
      }
    if (loading) {
        return  <Spinner  animation="border" variant="primary"  />
      }

    const googleAuth = () => {
        signInWithGoogle()
      };
    return (
        <div className="social-login">
            <h3>log in via</h3>
            <div className="social-icons">
                <button className='social-login__icon btn text-white' onClick={googleAuth}> <FontAwesomeIcon  icon={faGoogle} /></button>
                <button className='social-login__icon btn text-white' onClick={googleAuth}> <FontAwesomeIcon icon={faFacebook} /></button>
            </div>
        </div>
    );
};

export default SocialLogin;