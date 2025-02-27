import { Navigate, Outlet } from 'react-router-dom';
import axios from 'axios';
import { useState, useEffect } from 'react';
import FullPageLoader from '../components/FullPageLoader';

export const AuthMiddleware = () => {
  const [isValid, setIsValid] = useState(null);

  useEffect(() => {
    const validateToken = async () => {
      const token = localStorage.getItem('access_token');

      if (!token) {
        setIsValid(false);
        return;
      }

      try {
        const response = await axios.post('http://localhost:8000/api/auth/verify',
          { token },
          {
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${token}`
            }
          }
        );

        setIsValid(response.status === 200);
      } catch (error) {
        localStorage.removeItem('access_token');
        setIsValid(false);
      }
    };

    validateToken();
  }, []);

  // Handle loading state
  if (isValid === null) {
    return <FullPageLoader />;
  }

  // Redirect if not authenticated
  if (isValid === false) {
    return <Navigate to="/signin" replace />;
  }

  return <Outlet />; // This renders the child routes
};