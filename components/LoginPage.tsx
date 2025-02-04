'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import LoginForm from './LoginForm';

const LoginPage: React.FC = () => {
  const router = useRouter();
  const [error, setError] = useState('');

  const handleLogin = (username: string, password: string) => {
    if (username === 'admin' && password === 'password') {
      router.push('/dashboard');
    } else {
      setError('Invalid credentials');
    }
  };

  return (
    <div className="login-page">
      <h1>Login</h1>
      {error && <p className="error">{error}</p>}
      <LoginForm onLogin={handleLogin} />
      <a href="/forgot-password">Forgot Password?</a>
    </div>
  );
};

export default LoginPage;
