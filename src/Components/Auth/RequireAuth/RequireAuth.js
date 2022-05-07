import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import auth from './../../../Firebase/Firebase.init';
import CustomSpinner from './../../CustomSpinner/CustomSpinner';

const RequireAuth = ({ children }) => {
  let location = useLocation();

  const [user, loading] = useAuthState(auth);

  if (loading) {
    return (
      <CustomSpinner/>
    )
  }

  if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }
  if (user.providerData[0]?.providerId === 'password' && !user.emailVerified) {
    return <div><h4 className='text-danger text-center py-5'>Email is not verified</h4></div>
  }

  return children
};

export default RequireAuth;