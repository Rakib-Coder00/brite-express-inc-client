import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import auth from './../../../Firebase/Firebase.init';
import { Spinner } from "react-bootstrap";

const RequireAuth = ({ children }) => {
  let location = useLocation();

  const [user, loading] = useAuthState(auth);

  if (loading) {
    return (
      <div className="text-center"> <Spinner animation="border" variant="primary" /></div>
    )
  }

  if (!user) {

    return <Navigate to="/login" state={{ from: location }} replace />;
  }
  if (!user.emailVerified) {
    return <div><h4 className='text-danger'>Email is not verified</h4></div>
  }

  return children
};

export default RequireAuth;