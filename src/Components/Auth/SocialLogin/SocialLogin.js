import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faGoogle } from '@fortawesome/free-brands-svg-icons';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import toast from 'react-hot-toast';
import { useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../Firebase/Firebase.init';
import CustomSpinner from '../../CustomSpinner/CustomSpinner';


const SocialLogin = () => {
  const navigate = useNavigate();
  const location = useLocation()
  let from = location.state?.from?.pathname || "/";
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  if (user) {
    toast.success('Successfully login', { id: 'success' })
    navigate(from, { replace: true })
  }
  if (error) {
    toast.error(error.message, { id: 'signError' })
  }
  if (loading) {
    return (
      <CustomSpinner />
    )
  }

  const googleAuth = () => {
    signInWithGoogle()
  };
  return (
    <div className="social-login">
      <h3>log in via</h3>
      <div className="social-icons">
        <button className='social-login__icon btn text-white' onClick={googleAuth}> <FontAwesomeIcon icon={faGoogle} /></button>
        <button className='social-login__icon btn text-white' onClick={googleAuth}> <FontAwesomeIcon icon={faFacebook} /></button>
      </div>
    </div>
  );
};

export default SocialLogin;