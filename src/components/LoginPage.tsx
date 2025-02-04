'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/router';
import LoginForm from './LoginForm';

const LoginPage: React.FC = () => {
  const router = useRouter();
  const [error, setError] = useState('');

  const handleLogin = (username: string, password: string) => {
    if (username === 'admin' && password === 'password') {
      localStorage.setItem('token', 'user-token'); // Add token storage
      router.push('/dashboard');
    } else {
      setError('Invalid credentials');
    }
  };

  return (
    <div className="login-page">
      <div className="login-container">
        <div className="login-header">
          <h1>Welcome Back</h1>
          <p className="mt-2 text-sm text-gray-600">
            Please sign in to your account
          </p>
        </div>
        {error && <p className="error-message">{error}</p>}
        <LoginForm onLogin={handleLogin} />
        <a href="/forgot-password" className="forgot-password">
          Forgot your password?
        </a>
      </div>
    </div>
  );
};

export default LoginPage;
