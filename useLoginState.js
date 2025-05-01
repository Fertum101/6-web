import { useState, useEffect, useCallback } from 'react';

export const useLoginState = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const savedAuth = localStorage.getItem('auth');
    if (savedAuth) {
      const { isLoggedIn: savedIsLoggedIn, userData: savedUserData } = JSON.parse(savedAuth);
      setIsLoggedIn(savedIsLoggedIn);
      setUserData(savedUserData);
    }
  }, []);

  const login = useCallback(async (userData) => {
    const authData = {
      isLoggedIn: true,
      userData: {
        name: userData.name,
        email: userData.email
      }
    };
    
    localStorage.setItem('auth', JSON.stringify(authData));
    setIsLoggedIn(true);
    setUserData(authData.userData);
    
    return true;
  }, []);

  const logout = useCallback(() => {
    localStorage.removeItem('auth');
    setIsLoggedIn(false);
    setUserData(null);
  }, []);

  return { isLoggedIn, userData, login, logout };
};
